"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function Manufacturing() {
  return (
    <section id="manufacturing" className="py-[80px] md:py-[120px] bg-[var(--color-primary-green)] text-[var(--color-off-white)]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-[48px] md:gap-[80px] items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="flex-1"
          >
            <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">Custom Capabilities</span>
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.8rem)] text-[var(--color-off-white)] mb-6 font-semibold">Your Vision, Our Print. End-to-End Custom Manufacturing.</h2>
            <p className="font-inter text-[16px] text-[#F7F3ED]/80 leading-[1.8] max-w-[480px] mb-8">
              We don't just supply off-the-shelf fabrics — we build them to your exact specifications. From custom digital print designs to precise colour matching and specialised zari lining integration, our Delhi and Surat production hubs execute your vision with zero compromises.
            </p>
            
            <ul className="mb-8 space-y-3">
              {[
                "Bespoke Digital & Foil Printing",
                "Custom Colour Dyeing & Matching",
                "Dyeable Base Supply for Downstream Processing",
                "Zari & Lurex Lining Integration",
                "Minimum Order Flexibility for Sampling"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-inter text-[15px] text-[#F7F3ED]/85">
                  <div className="w-2 h-2 rounded-full bg-[#C9A84C] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link href="/custom-printing" className="inline-flex btn-premium bg-[#C9A84C] text-[#1A3C2E] font-inter text-[14px] font-semibold tracking-[1px] uppercase px-8 py-4 rounded-[3px]">
              Request Custom Quote
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full aspect-[4/3] rounded-md overflow-hidden shadow-2xl"
          >
            <Image 
              src="/assets/images/manufacturing-workshop.jpeg" 
              alt="Artisan block printing at Amber Silk Mills workshop" 
              fill 
              className="object-cover"
            />
            
            <div className="absolute bottom-5 right-5 bg-[#C9A84C] text-[#1A3C2E] font-cormorant-sc font-bold text-[12px] px-5 py-3 flex items-center gap-2 rounded-md shadow-lg">
              <Check size={16} strokeWidth={2.5} />
              10+ Artisan Techniques Mastered
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
