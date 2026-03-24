"use client";
import { motion } from "framer-motion";
import { Users, Globe2, Layers, Scissors, ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";

export default function TrustBar() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = () => {
    if (!scrollRef.current) return;
    const scrollLeft = scrollRef.current.scrollLeft;
    // We assume all items are roughly equal width and there's 4 total
    const itemWidth = scrollRef.current.scrollWidth / 4;
    const index = Math.round(scrollLeft / itemWidth);
    if (index !== activeIndex && index >= 0 && index < 4) {
      setActiveIndex(index);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!scrollRef.current) return;
    const itemWidth = scrollRef.current.scrollWidth / 4;
    scrollRef.current.scrollTo({ left: index * itemWidth, behavior: "smooth" });
    setActiveIndex(index);
  };

  return (
    <section className="bg-[var(--color-off-white)] border-y border-[var(--color-border)] py-12 relative z-20">
      <div className="max-w-[1280px] mx-auto px-6 relative">
        <motion.div 
          ref={scrollRef}
          onScroll={handleScroll}
          variants={container} 
          initial="hidden" 
          whileInView="show" 
          viewport={{ once: true, margin: "-10%" }}
          className="flex justify-start md:justify-center items-stretch gap-0 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-6 md:pb-0 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <motion.div variants={item} className="flex flex-col items-center text-center gap-4 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-1 min-w-[100%] sm:min-w-[50%] md:min-w-[200px] snap-center px-4">
            <Users className="text-[#C9A84C] shrink-0" strokeWidth={1} size={56} />
            <div className="w-8 h-[2px] bg-[#C9A84C] rounded"></div>
            <div>
              <div className="font-cormorant font-semibold text-[18px] text-[#1C1C1C] mb-1">3rd Generation Weavers</div>
              <div className="font-inter text-[13px] text-[#6B6B6B]">87+ years of manufacturing heritage</div>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center text-center gap-4 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-1 min-w-[100%] sm:min-w-[50%] md:min-w-[200px] snap-center px-4">
            <Globe2 className="text-[#C9A84C] shrink-0" strokeWidth={1} size={56} />
            <div className="w-8 h-[2px] bg-[#C9A84C] rounded"></div>
            <div>
              <div className="font-cormorant font-semibold text-[18px] text-[#1C1C1C] mb-1">Global Export Capabilities</div>
              <div className="font-inter text-[13px] text-[#6B6B6B]">IEC Registered · AJDPJ0004B</div>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center text-center gap-4 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-1 min-w-[100%] sm:min-w-[50%] md:min-w-[200px] snap-center px-4">
            <Layers className="text-[#C9A84C] shrink-0" strokeWidth={1} size={56} />
            <div className="w-8 h-[2px] bg-[#C9A84C] rounded"></div>
            <div>
              <div className="font-cormorant font-semibold text-[18px] text-[#1C1C1C] mb-1">Unmatched Scale</div>
              <div className="font-inter text-[13px] text-[#6B6B6B]">5,000+ designs · Ready stock</div>
            </div>
          </motion.div>

          <motion.div variants={item} className="flex flex-col items-center text-center gap-4 flex-[0_0_100%] sm:flex-[0_0_50%] md:flex-1 min-w-[100%] sm:min-w-[50%] md:min-w-[200px] snap-center px-4">
            <Scissors className="text-[#C9A84C] shrink-0" strokeWidth={1} size={56} />
            <div className="w-8 h-[2px] bg-[#C9A84C] rounded"></div>
            <div>
              <div className="font-cormorant font-semibold text-[18px] text-[#1C1C1C] mb-1">Custom Manufacturing</div>
              <div className="font-inter text-[13px] text-[#6B6B6B]">Bespoke digital printing & colour matching</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Navigation Arrows */}
        <button 
          onClick={() => scrollToIndex(Math.max(0, activeIndex - 1))}
          className="absolute left-0 top-[40%] -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 border border-gray-200 rounded-full shadow hover:bg-white text-[#1C1C1C] z-10 md:hidden transition-transform active:scale-95"
          aria-label="Previous"
        >
          <ChevronLeft size={20} />
        </button>
        <button 
          onClick={() => scrollToIndex(Math.min(3, activeIndex + 1))}
          className="absolute right-0 top-[40%] -translate-y-1/2 w-9 h-9 flex items-center justify-center bg-white/90 border border-gray-200 rounded-full shadow hover:bg-white text-[#1C1C1C] z-10 md:hidden transition-transform active:scale-95"
          aria-label="Next"
        >
          <ChevronRight size={20} />
        </button>

        {/* Scroll Progress Dots */}
        <div className="flex justify-center items-center gap-2 mt-2 md:hidden">
          {[0, 1, 2, 3].map((index) => (
            <button 
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${activeIndex === index ? 'bg-[#555555]' : 'bg-[#D1D1D1]'}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
