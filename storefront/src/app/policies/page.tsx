import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-[var(--color-off-white)] pt-[76px]">
      <Navbar />
      <section className="py-[80px] md:py-[120px] px-6">
        <div className="max-w-[800px] mx-auto font-inter text-[#6B6B6B] space-y-8">
          <h1 className="font-cormorant text-[36px] text-[#1C1C1C] font-semibold mb-8 text-center">Legal & Policies</h1>
          
          <div id="returns" className="scroll-mt-[100px]">
            <h2 className="font-cormorant text-[24px] text-[#1C1C1C] font-semibold mb-2">Returns & Refunds</h2>
            <p className="leading-relaxed">30-day guarantee on damaged/defective items; no change-of-mind returns once dispatched, since fabrics are cut to measure.</p>
          </div>
          
          <div id="shipping" className="scroll-mt-[100px]">
            <h2 className="font-cormorant text-[24px] text-[#1C1C1C] font-semibold mb-2">Shipping Policy</h2>
            <p className="leading-relaxed">Free domestic shipping on orders over ₹2,500. International shipping available, 1-2 day dispatch, 6-12 day delivery worldwide, tracking via email.</p>
          </div>
          
          <div id="privacy" className="scroll-mt-[100px]">
            <h2 className="font-cormorant text-[24px] text-[#1C1C1C] font-semibold mb-2">Privacy Policy</h2>
            <p className="leading-relaxed">We respect your privacy. All your data is securely stored and never shared with third parties.</p>
          </div>
          
          <div id="terms" className="scroll-mt-[100px]">
            <h2 className="font-cormorant text-[24px] text-[#1C1C1C] font-semibold mb-2">Terms of Service</h2>
            <p className="leading-relaxed">By accessing our website or purchasing our products, you agree to our terms of service regarding wholesale margins and reselling rules.</p>
          </div>
          
          <div id="contact" className="scroll-mt-[100px]">
            <h2 className="font-cormorant text-[24px] text-[#1C1C1C] font-semibold mb-2">Contact</h2>
            <p className="leading-relaxed">Questions about policies? Contact us at info@ambersilkmills.in.</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
