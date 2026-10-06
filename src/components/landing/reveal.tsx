"use client";

import { useEffect, useLayoutEffect, useRef } from "react";
import type { ReactNode } from "react";

/**
 * useLayoutEffect di client (pasang state tersembunyi SEBELUM paint → tanpa kedip),
 * useEffect di server (aman SSR).
 */
const useIsoLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Animasi muncul halus saat elemen masuk viewport.
 *
 * Progressive enhancement — konten SELALU terlihat di HTML server.
 * State tersembunyi hanya dipasang via JavaScript; kalau JS gagal dimuat,
 * halaman tetap tampil utuh (tidak mungkin blank).
 * Hormati prefers-reduced-motion.
 */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  /** delay dalam detik (0.1 = 100ms) */
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useIsoLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;

    el.classList.add("reveal-hidden");

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.classList.remove("reveal-hidden");
            el.classList.add("reveal-shown");
            io.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -40px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${className ?? ""}`}
      style={delay ? { transitionDelay: `${Math.round(delay * 1000)}ms` } : undefined}
    >
      {children}
    </div>
  );
}
