"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, 250]);
  const collageY1 = useTransform(scrollY, [0, 1000], [0, -100]);
  const collageY2 = useTransform(scrollY, [0, 1000], [0, 50]);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[var(--color-primary-green)] flex items-center pt-[76px]">
      
      {/* Noise texture */}
      <div 
        className="absolute inset-0 z-[1] pointer-events-none opacity-[0.04]" 
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E\")" }} 
      />

      <div className="max-w-[1280px] w-full mx-auto px-6 md:px-8 relative z-10 flex flex-col md:flex-row items-center gap-[8vw] lg:gap-[120px]">
        
        {/* Text Content */}
        <div className="flex-1 w-full pt-12 md:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-[#C9A84C]/40 rounded-full px-4 py-1.5 font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] mb-6 md:mb-8"
          >
            <span>🪡</span> Est. 1938 · Gandhi Nagar, Delhi
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.2 }}
            className="font-cormorant text-[clamp(2.8rem,5vw,4.8rem)] leading-[1.1] text-[var(--color-off-white)] mb-6"
          >
            Premium Fabric Manufacturers<br/>& Wholesalers Since <span className="text-[#C9A84C]">1938.</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.3 }}
            className="font-inter text-[17px] text-[var(--color-off-white)]/80 max-w-[520px] leading-[1.7] mb-8"
          >
            Direct-from-mill sourcing for garment manufacturers, export houses, and fashion designers. Access 5,000+ ready-to-ship designs across Dyeable, Brocade, and Embroidered fabrics at true wholesale margins.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.4 }}
            className="flex flex-wrap gap-4 mb-8"
          >
            <Link href="#swatch-cta" className="font-inter text-[14px] tracking-[1px] uppercase font-semibold px-8 py-4 bg-[#C9A84C] text-[#1A3C2E] rounded-[3px] transition-transform hover:-translate-y-1 btn-premium">
              Order Master Swatch Box
            </Link>
            <Link href="#categories" className="font-inter text-[14px] tracking-[1px] uppercase font-semibold px-8 py-4 border-[1.5px] border-[#C9A84C] text-[#C9A84C] rounded-[3px] transition-colors hover:bg-[#C9A84C]/10">
              Explore Wholesale Catalog
            </Link>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ duration: 1, delay: 0.6 }}
            className="flex flex-wrap gap-x-2 gap-y-1 font-inter text-[12px] text-[var(--color-off-white)]/60"
          >
            <span className="flex items-center gap-1">✓ No MOQ on First Sample Order</span>
            <span>·</span>
            <span className="flex items-center gap-1">✓ International Shipping</span>
            <span>·</span>
            <span className="flex items-center gap-1">✓ GST Invoice on Every Order</span>
          </motion.div>
        </div>

        {/* Visual Content Parallax */}
        <div className="flex-1 w-full relative h-[500px] md:h-[600px] mt-12 md:mt-0 perspective-1000 hidden md:block">
          <motion.div style={{ y: backgroundY }} className="absolute inset-0 w-full h-full">
            <div className="grid grid-cols-2 grid-rows-[2fr_1fr] gap-3 h-full pb-10">
              <motion.div className="col-span-2 relative border-2 border-[#C9A84C] rounded overflow-hidden" style={{ y: collageY1 }}>
                <Image 
                  src="/assets/images/Model_posing_in_202603222249-2.jpeg" 
                  alt="Models wearing premium sarees" 
                  fill 
                  className="object-cover object-top"
                  priority
                />
              </motion.div>
              <motion.div className="relative border-2 border-[#C9A84C] rounded overflow-hidden shadow-2xl z-10 -mt-10" style={{ y: collageY2 }}>
                <Image 
                  src="/assets/images/hero-velvet-maroon-gold.png" 
                  alt="Velvet maroon fabric" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
              <motion.div className="relative border-2 border-[#C9A84C] rounded overflow-hidden shadow-2xl z-20 -mt-20 -ml-10" style={{ y: collageY1 }}>
                <Image 
                  src="/assets/images/hero-silk-blue-green.png" 
                  alt="Silk blue green fabric" 
                  fill 
                  className="object-cover"
                />
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.8, type: "spring" }}
              className="absolute bottom-6 left-6 bg-[#C9A84C] text-[#1A3C2E] font-cormorant-sc text-[12px] font-bold px-4 py-2 rounded-full shadow-xl z-30"
            >
              5,000+ Designs · Ready Stock
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
