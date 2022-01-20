import { model, Schema } from "mongoose";
import "../../shared/models/merch.model.js";
const merchSchema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    imgUrl: { type: String, required: true }
});
export const MerchModel = model('Merch', merchSchema);
//# sourceMappingURL=merch.schema.js.map