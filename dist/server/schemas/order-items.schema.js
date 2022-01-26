import mongoose from 'mongoose';
import '../../shared/models/order-items.model';
const { Schema, model } = mongoose;
const orderItemSchema = new Schema({
    quantity: {
        type: Number,
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Merch'
    }
});
exports.OrderItem = mongoose.model('OrderItem', orderItemSchema);
//# sourceMappingURL=order-items.schema.js.map