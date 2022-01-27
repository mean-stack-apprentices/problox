import { Merch } from "./merch.model.js";
export interface orderItems {
    quantity: number,
    product: string | Merch
}