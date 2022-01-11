import type * as mongoose from 'mongoose';
export interface Chat {
  _id?:string
  sender:string,
  to: string,
  text:string
}
