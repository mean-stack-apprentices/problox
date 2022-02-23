import mongoose from 'mongoose';
import { Cart } from '../../shared/models/cart.model.js'

const { Schema, model } = mongoose

const cartSchema = new mongoose.Schema<Cart>({
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    items: [{
        game: {
            type: mongoose.Types.ObjectId, ref: 'Game' },
        merch: {
            type: mongoose.Types.ObjectId, ref: 'Merch' },
    }]
});

export const CartModel=model<Cart>('Cart',cartSchema)

