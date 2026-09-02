"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCartIconRef } from "@/context/CartIconPositionContext";

interface FlyEvent {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  image: string;
}

let flyListeners: ((e: Omit<FlyEvent, "id" | "endX" | "endY">) => void)[] = [];

export function triggerFlyToCart(startX: number, startY: number, image: string) {
  flyListeners.forEach((fn) => fn({ startX, startY, image }));
}

export default function FlyToCartLayer() {
  const cartIconRef = useCartIconRef();
  const [flights, setFlights] = useState<FlyEvent[]>([]);

  useEffect(() => {
    const listener = ({ startX, startY, image }: Omit<FlyEvent, "id" | "endX" | "endY">) => {
      const rect = cartIconRef.current?.getBoundingClientRect();
      if (!rect) return;
      const id = Date.now();
      setFlights((prev) => [
        ...prev,
        {
          id,
          startX,
          startY,
          endX: rect.left + rect.width / 2,
          endY: rect.top + rect.height / 2,
          image,
        },
      ]);
      setTimeout(() => setFlights((prev) => prev.filter((f) => f.id !== id)), 700);
    };
    flyListeners.push(listener);
    return () => {
      flyListeners = flyListeners.filter((l) => l !== listener);
    };
  }, [cartIconRef]);

  return (
    <AnimatePresence>
      {flights.map((f) => (
        <motion.div
          key={f.id}
          initial={{ x: f.startX, y: f.startY, opacity: 1, scale: 1 }}
          animate={{ x: f.endX, y: f.endY, opacity: 0.3, scale: 0.3 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.3, 0, 0.6, 1] }}
          className="rounded-button border-surface shadow-card pointer-events-none fixed top-0 left-0 z-150 h-10 w-10 overflow-hidden border-2"
          style={{ backgroundImage: `url(${f.image})`, backgroundSize: "cover" }}
        />
      ))}
    </AnimatePresence>
  );
}
