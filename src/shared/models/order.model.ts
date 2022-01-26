import { orderItems } from "./order-items.model";
import { User } from "./user.model";

export interface Order {
    _id?: string,
    orderItems: orderItems[],
    shippingAddress1: string,
    city: string,
    zip: string,
    country: string,
    phone: string,
    totalPrice: number,
    user: string | User
}