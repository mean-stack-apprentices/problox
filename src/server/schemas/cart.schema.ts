import mongoose from "mongoose";
import { Cart } from './../../shared/models/cart.model.js';

const { Schema, model } = mongoose

const cartSchema = new Schema<Cart>({
    user: { type: mongoose.Types.ObjectId, ref: 'User' },
    items: [{
        merch: { type: mongoose.Types.ObjectId, ref: 'Merch' },
    }]
});


export const CartModel=model<Cart>('Cart',cartSchema)