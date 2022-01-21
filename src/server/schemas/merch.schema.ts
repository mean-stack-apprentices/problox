import mongoose from "mongoose";
import { Merch } from "../../shared/models/merch.model.js";

const { model, Schema } = mongoose;

const merchSchema = new Schema<Merch>({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    description: {type: String, required: true},
    imgUrl: {type: String, required: true}
});

export const MerchModel = model('Merch', merchSchema);