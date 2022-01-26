import  mongoose from 'mongoose';
import { orderItems } from '../../shared/models/order-items.model';
const {Schema, model} = mongoose

const orderItemSchema = new Schema<orderItems>({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Merch'
    }
})

exports.OrderItem = mongoose.model('OrderItem', orderItemSchema)