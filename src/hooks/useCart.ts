"use client";

import { useContext } from "react";
import { CartContext } from "@/context/CartContext";

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  const { items, addItem, removeItem, updateQuantity } = context;

  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return { items, itemCount, total, addItem, removeItem, updateQuantity };
}
