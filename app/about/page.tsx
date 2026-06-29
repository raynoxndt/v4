import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Target, Eye } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = { title: "About Us", description: "Learn about Raynox NDT Solutions — our mission, values, and commitment to NDT equipment supply across India." };

export default function AboutPage() {
  return (
    <>
      <section className="bg-[#071842] pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-white/70">Home</Link><span>/</span><span className="text-white/70">About Us</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">About Raynox NDT Solutions</h1>
          <p className="text-white/60 text-base max-w-2xl">A dedicated partner for professional NDT equipment — supplying instruments that keep critical infrastructure safe, compliant, and operational across India.</p>
        </div>
      </section>

      <section className="py-20 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-blue-600 text-xs font-bold uppercase tracking-[0.2em]">Our Story</span>
              <h2 className="text-3xl font-black text-[#071842] mt-2 mb-5">Specialist NDT Equipment, Delivered Across India</h2>
              <div className="space-y-4 text-gray-500 text-base leading-relaxed">
                <p>Raynox NDT Solutions was established to fill a clear need: industrial clients across India needed a knowledgeable, reliable partner who could supply world-class NDT equipment with genuine technical expertise.</p>
                <p>We operate as a specialist supplier and reseller, maintaining direct relationships with the industry's most respected equipment manufacturers. This enables us to source authentic, factory-calibrated instruments with full documentation and warranty support.</p>
                <p>Our clients span independent inspection contractors, oil & gas companies, power utilities, aerospace maintenance organisations, and quality inspection agencies — united by their demand for equipment they can trust.</p>
              </div>
              <div className="mt-7 grid grid-cols-3 gap-4">
                {[{ v: "500+", l: "Products" }, { v: "35+", l: "Brands" }, { v: "4", l: "Offices" }].map(s => (
                  <div key={s.l} className="bg-white border border-gray-100 rounded-sm p-4 text-center">
                    <div className="text-2xl font-black text-[#071842]">{s.v}</div>
                    <div className="text-gray-400 text-xs mt-0.5 uppercase tracking-wider">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-[#071842] rounded-sm p-8 relative overflow-hidden">
              <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <div className="relative z-10">
                <p className="text-blue-300 text-xs font-bold uppercase tracking-[0.2em] mb-5">What Sets Us Apart</p>
                <div className="space-y-3.5">
                  {["Authorised reseller of 35+ global NDT manufacturers", "Technical team with hands-on NDT experience", "Comprehensive calibration certificates and documentation", "After-sales support and calibration services", "Fast 24-hour response to all enquiries", "Pan-India delivery from Kerala, Karnataka, Gujarat, Maharashtra"].map(i => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle size={14} className="text-blue-300 mt-0.5 flex-shrink-0" />
                      <span className="text-white/75 text-sm">{i}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="border border-gray-100 rounded-sm p-8">
              <div className="w-11 h-11 bg-[#071842] rounded-sm flex items-center justify-center mb-5"><Target size={20} className="text-blue-300" /></div>
              <h2 className="text-xl font-black text-[#071842] mb-3">Our Mission</h2>
              <p className="text-gray-500 text-sm leading-relaxed">To be the most trusted specialist supplier of Non-Destructive Testing equipment in India — providing genuine, certified instruments with expert technical guidance that enables our clients to deliver safer, more reliable inspection programmes.</p>
              <p className="mt-5 text-[#071842] font-bold text-sm italic">"Equipment you trust. Support you rely on."</p>
            </div>
            <div className="bg-[#071842] rounded-sm p-8">
              <div className="w-11 h-11 bg-blue-400/20 rounded-sm flex items-center justify-center mb-5 border border-blue-300/20"><Eye size={20} className="text-blue-300" /></div>
              <h2 className="text-xl font-black text-white mb-3">Our Vision</h2>
              <p className="text-white/65 text-sm leading-relaxed">To become the preferred NDT equipment partner for industrial inspection professionals across India — recognised for our product range, technical depth, and the quality of service delivered to every client, regardless of order size.</p>
              <p className="mt-5 text-blue-300 font-bold text-sm italic">"Raising the standard of industrial inspection across India."</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-black text-[#071842]">Our Offices</h2>
            <p className="text-gray-500 text-sm mt-2">Serving customers across India from four locations</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {siteConfig.offices.map(o => (
              <div key={o.city} className={`rounded-sm p-6 text-center border ${o.primary ? "bg-[#071842] border-[#071842]" : "bg-white border-gray-100"}`}>
                <div className={`text-3xl mb-2`}>🏢</div>
                <div className={`font-black text-lg ${o.primary ? "text-white" : "text-[#071842]"}`}>{o.city}</div>
                {o.primary && <div className="text-blue-300 text-xs mt-1">Head Office</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#071842]">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-black text-white mb-3">Ready to Work With Us?</h2>
          <p className="text-white/60 text-sm mb-6">Get in touch with our team for a tailored NDT equipment quote within 24 hours.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#071842] font-bold px-7 py-3.5 rounded-sm hover:bg-gray-100 transition-colors">
            Contact Us <ArrowRight size={15} />
          </Link>
        </div>
      </section>
    </>
  );
}
