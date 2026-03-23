"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function SwatchCTA() {
  return (
    <section id="swatch-cta" className="py-[80px] md:py-[120px] bg-[var(--color-off-white)] border-t-[2px] border-[#C9A84C]">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-[48px] md:gap-[80px] items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex-1"
          >
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.8rem)] text-[#1C1C1C] mb-4 font-semibold">Feel the Quality Before You Commit to Bulk.</h2>
            <p className="font-inter text-[16px] text-[#6B6B6B] leading-[1.7] max-w-[480px] mb-8">
              We understand the risk of ordering bulk yardage unseen. Order our Master Swatch Box to experience the weight, drape, and precision of our core fabrics — directly in your studio or workshop.
            </p>
            
            <ul className="mb-8 space-y-4">
              {[
                "15+ fabric samples",
                "Full technical spec sheet included",
                "₹499 — redeemable against first bulk order"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 font-inter text-[15px] text-[#1C1C1C]">
                  <Check size={18} className="text-[#C9A84C] shrink-0" strokeWidth={2.5} />
                  {item}
                </li>
              ))}
            </ul>
            
            <Link href="#" className="inline-flex btn-premium bg-[#C9A84C] text-[#1A3C2E] font-inter text-[14px] font-semibold tracking-[1px] uppercase px-8 py-4 rounded-[3px]">
              Order Swatch Box — ₹499
            </Link>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex-1 relative w-full aspect-[4/3] rounded-md overflow-hidden"
          >
            <Image 
              src="/assets/images/fabric-collection-display.jpg" 
              alt="Stacked fabric swatch bundles in rich colors" 
              fill 
              className="object-cover"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
