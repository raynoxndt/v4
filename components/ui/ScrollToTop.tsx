"use client";
import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const fn = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;
  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-24 right-6 z-50 w-10 h-10 bg-[#071842] hover:bg-[#325C8F] text-white rounded-sm flex items-center justify-center shadow-lg transition-all duration-200 hover:-translate-y-0.5"
      aria-label="Scroll to top">
      <ArrowUp size={16} />
    </button>
  );
}
