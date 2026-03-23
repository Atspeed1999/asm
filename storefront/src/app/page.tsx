import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustBar from "@/components/TrustBar";
import Categories from "@/components/Categories";
import Spotlight from "@/components/Spotlight";
import Manufacturing from "@/components/Manufacturing";
import SwatchCTA from "@/components/SwatchCTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen selection:bg-[#C9A84C] selection:text-[#1A3C2E]">
      <Navbar />
      <Hero />
      <TrustBar />
      <Categories />
      <Manufacturing />
      <Testimonials />
      <Spotlight />
      <SwatchCTA />
      {/* Instagram strip would go here if extracted to a separate component */}
      <Footer />
    </main>
  );
}
