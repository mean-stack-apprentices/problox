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
        type: String,
        required: true, 
        match: /^\$?(([1-9]\d{0,2}(,\d{3})*)|0)?\.\d{1,2}$/,
        trim: true,
    },
    imgUrl: {type: String},
    tier: {
        type: String,
        required: true, 
        enum: ["free", "paid"],
        default: "free"
    }
});

export const GameModel = model('Game', gameSchema);