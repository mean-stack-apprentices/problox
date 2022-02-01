import  mongoose  from "mongoose";
import { Role } from "../../shared/models/role.model.js";
const { Schema, model } = mongoose;

const RoleSchema = new Schema({
      name: { type:String, required: true },
});

export const RoleModel = model<Role>('Role', RoleSchema)