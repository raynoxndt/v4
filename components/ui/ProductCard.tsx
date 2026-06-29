import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Tag } from "lucide-react";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-white border border-gray-100 rounded-sm overflow-hidden group hover:shadow-xl hover:shadow-[#071842]/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Image */}
      <div className="relative h-48 bg-gradient-to-br from-[#071842] to-[#325C8F] overflow-hidden">
        {product.images[0] ? (
          <Image src={product.images[0]} alt={product.name} fill className="object-contain p-4 group-hover:scale-105 transition-transform duration-300" sizes="(max-width: 768px) 100vw, 33vw" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center border border-white/20">
              <Tag size={24} className="text-white/40" />
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        {product.brand && (
          <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-1">{product.brand}</span>
        )}
        <h3 className="text-[#071842] font-bold text-sm leading-snug mb-2 line-clamp-2">{product.name}</h3>
        <p className="text-gray-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">{product.shortDescription}</p>
        <Link href={`/products/${product.slug}`}
          className="flex items-center justify-center gap-2 bg-[#071842] hover:bg-[#325C8F] text-white text-xs font-semibold py-2.5 px-4 rounded-sm transition-colors group/btn">
          View Details
          <ArrowRight size={12} className="group-hover/btn:translate-x-0.5 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
