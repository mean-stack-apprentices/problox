import "../../shared/models/admin.model.js";
import mongoose from 'mongoose';
const { Schema, model } = mongoose;
const adminSchema = new Schema({
    adminName: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    role: { type: String, required: true },
});
export const AdminModel = model('Admin', adminSchema);
//# sourceMappingURL=admin.schema.js.map