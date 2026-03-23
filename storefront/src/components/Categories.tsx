"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Layers } from "lucide-react";

const CARDS = [
  { img: "https://ambersilkmills.in/cdn/shop/collections/13_82f65dac-fd1e-4c0e-b99b-de5ddd24aded.jpg?v=1721133497&width=600", label: "Custom Processing", title: "Dyeable Base Fabrics", desc: "100+ pristine base fabrics ready for custom processing. Pure Natural Crepe, Georgette Lurex, Muslin, Chanderi, and Organza — supplied in dyeable-ready form." },
  { img: "https://ambersilkmills.in/cdn/shop/collections/2_2af6d76b-bc86-426f-87ac-61da6e71e2a5.jpg?v=1721133393&width=600", label: "Heavy Loom Precision", title: "Brocade & Jacquard", desc: "Antique Zari Broket, Banarasi Jacquard, Mulberry Jacquard, and Sherwani Jacquard. Engineered for premium ethnic wear and bridal couture." },
  { img: "https://ambersilkmills.in/cdn/shop/collections/6_1a3e2c2c-8eb5-4cba-a3f2-48e8e8c49b40.jpg?v=1721133436&width=600", label: "Artisan Embellishment", title: "Embroidery & Handwork", desc: "Intricate embellishments at scale. Lucknawi Threadwork, Kasab Zari, Badla Zari, Mukesh Work, Sequence Embroidery — 87+ designs in ready stock." },
  { img: "https://ambersilkmills.in/cdn/shop/collections/10_fca70e24-e7d7-417f-bc15-b2e9ef2e39e4.jpg?v=1721133468&width=600", label: "Consistent Quality", title: "Plain & Velvet", desc: "Consistent quality across massive yardage. Featuring Pure Micro Velvet 9000 in 15+ solid colours alongside Georgette, Satin, and Crepe plains." },
  { img: "https://ambersilkmills.in/cdn/shop/collections/15_04e1e153-2b2f-4a1e-90cc-a6b16ddd2e04.jpg?v=1721133514&width=600", label: "Décor & Interiors", title: "Home Furnishing Fabrics", desc: "High-margin décor textiles for interior designers and furnishing labels. Heavy Brocade and Jacquard fabrics for cushion covers and premium projects." }
];

export default function Categories() {
  return (
    <section id="categories" className="py-[80px] md:py-[120px] bg-[var(--color-off-white)]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">THE CATALOG</span>
          <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.8rem)] text-[#1C1C1C] mb-2 font-semibold">5,000+ Designs. Every Fabric. Every Technique.</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CARDS.map((card, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white border border-[#D9CDB8] rounded-md overflow-hidden group transition-all duration-300 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="font-cormorant-sc text-[11px] text-[#C9A84C] uppercase tracking-[2px] block mb-2">{card.label}</span>
                <h3 className="font-cormorant text-[22px] text-[#1C1C1C] font-semibold mb-2">{card.title}</h3>
                <p className="font-inter text-[14px] text-[#6B6B6B] leading-[1.6] mb-4">{card.desc}</p>
                <Link href="#" className="font-inter text-[13px] text-[#C9A84C] font-medium hover:underline inline-flex items-center gap-1">
                  Explore Category <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}

          {/* CTA Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-5%" }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Link href="/collections/all" className="bg-[var(--color-primary-green)] h-full rounded-md flex flex-col items-center justify-center text-center p-8 transition-transform duration-300 hover:scale-[1.02]">
              <div className="w-12 h-12 border border-[#C9A84C] rounded mb-4 flex items-center justify-center">
                <Layers className="text-[#C9A84C]" size={24} />
              </div>
              <h3 className="font-cormorant text-[22px] text-[#C9A84C] font-semibold mb-2">View Full Catalog</h3>
              <p className="font-inter text-[13px] text-[var(--color-off-white)]/80 mb-4">5,000+ designs across 15 fabric categories</p>
              <ArrowRight className="text-[#C9A84C]" size={24} />
            </Link>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
