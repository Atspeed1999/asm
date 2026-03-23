"use client";
import { motion } from "framer-motion";

const REVIEWS = [
  { quote: "Second time I ordered from Amber from the Netherlands. This shop helped me a lot with customisation.", author: "Sarita Bahadur", country: "Netherlands", emoji: "🇳🇱" },
  { quote: "Helpful and friendly environment. We received what we needed. Came all the way from Sri Lanka.", author: "Prasantha Mendis", country: "Sri Lanka", emoji: "🇱🇰" },
  { quote: "Good quality fabric. Received exactly what I wanted.", author: "Abdullah Maaz", country: "Verified Buyer", emoji: "✅" }
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-[80px] md:py-[120px] bg-[var(--color-off-white)]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">Global Trust</span>
          <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.8rem)] text-[var(--color-text-dark)] mb-2 font-semibold">Trusted by Designers & Manufacturers Worldwide.</h2>
          <p className="font-inter text-[16px] text-[#6B6B6B] max-w-[560px] mx-auto">
            From Gandhi Nagar to the Netherlands — here's what our buyers say.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {REVIEWS.map((review, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="bg-white border border-[#D9CDB8] rounded-md p-8"
            >
              <div className="text-[#C9A84C] text-[18px] tracking-[2px] mb-4">★★★★★</div>
              <blockquote className="font-cormorant italic text-[17px] text-[var(--color-text-dark)] leading-[1.7] mb-5">
                "{review.quote}"
              </blockquote>
              <div className="font-inter">
                <span className="font-semibold text-[14px]">{review.author}</span> {review.emoji}
                <span className="block text-[13px] text-[var(--color-text-muted)] mt-1">{review.country}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          <span className="border border-[#D9CDB8] text-[var(--color-text-muted)] rounded-full px-4 py-2 text-[13px] font-inter">⭐ 4.3/5 · 250+ IndiaMart Reviews</span>
          <span className="border border-[#D9CDB8] text-[var(--color-text-muted)] rounded-full px-4 py-2 text-[13px] font-inter">🌐 212 Google Reviews</span>
          <span className="border border-[#D9CDB8] text-[var(--color-text-muted)] rounded-full px-4 py-2 text-[13px] font-inter">📦 IEC Export Registered</span>
        </motion.div>

      </div>
    </section>
  );
}
