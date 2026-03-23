import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WholesalePage() {
  return (
    <main className="min-h-screen bg-[var(--color-off-white)] pt-[76px]">
      <Navbar />
      <section className="py-[80px] md:py-[120px] text-center px-6">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">B2B Portal</span>
          <h1 className="font-cormorant text-[clamp(2.5rem,4vw,3.5rem)] text-[#1C1C1C] font-semibold mb-6">Wholesale Inquiry</h1>
          <p className="font-inter text-[16px] text-[#6B6B6B] max-w-[600px] mx-auto leading-relaxed mb-8">
            Partner with Amber Silk Mills for your label's fabric needs. Download our complete B2B Catalog with MOQ details, pricing tiers, and fabric specifications.
          </p>
          <a href="https://wa.me/919625242165" className="inline-block btn-premium bg-[#1A3C2E] text-white font-inter text-[14px] uppercase tracking-[1px] px-8 py-4 rounded-[3px]">
            Message us on WhatsApp
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
