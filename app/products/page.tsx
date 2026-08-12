import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Magnet, Box, Flame, ShieldAlert, ScanLine, Layers, Blocks } from "lucide-react";
import { categories } from "@/data/categories";
import { getProductsByCategory, products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export const metadata: Metadata = { title: "Products", description: "Browse Raynox NDT Solutions' complete range of NDT equipment and inspection instruments." };

const iconMap: Record<string, React.ElementType> = { Magnet, Box, Flame, ShieldAlert, ScanLine, Layers, Blocks ,Waves };

export default function ProductsPage() {
  return (
    <>
      <section className="bg-[#071842] pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-white/70">Home</Link><span>/</span><span className="text-white/70">Products</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">NDT Equipment & Inspection Solutions</h1>
          <p className="text-white/60 text-base max-w-2xl">{products.length}+ products across {categories.length} categories. Click any product to view full specifications and request a quote.</p>
        </div>
      </section>

      {/* Sticky category nav */}
      <div className="bg-white border-b border-gray-100 sticky top-[84px] z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3">
            {categories.map(cat => {
              const Icon = iconMap[cat.icon] || Box;
              return (
                <a key={cat.slug} href={`#${cat.slug}`} className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-[#071842] font-medium px-3 py-1.5 rounded-sm hover:bg-[#F4F6FB] transition-colors whitespace-nowrap flex-shrink-0">
                  <Icon size={12} />{cat.name}
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* Products by category */}
      <div>
        {categories.map((cat, idx) => {
          const catProducts = getProductsByCategory(cat.slug);
          const Icon = iconMap[cat.icon] || Box;
          if (catProducts.length === 0) return null;
          return (
            <section key={cat.slug} id={cat.slug} className={`py-14 ${idx % 2 === 0 ? "bg-[#F4F6FB]" : "bg-white"}`}>
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-[#071842] rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon size={18} className="text-white" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-black text-[#071842]">{cat.name}</h2>
                      <p className="text-gray-500 text-sm mt-1 max-w-xl">{cat.description}</p>
                    </div>
                  </div>
                  <Link href="/contact" className="flex-shrink-0 inline-flex items-center gap-2 bg-[#071842] hover:bg-[#325C8F] text-white text-sm font-semibold px-4 py-2 rounded-sm transition-colors">
                    Get Quote <ArrowRight size={13} />
                  </Link>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
                  {catProducts.map(p => <ProductCard key={p.slug} product={p} />)}
                </div>
              </div>
            </section>
          );
        })}
      </div>

      <section className="py-14 bg-[#071842]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Can't Find What You Need?</h2>
          <p className="text-white/60 text-sm mb-6">We source from 35+ manufacturers. Contact us with your specification and we'll find it.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#071842] font-bold px-7 py-3.5 rounded-sm hover:bg-gray-100 transition-colors">
            Contact Our Team <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
