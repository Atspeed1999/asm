import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BridalEditPage() {
  return (
    <main className="min-h-screen bg-[var(--color-off-white)] pt-[76px]">
      <Navbar />
      <section className="py-[120px] text-center px-6">
        <div className="max-w-[800px] mx-auto">
          <h1 className="font-cormorant text-[clamp(2.5rem,4vw,3.5rem)] text-[#1C1C1C] font-semibold mb-6">The Bridal Edit</h1>
          <p className="font-inter text-[16px] text-[#6B6B6B]">
            Premium wedding collection fabrics in pure raw silk, organza, and heavy brocade. (Coming Soon)
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
