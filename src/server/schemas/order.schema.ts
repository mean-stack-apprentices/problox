import  mongoose  from "mongoose"
import { Order } from "../../shared/models/order.model"
const {Schema, model} = mongoose

const orderSchema = new Schema<Order>({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'OrderItem',
        required: true
      }],
      shippingAddress: {
          type: mongoose.Schema.Types.Mixed,
          required: true
      },
    totalPrice: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
})

exports.Order = mongoose.model('Order', orderSchema)
