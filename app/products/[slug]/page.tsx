import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Download, Phone } from "lucide-react";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { siteConfig } from "@/config/siteConfig";
import QuoteForm from "@/components/ui/QuoteForm";
import ProductCard from "@/components/ui/ProductCard";

export function generateStaticParams() {
  return products.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const p = getProductBySlug(slug);
  if (!p) return { title: "Product Not Found" };
  return { title: p.name, description: p.shortDescription };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();
  const related = getRelatedProducts(slug, 4);

  return (
    <>
      {/* Header */}
      <div className="bg-[#071842] pt-32 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-3">
            <Link href="/" className="hover:text-white/70">Home</Link><span>/</span>
            <Link href="/products" className="hover:text-white/70">Products</Link><span>/</span>
            <span className="text-white/70 truncate">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Product detail */}
      <section className="py-12 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 mb-12">
            {/* Image gallery */}
            <div>
              <div className="bg-white border border-gray-100 rounded-sm overflow-hidden mb-3">
                <div className="relative h-80 bg-gradient-to-br from-[#071842] to-[#325C8F]">
                  {product.images[0] ? (
                    <Image src={product.images[0]} alt={product.name} fill className="object-contain p-8" sizes="(max-width: 1024px) 100vw, 50vw" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-white/20 text-sm">No Image Available</div>
                  )}
                </div>
              </div>
              {product.images.length > 1 && (
                <div className="flex gap-2">
                  {product.images.slice(1).map((img, i) => (
                    <div key={i} className="relative w-20 h-20 bg-white border border-gray-100 rounded-sm overflow-hidden">
                      <Image src={img} alt={`${product.name} ${i + 2}`} fill className="object-contain p-2" sizes="80px" />
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div>
              {product.brand && <span className="text-blue-600 text-xs font-bold uppercase tracking-wider">{product.brand}</span>}
              <h1 className="text-2xl sm:text-3xl font-black text-[#071842] mt-1 mb-3">{product.name}</h1>
              {product.model && <p className="text-gray-400 text-sm mb-3">Model: {product.model}</p>}
              <p className="text-gray-600 text-base leading-relaxed mb-6">{product.description}</p>

              {/* Specs */}
              {product.specs.length > 0 && (
                <div className="mb-6">
                  <h3 className="text-[#071842] font-bold text-sm uppercase tracking-wider mb-3">Specifications</h3>
                  <div className="bg-white border border-gray-100 rounded-sm overflow-hidden">
                    {product.specs.map((spec, i) => (
                      <div key={i} className={`flex items-start gap-4 px-4 py-3 ${i % 2 === 0 ? "bg-[#F4F6FB]" : "bg-white"}`}>
                        <span className="text-gray-400 text-xs font-semibold w-32 flex-shrink-0">{spec.label}</span>
                        <span className="text-[#071842] text-xs font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-col sm:flex-row gap-3">
                <a href="#quote" className="flex-1 flex items-center justify-center gap-2 bg-[#071842] hover:bg-[#325C8F] text-white font-bold py-3.5 px-5 rounded-sm transition-colors">
                  Request Quote <ArrowRight size={15} />
                </a>
                <a href={`tel:${siteConfig.phone}`} className="flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-[#071842] text-[#071842] font-semibold py-3.5 px-5 rounded-sm transition-colors text-sm">
                  <Phone size={14} /> Call Us
                </a>
                {product.datasheet && (
                  <a href={product.datasheet} className="flex items-center justify-center gap-2 bg-gray-50 border border-gray-200 text-gray-600 hover:text-[#071842] font-semibold py-3.5 px-4 rounded-sm transition-colors text-sm">
                    <Download size={14} /> Datasheet
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Features & Applications */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {product.features.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-sm p-6">
                <h3 className="text-[#071842] font-bold text-sm uppercase tracking-wider mb-4">Key Features</h3>
                <ul className="space-y-2.5">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="text-blue-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {product.applications.length > 0 && (
              <div className="bg-white border border-gray-100 rounded-sm p-6">
                <h3 className="text-[#071842] font-bold text-sm uppercase tracking-wider mb-4">Applications</h3>
                <ul className="space-y-2.5">
                  {product.applications.map((a, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-1.5 flex-shrink-0" />
                      <span className="text-gray-600 text-sm">{a}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Quote form */}
          <div id="quote" className="bg-white border border-gray-100 rounded-sm p-8 mb-12">
            <h2 className="text-[#071842] font-black text-xl mb-1">Request a Quote</h2>
            <p className="text-gray-500 text-sm mb-6">Fill in the form below and we'll respond within 24 hours.</p>
            <QuoteForm defaultProduct={product.name} />
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div>
              <h2 className="text-[#071842] font-black text-xl mb-6">Related Products</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {related.map(p => <ProductCard key={p.slug} product={p} />)}
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
