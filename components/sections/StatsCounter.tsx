"use client";
import { useEffect, useRef, useState } from "react";

interface Stat { value: string; label: string; }

function Counter({ value }: { value: string }) {
  const [display, setDisplay] = useState("0");
  const ref = useRef<HTMLDivElement>(null);
  const num = parseInt(value.replace(/\D/g, ""));
  const suffix = value.replace(/[\d]/g, "");

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = Math.ceil(num / 50);
        const timer = setInterval(() => {
          start = Math.min(start + step, num);
          setDisplay(`${start}${suffix}`);
          if (start >= num) clearInterval(timer);
        }, 35);
        observer.disconnect();
      }
    }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [num, suffix]);

  return <div ref={ref} className="text-5xl font-black text-[#071842]">{display}</div>;
}

export default function StatsCounter({ stats }: { stats: Stat[] }) {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="text-[#1E88E5] text-xs font-bold uppercase tracking-[0.2em]">Company Highlights</span>
          <h2 className="text-2xl font-black text-[#071842] mt-1">Trusted by Industry Professionals</h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map(s => (
            <div key={s.label} className="text-center group">
              <Counter value={s.value} />
              <div className="text-gray-400 text-xs uppercase tracking-widest mt-2 font-medium">{s.label}</div>
              <div className="h-0.5 w-8 bg-[#1E88E5] mx-auto mt-3 group-hover:w-16 transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
