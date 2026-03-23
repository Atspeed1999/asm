import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--color-off-white)] pt-[76px]">
      <Navbar />
      <section className="py-[80px] md:py-[120px] bg-[var(--color-primary-green)] text-center px-6">
        <div className="max-w-[1280px] mx-auto">
          <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">Our Story</span>
          <h1 className="font-cormorant text-[clamp(2.5rem,4vw,3.5rem)] text-[var(--color-off-white)] font-semibold mb-6">Three Generations of Fabric Mastery.</h1>
          <p className="font-inter text-[16px] text-white/80 max-w-[600px] mx-auto leading-relaxed">
            From a small workshop in Gandhi Nagar in 1938 to one of Delhi's most trusted fabric manufacturers. 87 years of weaving tradition, innovation, and excellence.
          </p>
        </div>
      </section>
      
      <section className="py-[80px] md:py-[120px]">
        <div className="max-w-[600px] mx-auto px-6 space-y-12">
          <div className="text-center mb-16">
            <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">Heritage</span>
            <h2 className="font-cormorant text-[clamp(2rem,3vw,2.5rem)] text-[#1C1C1C] font-semibold">Our Journey Through the Decades.</h2>
          </div>
          {[
            { year: "1938", text: "Founded in Gandhi Nagar, Delhi. Started as a small silk trading workshop serving local tailors and designers." },
            { year: "1960s", text: "Second generation takes charge. Expanded into brocade and jacquard weaving. Established supply relationships with Varanasi artisans." },
            { year: "1990s", text: "Pioneered embroidery integration. Grew to serve 200+ wholesale accounts across India." },
            { year: "2010s", text: "Third generation leadership. Modernised production with digital printing and CAD design." },
            { year: "Today", text: "5,000+ designs across 15 categories. Serving fashion brands, export houses, and individual buyers worldwide." }
          ].map((item, i) => (
            <div key={i} className="flex gap-6 items-start">
              <div className="mt-2 w-3 h-3 rounded-full bg-[#C9A84C] shrink-0 outline outline-[4px] outline-[#C9A84C]/20" />
              <div>
                <h3 className="font-cormorant text-[24px] font-semibold text-[#1C1C1C] mb-2">{item.year}</h3>
                <p className="font-inter text-[15px] text-[#6B6B6B] leading-relaxed">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
}
