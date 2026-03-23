import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--color-off-white)] pt-[76px]">
      <Navbar />
      <section className="py-[80px] md:py-[120px] px-6">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="font-cormorant text-[clamp(2.5rem,4vw,3.5rem)] text-[#1C1C1C] font-semibold mb-6">Contact Us</h1>
          <p className="font-inter text-[16px] text-[#6B6B6B] mb-8">
            WhatsApp: +91 96252 42165<br/>
            Email: info@ambersilkmills.in<br/>
            Located in Gandhi Nagar, Delhi.
          </p>
          <a href="https://wa.me/919625242165" className="inline-block btn-premium bg-[#1A3C2E] text-white font-inter text-[14px] uppercase tracking-[1px] px-8 py-4 rounded-[3px]">
            Chat Now
          </a>
        </div>
      </section>
      <Footer />
    </main>
  );
}
