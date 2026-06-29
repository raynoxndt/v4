"use client";
import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/data/products";

export default function ProductCarousel({ products }: { products: Product[] }) {
  const doubled = [...products, ...products]; // duplicate for seamless loop

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee gap-4 w-max hover:pause">
        {doubled.map((p, i) => (
          <Link key={`${p.slug}-${i}`} href={`/products/${p.slug}`}
            className="flex-shrink-0 w-52 bg-white border border-gray-100 rounded-sm overflow-hidden hover:shadow-lg hover:border-[#071842]/30 transition-all duration-200 group">
            <div className="relative h-36 bg-gradient-to-br from-[#071842] to-[#325C8F]">
              {p.images[0] ? (
                <Image src={p.images[0]} alt={p.name} fill className="object-contain p-3 group-hover:scale-105 transition-transform duration-300" sizes="208px" />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white/20 text-xs text-center px-2">{p.name}</span>
                </div>
              )}
            </div>
            <div className="p-3">
              <p className="text-[#071842] font-semibold text-xs leading-snug line-clamp-2">{p.name}</p>
              {p.brand && <p className="text-blue-500 text-[10px] mt-1 font-medium">{p.brand}</p>}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
