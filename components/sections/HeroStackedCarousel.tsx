"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronLeft, ChevronRight, ArrowRight, Tag } from "lucide-react";
import type { Product } from "@/data/products";

interface Props {
  products: Product[];
}

export default function HeroStackedCarousel({ products }: Props) {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const total = products.length;

  const goTo = useCallback(
    (index: number) => {
      if (animating) return;
      setAnimating(true);
      setActive((index + total) % total);
      setTimeout(() => setAnimating(false), 500);
    },
    [animating, total]
  );

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Auto-slide
  const startTimer = useCallback(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(next, 1500);
  }, [next]);

  useEffect(() => {
    startTimer();
    return () => { if (timerRef.current) clearTimeout(timerRef.current); };
  }, [startTimer]);

  // Touch/swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) { diff > 0 ? next() : prev(); }
  };

  const getCardStyle = (index: number) => {
    const diff = ((index - active) + total) % total;
    const normalised = diff > total / 2 ? diff - total : diff;

    if (normalised === 0) {
      return { transform: "translateX(0%) scale(1)", zIndex: 30, opacity: 1, filter: "blur(0px)" };
    }
    if (normalised === 1 || normalised === -(total - 1)) {
      return { transform: "translateX(72%) scale(0.82)", zIndex: 20, opacity: 0.7, filter: "blur(1.5px)" };
    }
    if (normalised === -1 || normalised === (total - 1)) {
      return { transform: "translateX(-72%) scale(0.82)", zIndex: 20, opacity: 0.7, filter: "blur(1.5px)" };
    }
    if (normalised === 2) {
      return { transform: "translateX(130%) scale(0.68)", zIndex: 10, opacity: 0.3, filter: "blur(3px)" };
    }
    if (normalised === -2) {
      return { transform: "translateX(-130%) scale(0.68)", zIndex: 10, opacity: 0.3, filter: "blur(3px)" };
    }
    return { transform: "translateX(0%) scale(0.5)", zIndex: 0, opacity: 0, filter: "blur(6px)" };
  };

  return (
    <div
      className="relative w-full h-[420px] select-none"
      onMouseEnter={() => { if (timerRef.current) clearTimeout(timerRef.current); }}
      onMouseLeave={startTimer}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Cards */}
      <div className="absolute inset-0 flex items-center justify-center">
        {products.map((product, index) => {
          const style = getCardStyle(index);
          const isActive = index === active;
          return (
            <div
              key={product.slug}
              className="absolute w-64 transition-all duration-300 ease-out"
              style={style}
            >
              <div className={`bg-white rounded-xl overflow-hidden shadow-2xl ${isActive ? "shadow-black/40 ring-2 ring-white/20" : "shadow-black/20"} transition-all duration-300 ${isActive ? "hover:-translate-y-2 hover:shadow-black/50" : ""}`}>
                {/* Image */}
                <div className="relative h-44 bg-gradient-to-br from-[#071842] to-[#325C8F] overflow-hidden">
                  {product.images[0] ? (
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className={`object-contain p-4 transition-transform duration-500 ${isActive ? "hover:scale-110" : ""}`}
                      sizes="256px"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Tag size={32} className="text-white/20" />
                    </div>
                  )}
                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-[#1E88E5]/90 text-white text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider backdrop-blur-sm">
                      {product.category.replace(/-/g, " ").split(" ").slice(0, 2).join(" ")}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4">
                  {product.brand && (
                    <p className="text-[#1E88E5] text-[10px] font-bold uppercase tracking-wider mb-1">{product.brand}</p>
                  )}
                  <h3 className="text-[#071842] font-black text-sm leading-snug mb-1 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-400 text-xs line-clamp-1 mb-3">{product.shortDescription}</p>

                  {isActive && (
                    <div className="flex gap-2 mt-1">
                      <Link
                        href={`/products/${product.slug}`}
                        className="flex-1 text-center bg-[#071842] hover:bg-[#325C8F] text-white text-[11px] font-bold py-2 rounded-lg transition-colors"
                      >
                        View Details
                      </Link>
                      <Link
                        href="/contact"
                        className="flex-1 text-center bg-[#1E88E5] hover:bg-[#1565C0] text-white text-[11px] font-bold py-2 rounded-lg transition-colors"
                      >
                        Get Quote
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-9 h-9 bg-white/15 hover:bg-white/30 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-9 h-9 bg-white/15 hover:bg-white/30 border border-white/20 rounded-full flex items-center justify-center text-white transition-all duration-200 hover:scale-110 backdrop-blur-sm"
        aria-label="Next"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-40">
        {products.slice(0, Math.min(products.length, 8)).map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            className={`rounded-full transition-all duration-300 ${i === active ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
