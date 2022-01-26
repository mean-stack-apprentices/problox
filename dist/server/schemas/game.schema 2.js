import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const gameSchema = new Schema({
    name: { type: String, required: true, min: 3, max: 25 },
    description: { type: String, required: true, max: 50 },
    price: {
        type: Number,
        required: true,
        min: 0,
        default: 0.00
    },
    imgUrl: { type: String },
    tier: {
        type: String,
        required: true,
        enum: ["free", "paid"],
        default: "free"
    }
});
export const GameModel = model('Game', gameSchema);
//# sourceMappingURL=game.schema.js.map