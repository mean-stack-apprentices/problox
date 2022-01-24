import { Admin } from "../../shared/models/admin.model.js";
import mongoose from 'mongoose';
const {Schema, model} = mongoose


const adminSchema = new Schema<Admin>({
    adminName: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    role: {type: String, required: true},
});

export const AdminModel = model<Admin>('Admin',adminSchema)