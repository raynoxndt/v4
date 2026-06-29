import type { Metadata } from "next";
import Link from "next/link";
import { Search } from "lucide-react";
import { products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";

export const metadata: Metadata = { title: "Search Products" };

export default async function SearchPage({ searchParams }: { searchParams: Promise<{ q?: string }> }) {
  const { q } = await searchParams;
  const query = (q || "").toLowerCase().trim();
  const results = query
    ? products.filter(p =>
        p.name.toLowerCase().includes(query) ||
        p.shortDescription.toLowerCase().includes(query) ||
        p.category.toLowerCase().includes(query) ||
        (p.brand || "").toLowerCase().includes(query)
      )
    : [];

  return (
    <>
      <section className="bg-[#071842] pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-black text-white mb-5">Search Products</h1>
          <form action="/search" className="flex items-center gap-3 bg-white/10 border border-white/20 rounded-sm px-4 py-3 max-w-xl">
            <Search size={16} className="text-white/50" />
            <input name="q" defaultValue={q} placeholder="Search NDT equipment..." autoFocus
              className="bg-transparent text-white placeholder-white/40 text-sm flex-1 outline-none" />
            <button type="submit" className="bg-white text-[#071842] text-xs font-bold px-4 py-1.5 rounded-sm">Search</button>
          </form>
        </div>
      </section>

      <section className="py-12 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {query ? (
            <>
              <p className="text-gray-500 text-sm mb-6">{results.length} result{results.length !== 1 ? "s" : ""} for &ldquo;<strong className="text-[#071842]">{q}</strong>&rdquo;</p>
              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {results.map(p => <ProductCard key={p.slug} product={p} />)}
                </div>
              ) : (
                <div className="text-center py-16">
                  <Search size={40} className="text-gray-200 mx-auto mb-4" />
                  <p className="text-gray-400 text-base mb-2">No products found for &ldquo;{q}&rdquo;</p>
                  <p className="text-gray-400 text-sm mb-6">Try a different search term or <Link href="/products" className="text-[#071842] underline">browse all products</Link>.</p>
                </div>
              )}
            </>
          ) : (
            <p className="text-gray-400 text-sm">Enter a search term above to find products.</p>
          )}
        </div>
      </section>
    </>
  );
}
