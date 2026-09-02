"use client";

import { createContext, useContext, useRef, type ReactNode } from "react";

const CartIconPositionContext = createContext<React.RefObject<HTMLElement | null> | null>(null);

export function CartIconPositionProvider({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLElement | null>(null);
  return (
    <CartIconPositionContext.Provider value={ref}>{children}</CartIconPositionContext.Provider>
  );
}

export function useCartIconRef() {
  const ctx = useContext(CartIconPositionContext);
  if (!ctx) throw new Error("useCartIconRef must be used within a CartIconPositionProvider");
  return ctx;
}
