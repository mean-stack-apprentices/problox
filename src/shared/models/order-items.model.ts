import { Merch } from "./merch.model";
export interface orderItems {
    quantity: number,
    product: string | Merch
}