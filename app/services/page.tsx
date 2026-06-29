import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "Services", description: "Raynox NDT Solutions offers NDT equipment supply, calibration services, and repair services across India." };

export default function ServicesPage() {
  return (
    <>
      <section className="bg-[#071842] pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-white/70">Home</Link><span>/</span><span className="text-white/70">Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Our Services</h1>
          <p className="text-white/60 text-base max-w-xl">Beyond equipment supply — we provide calibration and repair services to keep your NDT instruments performing at their best.</p>
        </div>
      </section>

      <section className="py-16 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: "📦", title: "Equipment Supply", primary: true, desc: "Our core business — supplying and reselling professional NDT instruments from 35+ global manufacturers across India.", points: ["500+ products across 7 categories", "Genuine manufacturer products", "Factory calibration certificates", "Full warranty support", "Pan-India delivery", "Fast 24-hour quotes"] },
              { icon: "🎯", title: "Calibration Services", primary: false, desc: "Keep your NDT instruments accurate and compliant with our calibration services.", points: ["Instrument calibration to industry standards", "Calibration certificates issued", "On-site and in-house calibration", "Traceable calibration records", "Scheduled calibration reminders"] },
              { icon: "🔧", title: "Repair Services", primary: false, desc: "Minimise downtime with our NDT equipment repair and maintenance services.", points: ["Diagnosis and repair of NDT instruments", "Genuine spare parts sourcing", "Turnaround time estimates provided", "Post-repair calibration", "Extended maintenance contracts"] },
            ].map(s => (
              <div key={s.title} className={`rounded-sm p-7 ${s.primary ? "bg-[#071842] border border-[#071842]" : "bg-white border border-gray-100"}`}>
                <span className="text-4xl mb-5 block">{s.icon}</span>
                <h2 className={`text-xl font-black mb-3 ${s.primary ? "text-white" : "text-[#071842]"}`}>{s.title}</h2>
                <p className={`text-sm leading-relaxed mb-5 ${s.primary ? "text-white/65" : "text-gray-500"}`}>{s.desc}</p>
                <ul className="space-y-2.5">
                  {s.points.map(p => (
                    <li key={p} className="flex items-start gap-2">
                      <CheckCircle size={13} className={`mt-0.5 flex-shrink-0 ${s.primary ? "text-blue-300" : "text-blue-500"}`} />
                      <span className={`text-sm ${s.primary ? "text-white/70" : "text-gray-600"}`}>{p}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-gray-500 text-sm mb-4">Have a service enquiry?</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-[#071842] text-white font-bold px-7 py-3.5 rounded-sm hover:bg-[#325C8F] transition-colors">
              Contact Our Team <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
