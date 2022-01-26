import mongoose from "mongoose";
import "../../shared/models/order.model";
const { Schema, model } = mongoose;
const orderSchema = new Schema({
    orderItems: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'OrderItem',
            required: true
        }],
    shippingAddress1: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    totalPrice: {
        type: Number
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    }
});
exports.Order = mongoose.model('Order', orderSchema);
//# sourceMappingURL=order.schema.js.map