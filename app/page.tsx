import Link from "next/link";
import { ArrowRight, CheckCircle, Phone, ChevronRight,
  Shield, Award, Clock, Headphones, Globe, Zap,
  Magnet, Box, Flame, ShieldAlert, ScanLine, Layers, Blocks } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { heroConfig } from "@/config/heroConfig";
import { categories } from "@/data/categories";
import { getFeaturedProducts, products } from "@/data/products";
import ProductCard from "@/components/ui/ProductCard";
import StatsCounter from "@/components/sections/StatsCounter";
import HeroStackedCarousel from "@/components/sections/HeroStackedCarousel";
import FeaturedCarousel from "@/components/sections/FeaturedCarousel";

const iconMap: Record<string, React.ElementType> = {
  Magnet, Box, Flame, ShieldAlert, ScanLine, Layers, Blocks,
};

const industries = [
  { name: "Oil & Gas", icon: "⛽" }, { name: "Petrochemical", icon: "🏭" },
  { name: "Power Plants", icon: "⚡" }, { name: "Steel Industry", icon: "🔩" },
  { name: "Manufacturing", icon: "⚙️" }, { name: "Automotive", icon: "🚗" },
  { name: "Railways", icon: "🚂" }, { name: "Shipbuilding", icon: "🚢" },
  { name: "Aerospace", icon: "✈️" }, { name: "Construction", icon: "🏗️" },
  { name: "Fabrication", icon: "🔧" }, { name: "Defence", icon: "🛡️" },
  { name: "Research & Education", icon: "🔬" }, { name: "Quality Inspection", icon: "📋" },
];

const reasons = [
  { icon: Shield, title: "Genuine Equipment", desc: "All products sourced directly from authorised manufacturers with full certification and documentation." },
  { icon: Award, title: "Industry Expertise", desc: "Deep technical knowledge of NDT applications across all major industrial sectors." },
  { icon: Clock, title: "Fast Delivery", desc: "Efficient supply chain delivering products across India within committed timelines." },
  { icon: Headphones, title: "Technical Support", desc: "After-sales support, equipment guidance, and calibration services from qualified professionals." },
  { icon: Globe, title: "Pan-India Supply", desc: "Offices in Kerala, Karnataka, Gujarat and Maharashtra — delivering across India." },
  { icon: Zap, title: "Competitive Pricing", desc: "Best-value pricing through direct manufacturer relationships and volume purchasing power." },
];

export default function HomePage() {
  const featured = getFeaturedProducts();
  // Use all products for hero carousel, featured for scroll carousel
  const carouselProducts = products.slice(0, 12);

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-[#04112b] via-[#071842] to-[#325C8F] overflow-hidden pt-24">
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        {/* Glows */}
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-[#1E88E5]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT — text (unchanged) */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-10 bg-[#1E88E5]" />
                <span className="text-blue-300 text-xs font-bold uppercase tracking-[0.25em]">Trusted NDT Equipment Supplier</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.05] mb-6">
                {heroConfig.headline}
              </h1>
              <p className="text-white/65 text-lg leading-relaxed mb-8 max-w-xl">{heroConfig.subheadline}</p>
              <div className="flex flex-wrap gap-4">
                <Link href={heroConfig.primaryButton.href}
                  className="inline-flex items-center gap-2 bg-white text-[#071842] font-bold px-7 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 shadow-xl hover:shadow-white/20 hover:-translate-y-0.5">
                  {heroConfig.primaryButton.label} <ArrowRight size={17} />
                </Link>
                <Link href={heroConfig.secondaryButton.href}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/25 hover:bg-white/20 text-white font-semibold px-7 py-4 rounded-xl transition-all duration-200 backdrop-blur-sm">
                  {heroConfig.secondaryButton.label}
                </Link>
              </div>
              <div className="flex flex-wrap gap-5 mt-8">
                {["Genuine Products", "Pan-India Delivery", "Technical Support"].map(i => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle size={14} className="text-[#1E88E5]" />
                    <span className="text-white/65 text-sm">{i}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT — stacked carousel */}
            <div className="hidden lg:flex items-center justify-center pb-8">
              <HeroStackedCarousel products={carouselProducts} />
            </div>
          </div>
        </div>

        {/* Mobile carousel below hero text */}
        <div className="lg:hidden absolute bottom-4 left-0 right-0 px-4">
          <p className="text-white/40 text-xs text-center mb-3 uppercase tracking-widest">Our Products</p>
        </div>

        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 50" fill="none"><path d="M0 50L1440 50L1440 25C1200 0 960 0 720 25C480 50 240 50 0 25L0 50Z" fill="#F8FAFC"/></svg>
        </div>
      </section>

      {/* ── PRODUCT CATEGORIES ────────────────────────────── */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">Browse by Category</span>
              <h2 className="text-2xl font-black text-[#071842] mt-1">NDT Equipment Categories</h2>
            </div>
            <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-[#071842] font-semibold text-sm hover:text-[#1E88E5] transition-colors group">
              All Products <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3">
            {categories.map(cat => {
              const Icon = iconMap[cat.icon] || Box;
              return (
                <Link key={cat.slug} href={`/products#${cat.slug}`}
                  className="bg-white border border-gray-100 rounded-xl p-4 hover:border-[#071842] hover:shadow-lg hover:shadow-[#071842]/10 transition-all duration-200 group flex flex-col items-center text-center">
                  <div className="w-10 h-10 bg-[#071842]/5 rounded-xl flex items-center justify-center mb-3 group-hover:bg-[#071842] transition-colors">
                    <Icon size={18} className="text-[#071842] group-hover:text-white transition-colors" />
                  </div>
                  <p className="text-[#071842] font-semibold text-xs leading-snug">{cat.name}</p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">About Raynox NDT</span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#071842] mt-2 mb-5 leading-tight">
                Your Specialist NDT Equipment Partner Across India
              </h2>
              <p className="text-gray-500 text-base leading-relaxed mb-4">
                Raynox NDT Solutions is a dedicated supplier and reseller of Non-Destructive Testing equipment. We work with the world's leading manufacturers to deliver certified, high-performance instruments across India.
              </p>
              <p className="text-gray-500 text-base leading-relaxed mb-7">
                With offices in Kerala, Karnataka, Gujarat, and Maharashtra, we supply the complete NDT equipment spectrum — from magnetic particle inspection to radiographic testing, calibration blocks to radiation safety instruments.
              </p>
              <div className="space-y-2.5">
                {["Authorised reseller of 35+ global NDT brands", "Expert consultation on equipment selection", "Calibration and repair services available", "Pan-India delivery from 4 offices"].map(i => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={14} className="text-[#1E88E5] flex-shrink-0" />
                    <span className="text-gray-600 text-sm">{i}</span>
                  </div>
                ))}
              </div>
              <Link href="/about" className="mt-7 inline-flex items-center gap-2 text-[#071842] font-bold text-sm border-b-2 border-[#1E88E5] pb-0.5 hover:text-[#1E88E5] transition-colors group">
                Learn more about us <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>

            <div className="bg-[#071842] rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <div className="relative z-10">
                <p className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em] mb-6">Why Clients Choose Raynox</p>
                <div className="space-y-4">
                  {[{ label: "Equipment Reliability", pct: 98 }, { label: "On-Time Delivery", pct: 96 }, { label: "Client Satisfaction", pct: 98 }].map(b => (
                    <div key={b.label}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-white/80 text-sm">{b.label}</span>
                        <span className="text-[#1E88E5] font-bold text-sm">{b.pct}%</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#1E88E5] to-[#325C8F] rounded-full" style={{ width: `${b.pct}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  {[{ v: "500+", l: "Products" }, { v: "35+", l: "Brands" }, { v: "4", l: "Offices" }, { v: "14+", l: "Industries" }].map(s => (
                    <div key={s.l} className="text-center">
                      <div className="text-2xl font-black text-white">{s.v}</div>
                      <div className="text-white/40 text-xs mt-0.5">{s.l}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────── */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">Why Raynox NDT</span>
            <h2 className="text-3xl sm:text-4xl font-black text-[#071842] mt-2">Built on Expertise. Delivered with Precision.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {reasons.map(r => {
              const Icon = r.icon;
              return (
                <div key={r.title} className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#071842]/20 hover:shadow-lg hover:shadow-[#071842]/5 transition-all duration-200 group">
                  <div className="w-11 h-11 bg-[#071842]/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#071842] transition-colors">
                    <Icon size={20} className="text-[#071842] group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-[#071842] font-black text-sm mb-2">{r.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{r.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS CAROUSEL ────────────────────── */}
      {featured.length > 0 && (
        <section className="py-20 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
            <div className="flex items-end justify-between">
              <div>
                <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">Featured Products</span>
                <h2 className="text-3xl font-black text-[#071842] mt-1">Top NDT Equipment</h2>
                <p className="text-gray-400 text-sm mt-1">Hover to pause • Click to view details</p>
              </div>
              <Link href="/products" className="hidden sm:flex items-center gap-1.5 text-[#071842] font-semibold text-sm hover:text-[#1E88E5] transition-colors group">
                View All <ChevronRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
          <FeaturedCarousel products={featured} />
        </section>
      )}

      {/* ── STATS ─────────────────────────────────────────── */}
      <StatsCounter stats={siteConfig.stats} />

      {/* ── INDUSTRIES ────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">Industries We Serve</span>
            <h2 className="text-3xl font-black text-[#071842] mt-2">Trusted Across Critical Sectors</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {industries.map(ind => (
              <Link key={ind.name} href="/industries"
                className="flex flex-col items-center gap-2 p-4 bg-[#F8FAFC] border border-gray-100 rounded-xl hover:bg-[#071842] hover:border-[#071842] transition-all duration-200 group text-center">
                <span className="text-2xl">{ind.icon}</span>
                <span className="text-[#071842] group-hover:text-white text-xs font-semibold leading-tight transition-colors">{ind.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES BRIEF ────────────────────────────────── */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">Our Services</span>
            <h2 className="text-3xl font-black text-[#071842] mt-2">Beyond Equipment Supply</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Equipment Supply", desc: "Complete range of NDT instruments from 35+ global manufacturers. Genuine, certified, and factory-calibrated.", icon: "📦", href: "/services" },
              { title: "Calibration Services", desc: "Keep your NDT instruments accurate and compliant with our calibration services.", icon: "🎯", href: "/services" },
              { title: "Repair Services", desc: "Minimise downtime with professional NDT equipment repair and maintenance.", icon: "🔧", href: "/services" },
            ].map(s => (
              <Link key={s.title} href={s.href}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:border-[#071842]/20 hover:shadow-xl hover:shadow-[#071842]/5 hover:-translate-y-1 transition-all duration-300 group">
                <span className="text-3xl mb-4 block">{s.icon}</span>
                <h3 className="text-[#071842] font-black text-base mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
                <div className="flex items-center gap-1 text-[#1E88E5] text-sm font-semibold group-hover:gap-2 transition-all">
                  Learn more <ArrowRight size={13} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-[#071842] to-[#325C8F] rounded-2xl p-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)", backgroundSize: "28px 28px" }} />
            <div className="relative z-10">
              <span className="text-blue-300 text-xs font-bold uppercase tracking-[0.25em] mb-3 block">Get Started Today</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">Request a Quote for Your NDT Equipment</h2>
              <p className="text-white/65 text-base mb-8 max-w-xl mx-auto">Tell us what you need. Our team responds with a competitive quote within 24 hours.</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-white text-[#071842] font-bold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 shadow-xl">
                  Request a Quote <ArrowRight size={17} />
                </Link>
                <a href={`tel:${siteConfig.phone}`}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-colors backdrop-blur-sm">
                  <Phone size={16} /> Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
