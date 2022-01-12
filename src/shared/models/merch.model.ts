import * as mongoose from "mongoose";

export interface Merch {
    _id?: { type: mongoose.Types.ObjectId };
    name: string;
    price: number;
    description: string;
    imgUrl: string;
}