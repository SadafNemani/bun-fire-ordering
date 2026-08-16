import type { CategoryId } from "./menu";

export type FulfillmentType = "pickup" | "delivery";

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  category: CategoryId;
  notes?: string;
}

export interface Cart {
  items: CartItem[];
}

export interface CheckoutFormData {
  fullName: string;
  phone: string;
  fulfillment: FulfillmentType;
  specialInstructions?: string;
}

export interface Order {
  orderNumber: string;
  items: CartItem[];
  subtotal: number;
  total: number;
  customer: {
    fullName: string;
    phone: string;
  };
  fulfillment: FulfillmentType;
  specialInstructions?: string;
  estimatedTime: string;
  createdAt: string;
}
