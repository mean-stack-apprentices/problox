import * as mongoose from 'mongoose';
import { Merch } from './merch.model.js';
import { User } from './user.model.js';

export interface Cart{
    _id?:{type: mongoose.Types.ObjectId}
    user:User,
    items: {merch:Merch}   
}