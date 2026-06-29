"use client";
import { useState } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { products } from "@/data/products";

export default function QuoteForm({ defaultProduct = "" }: { defaultProduct?: string }) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", product: defaultProduct, message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    await new Promise(r => setTimeout(r, 1500));
    setStatus("success");
  };

  if (status === "success") return (
    <div className="text-center py-10">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <CheckCircle size={30} className="text-green-600" />
      </div>
      <h3 className="text-[#071842] font-black text-xl mb-2">Quote Request Sent!</h3>
      <p className="text-gray-500 text-sm">Our team will respond within 24 hours.</p>
      <button onClick={() => setStatus("idle")} className="mt-6 text-sm text-[#071842] underline">Submit another</button>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#071842] text-xs font-semibold mb-1.5">Full Name *</label>
          <input name="name" required value={form.name} onChange={handle} placeholder="Your name"
            className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#071842] focus:ring-1 focus:ring-[#071842] transition-colors" />
        </div>
        <div>
          <label className="block text-[#071842] text-xs font-semibold mb-1.5">Company</label>
          <input name="company" value={form.company} onChange={handle} placeholder="Company name"
            className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#071842] focus:ring-1 focus:ring-[#071842] transition-colors" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-[#071842] text-xs font-semibold mb-1.5">Email *</label>
          <input name="email" type="email" required value={form.email} onChange={handle} placeholder="you@company.com"
            className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#071842] focus:ring-1 focus:ring-[#071842] transition-colors" />
        </div>
        <div>
          <label className="block text-[#071842] text-xs font-semibold mb-1.5">Phone *</label>
          <input name="phone" required value={form.phone} onChange={handle} placeholder="+91 XXXXX XXXXX"
            className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#071842] focus:ring-1 focus:ring-[#071842] transition-colors" />
        </div>
      </div>
      <div>
        <label className="block text-[#071842] text-xs font-semibold mb-1.5">Product of Interest</label>
        <select name="product" value={form.product} onChange={handle}
          className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#071842] focus:ring-1 focus:ring-[#071842] transition-colors bg-white">
          <option value="">Select a product...</option>
          {products.map(p => <option key={p.slug} value={p.name}>{p.name}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-[#071842] text-xs font-semibold mb-1.5">Message / Requirements *</label>
        <textarea name="message" required rows={4} value={form.message} onChange={handle}
          placeholder="Describe your requirements, application, quantity needed..."
          className="w-full border border-gray-200 rounded-sm px-3 py-2.5 text-sm focus:outline-none focus:border-[#071842] focus:ring-1 focus:ring-[#071842] transition-colors resize-none" />
      </div>
      <button type="submit" disabled={status === "submitting"}
        className="w-full flex items-center justify-center gap-2 bg-[#071842] hover:bg-[#325C8F] disabled:opacity-60 text-white font-bold py-3.5 rounded-sm transition-colors">
        {status === "submitting" ? <><Loader2 size={16} className="animate-spin" /> Sending...</> : <><Send size={15} /> Send Quote Request</>}
      </button>
    </form>
  );
}
