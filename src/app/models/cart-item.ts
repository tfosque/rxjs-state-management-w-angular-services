export interface CartItem {
  name: string;
  desc: string;
  productId: string;
  price: number;
  qty: number;
}

export interface CartSummary {
  subtotal: number;
  otherCharges: number | string;
  tax: number;
  total: number;
}