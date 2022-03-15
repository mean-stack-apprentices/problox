import mongoose from 'mongoose';
import type { Game } from '../../shared/models/game.model';
const {Schema, model} = mongoose;


const gameSchema = new Schema<Game>({
    name: {
        type: String, 
        required: true, 
        minlength: 3, 
        maxlength: 25,
        trim: true,
    },

    description : {
        type: String, 
        required: true, 
        maxlength: 100,
        trim: true,
    },
    price: {
        type: Number,
        required: true, 
        match: /(?=.*?\d)^\$?(([1-9]\d{0,2}(\d{3})*)|\d+)?(\.\d{1,2})?$/,
        default: 0,
        trim: true,
    },
    imgUrl: {type: String},
    tier: {
        type: String,
        required: true,
        ref: "Tier",
    },
    status: {
        type: Boolean,
        required: true,
        default: true,
    }
});

export const GameModel = model<Game>('Game', gameSchema);