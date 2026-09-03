"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type CursorMode = "default" | "interactive" | "text";

interface Burst {
  id: number;
  x: number;
  y: number;
}

export default function CustomCursor() {
  const isFinePointer = useMediaQuery("(pointer: fine)");
  const [isVisible, setIsVisible] = useState(false);
  const [cursorMode, setCursorMode] = useState<CursorMode>("default");
  const [bursts, setBursts] = useState<Burst[]>([]);

  const cursorRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const mouse = useRef({ x: 0, y: 0 });
  const pos = useRef({ x: 0, y: 0 });
  const glowPos = useRef({ x: 0, y: 0 });
  const rafId = useRef<number | null>(null);
  const burstIdRef = useRef(0);

  useEffect(() => {
    if (!isFinePointer) return;

    document.documentElement.classList.add("custom-cursor-active");

    let idleTimeout: ReturnType<typeof setTimeout> | null = null;

    const startLoop = () => {
      if (rafId.current !== null) return;
      const animate = () => {
        pos.current.x += (mouse.current.x - pos.current.x) * 0.2;
        pos.current.y += (mouse.current.y - pos.current.y) * 0.2;
        glowPos.current.x += (mouse.current.x - glowPos.current.x) * 0.09;
        glowPos.current.y += (mouse.current.y - glowPos.current.y) * 0.09;

        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;
        }
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${glowPos.current.x}px, ${glowPos.current.y}px, 0)`;
        }

        rafId.current = requestAnimationFrame(animate);
      };
      rafId.current = requestAnimationFrame(animate);
    };

    const stopLoop = () => {
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
        rafId.current = null;
      }
    };

    const onMouseMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      const target = e.target as HTMLElement;
      if (target.closest("input, textarea, [contenteditable='true']")) {
        setCursorMode("text");
      } else if (target.closest("button, a, [role='button']")) {
        setCursorMode("interactive");
      } else {
        setCursorMode("default");
      }

      startLoop();
      if (idleTimeout) clearTimeout(idleTimeout);
      idleTimeout = setTimeout(stopLoop, 2000);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
      stopLoop();
      if (idleTimeout) clearTimeout(idleTimeout);
    };

    const onClick = (e: MouseEvent) => {
      const id = burstIdRef.current++;
      setBursts((prev) => [...prev, { id, x: e.clientX, y: e.clientY }]);
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 500);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.documentElement.addEventListener("mouseleave", onMouseLeave);
    window.addEventListener("click", onClick);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.documentElement.removeEventListener("mouseleave", onMouseLeave);
      window.removeEventListener("click", onClick);
      stopLoop();
      if (idleTimeout) clearTimeout(idleTimeout);
    };
  }, [isFinePointer, isVisible]);

  if (!isFinePointer) return null;

  const isInteractive = cursorMode === "interactive";
  const isText = cursorMode === "text";

  return (
    <>
      <div
        ref={glowRef}
        className="rounded-pill pointer-events-none fixed top-0 left-0 z-99 -translate-x-1/2 -translate-y-1/2 blur-md transition-[opacity,width,height] duration-300"
        style={{
          opacity: isVisible && !isText ? (isInteractive ? 0.75 : 0.5) : 0,
          width: isInteractive ? 84 : 48,
          height: isInteractive ? 84 : 48,
          background: "radial-gradient(circle, #FFC857 0%, #FFC857 30%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-100 -translate-x-1/2 -translate-y-1/2"
        style={{ opacity: isVisible ? 1 : 0 }}
        aria-hidden="true"
      >
        {isText ? (
          <div className="rounded-pill bg-charcoal h-5 w-0.5 transition-opacity duration-150" />
        ) : (
          <div
            className="flame-flicker transition-transform duration-200 ease-out"
            style={{
              transform: isInteractive ? "scale(1.5) rotate(-6deg)" : "scale(1) rotate(0deg)",
            }}
          >
            <svg
              className="flame-cursor-icon"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 2C10 6 6 8 6 13a6 6 0 0 0 12 0c0-2-1-3-2-4 .5 2-1 3-1 3 .5-3-1-5-3-6-1 2 0 3-1 4-1-1-1-3 1-8Z"
                fill="#FFC857"
                stroke="#1F1F1F"
                strokeWidth="0.5"
              />
            </svg>
          </div>
        )}
      </div>

      <AnimatePresence>
        {bursts.map((burst) => (
          <div
            key={burst.id}
            className="pointer-events-none fixed top-0 left-0 z-101"
            style={{ transform: `translate3d(${burst.x}px, ${burst.y}px, 0)` }}
          >
            {Array.from({ length: 6 }).map((_, i) => {
              const angle = (i / 6) * Math.PI * 2;
              return (
                <motion.span
                  key={i}
                  initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                  animate={{
                    x: Math.cos(angle) * 24,
                    y: Math.sin(angle) * 24,
                    opacity: 0,
                    scale: 0.3,
                  }}
                  transition={{ duration: 0.45, ease: "easeOut" }}
                  className="rounded-pill bg-accent absolute h-1.5 w-1.5"
                />
              );
            })}
          </div>
        ))}
      </AnimatePresence>
    </>
  );
}
