import { CartItem } from "./Cartitem_interface";

export type CheckoutOrderTypes = {
    cart: CartItem[];
    totalPrice: number;
    finalPrice: number;
  }