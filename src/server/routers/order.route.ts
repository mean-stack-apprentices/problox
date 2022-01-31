import express from "express";
import { OrderItemModel } from "../schemas/order-items.schema.js";
import { OrderModel } from "../schemas/order.schema.js";
export const orderRouter = express.Router();

orderRouter.get('/', async(req, res) => {
    const orderList = await OrderModel.find()

    if(!orderList) {
        res.status(500).json({success: false})
    }
    res.send(orderList)
})

orderRouter.post("/create", async function(req,res) {
    const {orderItems, shippingAddress, user} = req.body;
    const items = await OrderItemModel.insertMany(orderItems)

    const totalPrices = await Promise.all(items.map(async (orderItemId)=> {
        const orderItem = await OrderItemModel.findById(orderItemId).populate('product', 'price')
        const totalPrice = orderItem.product.price * orderItem.quantity
        return totalPrice
    }))

    const grandTotal = totalPrices.reduce((a,b)=> a + b, 0)
    
    const order = new OrderModel( {
        orderItems: items,
        shippingAddress,
        totalPrice: grandTotal,
        user
    })
    order
    .save()
    .then(data => {
        console.log('new order : ' + data)
        res.json(data);
    })
    .catch(err => res.status(501).json(err))
});

orderRouter.put('/:id', async(req, res) => {
    const order = await OrderModel.findByIdAndUpdate(
        req.params.id,
        {
            shippingAddress: req.body.shippingAddress
        },
        {new: true}
    )

    if(!order) {
        return res.status(400).send('the order cannot be found');
    }
    res.send(order)
})

orderRouter.delete('/:id', (req, res) => {
    OrderModel.findByIdAndRemove(req.params.id).then(async order => {
        if(order) {
            order.orderItems.map(async orderItem => {
                await OrderItemModel.findByIdAndRemove(orderItem)
            })
            return res.status(200).json({success: true, message: 'the order is deleted'
            })
        } else {
            return res.status(404).json({success: false, message: 'the order cannot be found'})
        }
    }).catch(err => {
        return res.status(500).json({success: false, error: err})
    })
})