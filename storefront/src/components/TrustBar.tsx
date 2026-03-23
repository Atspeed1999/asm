"use client";
import { motion } from "framer-motion";
import { Users, Globe2, Layers, Scissors } from "lucide-react";

export default function TrustBar() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="bg-[var(--color-off-white)] border-y border-[var(--color-border)] py-8 relative z-20">
      <motion.div 
        variants={container} 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-10%" }}
        className="max-w-[1280px] mx-auto px-6 flex flex-wrap justify-between items-start gap-8"
      >
        <motion.div variants={item} className="flex items-start gap-3 flex-1 min-w-[200px] border-r border-transparent md:border-[var(--color-border)] pr-4">
          <Users className="text-[#C9A84C] shrink-0" strokeWidth={1.5} size={24} />
          <div>
            <div className="font-cormorant font-semibold text-[16px] text-[#1C1C1C]">3rd Generation Weavers</div>
            <div className="font-inter text-[13px] text-[#6B6B6B]">87+ years of manufacturing heritage</div>
          </div>
        </motion.div>

        <motion.div variants={item} className="flex items-start gap-3 flex-1 min-w-[200px] border-r border-transparent md:border-[var(--color-border)] pr-4">
          <Globe2 className="text-[#C9A84C] shrink-0" strokeWidth={1.5} size={24} />
          <div>
            <div className="font-cormorant font-semibold text-[16px] text-[#1C1C1C]">Global Export Capabilities</div>
            <div className="font-inter text-[13px] text-[#6B6B6B]">IEC Registered · AJDPJ0004B</div>
          </div>
        </motion.div>

        <motion.div variants={item} className="flex items-start gap-3 flex-1 min-w-[200px] border-r border-transparent md:border-[var(--color-border)] pr-4">
          <Layers className="text-[#C9A84C] shrink-0" strokeWidth={1.5} size={24} />
          <div>
            <div className="font-cormorant font-semibold text-[16px] text-[#1C1C1C]">Unmatched Scale</div>
            <div className="font-inter text-[13px] text-[#6B6B6B]">5,000+ designs · Ready stock</div>
          </div>
        </motion.div>

        <motion.div variants={item} className="flex items-start gap-3 flex-1 min-w-[200px]">
          <Scissors className="text-[#C9A84C] shrink-0" strokeWidth={1.5} size={24} />
          <div>
            <div className="font-cormorant font-semibold text-[16px] text-[#1C1C1C]">Custom Manufacturing</div>
            <div className="font-inter text-[13px] text-[#6B6B6B]">Bespoke digital printing & colour matching</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
