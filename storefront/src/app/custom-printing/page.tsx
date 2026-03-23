import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CustomPrintingPage() {
  return (
    <main className="min-h-screen bg-[var(--color-off-white)] pt-[76px]">
      <Navbar />
      <section className="py-[80px] md:py-[120px] bg-[var(--color-primary-green)] text-center px-6">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">Print Services</span>
          <h1 className="font-cormorant text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--color-off-white)] font-semibold mb-6">Custom Block & Digital Printing</h1>
          <p className="font-inter text-[16px] text-white/80 max-w-[600px] mx-auto leading-relaxed">
            Your vision onto our fabrics. We provide end-to-end custom printing services for designers and brands looking to scale.
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
