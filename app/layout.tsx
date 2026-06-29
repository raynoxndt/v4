import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import ScrollToTop from "@/components/ui/ScrollToTop";
import { siteConfig } from "@/config/siteConfig";

export const metadata: Metadata = {
  title: { default: `${siteConfig.name} | NDT Equipment Supplier India`, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: "NDT equipment India, non-destructive testing, ultrasonic testing, MPI, radiographic testing, calibration blocks, vacuum box, heat treatment, radiation safety",
  openGraph: { title: siteConfig.name, description: siteConfig.description, type: "website", url: siteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <ScrollToTop />
      </body>
    </html>
  );
}
