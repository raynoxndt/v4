"use client";
import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import type { Product } from "@/data/products";

export default function FeaturedCarousel({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const doubled = [...products, ...products, ...products];

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex gap-5 animate-marquee w-max"
        style={{ animationDuration: `${products.length * 4}s` }}
        onMouseEnter={() => { if (trackRef.current) trackRef.current.style.animationPlayState = "paused"; }}
        onMouseLeave={() => { if (trackRef.current) trackRef.current.style.animationPlayState = "running"; }}
      >
        {doubled.map((product, i) => (
          <div
            key={`${product.slug}-${i}`}
            className="flex-shrink-0 w-64 bg-white rounded-xl border border-gray-100 overflow-hidden group hover:shadow-2xl hover:shadow-[#071842]/15 hover:-translate-y-2 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative h-48 bg-gradient-to-br from-[#071842] to-[#325C8F] overflow-hidden">
              {product.images[0] ? (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  className="object-contain p-4 group-hover:scale-110 transition-transform duration-500"
                  sizes="256px"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Tag size={28} className="text-white/20" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="bg-[#1E88E5]/80 backdrop-blur-sm text-white text-[10px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider">
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
              <p className="text-gray-400 text-xs line-clamp-2 mb-4 leading-relaxed">{product.shortDescription}</p>

              <div className="flex gap-2">
                <Link
                  href={`/products/${product.slug}`}
                  className="flex-1 flex items-center justify-center gap-1 bg-[#071842] hover:bg-[#325C8F] text-white text-[11px] font-bold py-2 rounded-lg transition-colors group/btn"
                >
                  View <ArrowRight size={10} className="group-hover/btn:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/contact"
                  className="flex-1 flex items-center justify-center bg-[#1E88E5] hover:bg-[#1565C0] text-white text-[11px] font-bold py-2 rounded-lg transition-colors"
                >
                  Quote
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
