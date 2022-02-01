import mongoose from 'mongoose';
import type { User } from '../../shared/models/user.model.js';
const {Schema, model} = mongoose

const userSchema = new Schema<User>({
    name: {type: String, required: true},
    username: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    roles: [{type: mongoose.Types.ObjectId, required: true, ref: 'Role'}],
});

export const UserModel = model<User>('User',userSchema)
