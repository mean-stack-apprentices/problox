import type mongoose from 'mongoose';
import type { User } from './user.model.js';
export interface Friends {
    _id?:string
    text:string
    user: {type: mongoose.Types.ObjectId} | User;
  }
  