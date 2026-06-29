import Link from "next/link";
import { ArrowRight, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#071842] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="text-[10rem] font-black text-white/10 leading-none select-none">404</div>
        <h1 className="text-3xl font-black text-white mt-4 mb-3">Page Not Found</h1>
        <p className="text-white/55 text-base mb-8 max-w-sm mx-auto">The page you're looking for doesn't exist or has been moved.</p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="inline-flex items-center gap-2 bg-white text-[#071842] font-bold px-6 py-3 rounded-sm hover:bg-gray-100 transition-colors">
            <Home size={15} /> Go Home
          </Link>
          <Link href="/products" className="inline-flex items-center gap-2 bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold px-6 py-3 rounded-sm transition-colors">
            View Products <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </div>
  );
}
