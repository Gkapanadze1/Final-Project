import { CartItem } from "./Cartitem_interface";

export type OrderSummaryTypes = {
    cart: CartItem[],
    totalPrice: number,
    finalPrice: number,
  };