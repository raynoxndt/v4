"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown, Search, ArrowRight,
  Magnet, Box, Flame, ShieldAlert, ScanLine, Layers, Blocks } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { categories } from "@/data/categories";

const iconMap: Record<string, React.ElementType> = {
  Magnet, Box, Flame, ShieldAlert, ScanLine, Layers, Blocks,
};

function Logo() {
  const [imgLoaded, setImgLoaded] = useState(false);
  return (
    <div className="flex items-center gap-2 h-10">
      {!imgLoaded && (
        <div className="flex items-center gap-2">
          <div className="w-9 h-20 bg-white rounded-sm flex items-center justify-center">
            <span className="text-[#071842] font-black text-xl">R</span>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-white font-black text-base tracking-wide">RAYNOX</span>
            <span className="text-blue-300 text-[10px] tracking-[0.2em] font-medium uppercase">NDT Solutions</span>
          </div>
        </div>
      )}
      <Image
        src={siteConfig.logo}
        alt={siteConfig.name}
        width={180}
        height={60}
        priority
        onLoad={() => setImgLoaded(true)}
        onError={() => setImgLoaded(false)}
        className={`h-10 w-auto object-contain ${imgLoaded ? "block" : "hidden"}`}
      />
    </div>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => { setIsOpen(false); setMegaOpen(false); }, [pathname]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-[#071842] shadow-2xl" : "bg-[#071842]/95 backdrop-blur-sm"}`}>
      {/* Top bar */}
      <div className="bg-[#071842] border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-1.5 flex items-center justify-between">
          <p className="text-white/50 text-xs">Delivering NDT Equipment Across India</p>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phoneAlt}`} className="text-white/50 text-xs hover:text-white/80 transition-colors">{siteConfig.phoneAlt}</a>
            <span className="text-white/20">|</span>
            <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-1 text-white/80 text-xs hover:text-white transition-colors font-medium">
              <Phone size={10} />{siteConfig.phone}
            </a>
            <span className="text-white/20">|</span>
            <a href={`mailto:${siteConfig.email}`} className="text-white/50 text-xs hover:text-white/80 transition-colors">{siteConfig.email}</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <Link href="/"><Logo /></Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-0.5">
            <Link href="/" className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${pathname === "/" ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/5"}`}>Home</Link>

            <div className="relative" onMouseEnter={() => setMegaOpen(true)} onMouseLeave={() => setMegaOpen(false)}>
              <button className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-sm transition-colors ${pathname.startsWith("/products") ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/5"}`}>
                Products <ChevronDown size={14} className={`transition-transform ${megaOpen ? "rotate-180" : ""}`} />
              </button>
              {megaOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[680px] bg-white shadow-2xl rounded-sm border border-gray-100 p-6 grid grid-cols-2 gap-3">
                  <div className="col-span-2 pb-3 mb-1 border-b border-gray-100">
                    <p className="text-[#071842] font-bold text-xs uppercase tracking-widest">Product Categories</p>
                  </div>
                  {categories.map((cat) => {
                    const Icon = iconMap[cat.icon] || Box;
                    return (
                      <Link key={cat.slug} href={`/products#${cat.slug}`}
                        className="flex items-start gap-3 p-3 rounded-sm hover:bg-[#F4F6FB] transition-colors group">
                        <div className="w-8 h-8 bg-[#071842]/10 rounded-sm flex items-center justify-center flex-shrink-0 group-hover:bg-[#071842] transition-colors">
                          <Icon size={15} className="text-[#071842] group-hover:text-white transition-colors" />
                        </div>
                        <div>
                          <p className="text-[#071842] font-semibold text-sm leading-snug">{cat.name}</p>
                          <p className="text-gray-400 text-xs mt-0.5 line-clamp-1">{cat.description}</p>
                        </div>
                      </Link>
                    );
                  })}
                  <div className="col-span-2 pt-3 mt-1 border-t border-gray-100">
                    <Link href="/products" className="flex items-center gap-2 text-[#071842] font-semibold text-sm hover:text-blue-600 transition-colors">
                      View All Products <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {[{ href: "/services", label: "Services" }, { href: "/industries", label: "Industries" }, { href: "/about", label: "About Us" }, { href: "/contact", label: "Contact" }].map(link => (
              <Link key={link.href} href={link.href} className={`px-3 py-2 text-sm font-medium rounded-sm transition-colors ${pathname === link.href ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/5"}`}>{link.label}</Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <button onClick={() => setSearchOpen(!searchOpen)} className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-sm transition-colors">
              <Search size={17} />
            </button>
            <Link href="/contact" className="bg-white text-[#071842] hover:bg-gray-100 text-sm font-bold px-5 py-2 rounded-sm transition-colors">
              Request Quote
            </Link>
          </div>

          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-white p-2 hover:bg-white/10 rounded-sm">
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {searchOpen && (
          <div className="pb-3 hidden lg:block">
            <form action="/search" method="GET" className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-4 py-2">
              <Search size={15} className="text-white/50" />
              <input name="q" placeholder="Search products..." autoFocus className="bg-transparent text-white placeholder-white/40 text-sm flex-1 outline-none" />
            </form>
          </div>
        )}

        <div className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-screen pb-4" : "max-h-0"}`}>
          <div className="border-t border-white/10 pt-3 space-y-1">
            {[{ href: "/", label: "Home" }, { href: "/products", label: "Products" }, { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" }, { href: "/about", label: "About Us" }, { href: "/contact", label: "Contact" }].map(link => (
              <Link key={link.href} href={link.href} className={`block px-4 py-2.5 text-sm font-medium rounded-sm transition-colors ${pathname === link.href ? "text-white bg-white/10" : "text-white/75 hover:text-white hover:bg-white/5"}`}>
                {link.label}
              </Link>
            ))}
            <div className="pt-3 px-4 space-y-2">
              <form action="/search" className="flex items-center gap-2 bg-white/10 border border-white/20 rounded-sm px-3 py-2">
                <Search size={14} className="text-white/50" />
                <input name="q" placeholder="Search products..." className="bg-transparent text-white placeholder-white/40 text-sm flex-1 outline-none" />
              </form>
              <Link href="/contact" className="block w-full text-center bg-white text-[#071842] text-sm font-bold px-5 py-2.5 rounded-sm">Request Quote</Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
