import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = { title: "Industries", description: "Raynox NDT Solutions supplies inspection equipment to oil & gas, aerospace, power generation, manufacturing, and more across India." };

const industries = [
  { name: "Oil & Gas", icon: "⛽", desc: "Upstream, midstream, and downstream inspection equipment for pipeline welds, pressure vessels, and process equipment." },
  { name: "Petrochemical", icon: "🏭", desc: "Tank inspection, piping integrity, heat exchanger tubes, and structural integrity assessment equipment." },
  { name: "Power Plants", icon: "⚡", desc: "Boiler tube inspection, turbine blade inspection, weld quality control, and PWHT equipment for thermal and nuclear power." },
  { name: "Steel Industry", icon: "🔩", desc: "Weld inspection, material testing, thickness gauging, and quality control for steel manufacturing and fabrication." },
  { name: "Manufacturing", icon: "⚙️", desc: "In-process and end-of-line NDT inspection for castings, forgings, machined components, and assemblies." },
  { name: "Automotive", icon: "🚗", desc: "Component inspection, weld quality verification, and material testing for automotive manufacturing and R&D." },
  { name: "Railways", icon: "🚂", desc: "Rail, axle, and rolling stock inspection equipment for railway safety and maintenance programmes." },
  { name: "Shipbuilding", icon: "🚢", desc: "Hull weld inspection, thickness measurement, and corrosion monitoring for marine construction and repair." },
  { name: "Aerospace", icon: "✈️", desc: "Precision inspection equipment for MRO, composite inspection, and structural integrity assessment." },
  { name: "Construction", icon: "🏗️", desc: "Structural steel weld inspection, concrete testing, and embedded reinforcement assessment tools." },
  { name: "Fabrication", icon: "🔧", desc: "Weld inspection, dimensional verification, and material testing for structural and pressure equipment fabrication." },
  { name: "Defence", icon: "🛡️", desc: "Military asset inspection, propulsion system testing, and structural integrity assessment for defence applications." },
  { name: "Research & Education", icon: "🔬", desc: "Laboratory NDT instruments, training equipment, and demonstration kits for research institutions and universities." },
  { name: "Quality Inspection Agencies", icon: "📋", desc: "Complete NDT instrument kits for third-party inspection agencies serving multiple industries." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="bg-[#071842] pt-36 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-white/40 text-xs mb-4">
            <Link href="/" className="hover:text-white/70">Home</Link><span>/</span><span className="text-white/70">Industries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-3">Industries We Serve</h1>
          <p className="text-white/60 text-base max-w-2xl">NDT equipment for inspection professionals across India's most critical industrial sectors.</p>
        </div>
      </section>

      <section className="py-16 bg-[#F4F6FB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {industries.map(ind => (
              <div key={ind.name} className="bg-white border border-gray-100 rounded-sm p-6 hover:border-[#071842]/30 hover:shadow-md transition-all duration-200">
                <span className="text-3xl mb-4 block">{ind.icon}</span>
                <h3 className="text-[#071842] font-black text-base mb-2">{ind.name}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{ind.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 bg-[#071842] rounded-sm p-8 text-center">
            <h2 className="text-white font-black text-xl mb-2">Need Equipment for Your Industry?</h2>
            <p className="text-white/60 text-sm mb-6">Our team will recommend the right NDT equipment for your specific application and standards.</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-[#071842] font-bold px-7 py-3.5 rounded-sm hover:bg-gray-100 transition-colors">
              Get a Quote <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
