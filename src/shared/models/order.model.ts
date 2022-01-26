import { orderItems } from "./order-items.model";
import { User } from "./user.model";

interface shippingAddress {
    street: string,
    city: string,
    zip: string,
    country: string,
    phone: string
}

export interface Order {
    _id?: string,
    orderItems: orderItems[],
    shippingAddress: shippingAddress,
    totalPrice: number,
    user: string | User
}