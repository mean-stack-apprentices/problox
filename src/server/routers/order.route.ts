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
    const {orderItems, shippingAddress, totalPrice, user} = req.body;
    const items = await OrderItemModel.insertMany(orderItems)
    const order = new OrderModel( {
        orderItems: items,
        shippingAddress,
        totalPrice,
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

