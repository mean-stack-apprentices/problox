import { Schema } from "mongoose";
import { model } from "mongoose";
import "../../shared/models/promotion.model";
const promotionSchema = new Schema({
    name: { type: String },
    description: { type: String },
    validDates: { type: String },
    discount: { type: Number },
    couponCodes: { type: String },
    type: { type: String }
});
export const PromotionModel = model('Promotion', promotionSchema);
//# sourceMappingURL=promotion.schema.js.map