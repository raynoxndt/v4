import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, ArrowRight, Clock } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import { categories } from "@/data/categories";

export default function Footer() {
  return (
    <footer className="bg-[#071842] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Image src={siteConfig.logo} alt={siteConfig.name} width={130} height={42} className="h-10 w-auto object-contain mb-4 brightness-0 invert" />
            <p className="text-white/55 text-sm leading-relaxed mb-5">
              Supplier and reseller of premium Non-Destructive Testing equipment from leading global manufacturers. Serving industries across India.
            </p>
            <div className="flex flex-wrap gap-1">
              {siteConfig.offices.map(o => (
                <span key={o.city} className="bg-white/10 text-white/60 text-xs px-2.5 py-1 rounded-sm">{o.city}</span>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-white/10">Product Categories</h3>
            <ul className="space-y-2">
              {categories.map(cat => (
                <li key={cat.slug}>
                  <Link href={`/products#${cat.slug}`} className="text-white/55 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-2">
              {[{ href: "/", label: "Home" }, { href: "/products", label: "All Products" }, { href: "/services", label: "Services" }, { href: "/industries", label: "Industries" }, { href: "/about", label: "About Us" }, { href: "/contact", label: "Contact Us" }].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/55 text-sm hover:text-white transition-colors flex items-center gap-1.5 group">
                    <ArrowRight size={11} className="group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-xs uppercase tracking-widest mb-4 pb-2 border-b border-white/10">Contact Us</h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-2.5">
                <Phone size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <a href={`tel:${siteConfig.phone}`} className="text-white/70 text-sm hover:text-white transition-colors block">{siteConfig.phone}</a>
                  <a href={`tel:${siteConfig.phoneAlt}`} className="text-white/50 text-xs hover:text-white/80 transition-colors">{siteConfig.phoneAlt}</a>
                </div>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={13} className="text-blue-400 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-white/70 text-sm hover:text-white transition-colors">{siteConfig.email}</a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">{siteConfig.offices.map(o => o.city).join(" | ")}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={13} className="text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-white/60 text-sm">
                  <p>{siteConfig.businessHours.weekdays}</p>
                  <p>{siteConfig.businessHours.hours}</p>
                </div>
              </li>
            </ul>
            {siteConfig.gst && (
              <p className="text-white/40 text-xs mt-4">GST: {siteConfig.gst}</p>
            )}
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-white/35 text-xs">© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
          <p className="text-white/35 text-xs">NDT Equipment Supplier | India</p>
        </div>
      </div>
    </footer>
  );
}
