import { Schema } from "mongoose";
import { model } from "mongoose";
import { Promotion } from "../../shared/models/promotion.model";

const promotionSchema = new Schema<Promotion>({
    name: {type: String},
    description: {type: String},
    validDates: {type: String},
    discount: {type: Number},
    couponCodes: {type: String},
    type: {type: String}
});

export const PromotionModel = model('Promotion', promotionSchema);