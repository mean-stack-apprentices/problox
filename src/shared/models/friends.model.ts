
import type { User } from './user.model.js';
export interface Friends {
    _id?:string;
    user: User;
    friends: string[]
  }
  