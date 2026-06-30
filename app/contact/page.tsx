import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";
import { siteConfig } from "@/config/siteConfig";
import QuoteForm from "@/components/ui/QuoteForm";

export const metadata: Metadata = { title: "Contact Us", description: "Contact Raynox NDT Solutions for NDT equipment enquiries, quotes, and support." };

export default function ContactPage() {
  return (
    <>
      <section className="bg-[#071842] pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-white/70">Home</Link><span>/</span><span className="text-white/70">Contact</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Get in Touch</h1>
          <p className="text-white/60 text-base max-w-xl">Request a quote, ask about a product, or get technical advice. We respond within 24 hours.</p>
          <div className="flex flex-wrap gap-5 mt-5">
            {["Quotes within 24 hours", "Technical advice included", "No obligation"].map(i => (
              <div key={i} className="flex items-center gap-2"><CheckCircle size={13} className="text-blue-300" /><span className="text-white/60 text-sm">{i}</span></div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#071842] rounded-sm p-6">
                <h3 className="text-white font-bold text-sm mb-5">Contact Information</h3>
                <div className="space-y-4">
                  {[{ Icon: Phone, label: "Phone", content: <a href={`tel:${siteConfig.phone}`} className="text-white/80 text-sm hover:text-white block">{siteConfig.phone}</a> },
                    { Icon: MapPin, label: "Offices", content: <span className="text-white/70 text-sm">{siteConfig.offices.map(o => o.city).join(", ")}</span> },
                    { Icon: Clock, label: "Hours", content: <><p className="text-white/70 text-sm">{siteConfig.businessHours.weekdays}</p><p className="text-white/70 text-sm">{siteConfig.businessHours.hours}</p></> }
                  ].map(({ Icon, label, content }) => (
                    <div key={label} className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-400/20 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Icon size={13} className="text-blue-300" />
                      </div>
                      <div><p className="text-white/40 text-[10px] uppercase tracking-wider mb-0.5">{label}</p>{content}</div>
                    </div>
                  ))}
                </div>
                {siteConfig.gst && <p className="text-white/30 text-xs mt-5 pt-4 border-t border-white/10">GST: {siteConfig.gst}</p>}
              </div>

              {/* WhatsApp */}
              <a href={`https://wa.me/${siteConfig.whatsapp}`} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-3 bg-[#25D366] hover:bg-[#20BA5A] rounded-sm p-5 transition-colors group">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div><p className="text-white font-bold text-sm">Chat on WhatsApp</p><p className="text-white/75 text-xs">Quick replies & quotes</p></div>
              </a>
            </div>

            {/* Form */}
            <div className="lg:col-span-2 bg-white border border-gray-100 rounded-sm overflow-hidden">
              <div className="bg-[#071842] px-7 py-5">
                <h2 className="text-white font-bold text-lg">Request a Quote or Enquiry</h2>
                <p className="text-white/55 text-sm mt-0.5">Our team responds within 24 business hours.</p>
              </div>
              <div className="p-7"><QuoteForm /></div>
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <div className="h-64 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#071842]/5 to-[#071842]/10">
          <div className="text-center">
            <MapPin size={32} className="text-[#071842] mx-auto mb-2" />
            <p className="text-[#071842] font-semibold text-sm">Kerala | Karnataka | Gujarat | Maharashtra</p>
            <p className="text-gray-400 text-xs mt-1">Embed Google Maps here</p>
          </div>
        </div>
      </div>
    </>
  );
}
