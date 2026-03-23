"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const PRODUCTS = [
  { handle: "lajawaab-korean-satin", name: "Lajawaab Korean Satin", img: "https://ambersilkmills.in/cdn/shop/collections/korean-satin.jpg?v=1721133300&width=400", price: "599" },
  { handle: "digital-printed-satin-silk", name: "Digital Printed Satin Silk", img: "https://ambersilkmills.in/cdn/shop/collections/digital-printed-satin-silk.jpg?v=1721133310&width=400", price: "799" },
  { handle: "crepe-printed", name: "Crepe Printed Fabric", img: "https://ambersilkmills.in/cdn/shop/collections/crepe-printed.jpg?v=1721133320&width=400", price: "649" },
  { handle: "mukesh-work", name: "Mukesh Work Georgette", img: "https://ambersilkmills.in/cdn/shop/collections/mukesh-work.jpg?v=1721133330&width=400", price: "899" },
  { handle: "foil-print", name: "Foil Print Malai Silk", img: "https://ambersilkmills.in/cdn/shop/collections/foil-print.jpg?v=1721133340&width=400", price: "749" }
];

export default function Spotlight() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);

  return (
    <section id="spotlight" className="py-[80px] md:py-[120px] bg-[var(--color-primary-green)] text-[var(--color-off-white)]">
      <div className="max-w-[1280px] mx-auto px-6">
        
        <motion.div 
          initial={{ opacity: 0, y: 24 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          viewport={{ once: true }} 
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="font-cormorant-sc text-[11px] tracking-[2px] uppercase text-[#C9A84C] block mb-4">Curated D2C Collection</span>
          <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.8rem)] text-[var(--color-off-white)] mb-2 font-semibold">The Lajawaab Collection.</h2>
          <p className="font-inter text-[16px] text-[#F7F3ED]/70 max-w-[560px] mx-auto">
            Expertly curated 6-metre bundles — the finest fabrics for your next creation, delivered to your studio.
          </p>
        </motion.div>

        <div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-thin scrollbar-track-[#1A3C2E] scrollbar-thumb-[#C9A84C]">
          {PRODUCTS.map((prod, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-none w-[280px] snap-start bg-[#F7F3ED]/10 border border-[#C9A84C]/20 rounded-md overflow-hidden group"
            >
              <div className="relative w-full aspect-square overflow-hidden bg-black/20">
                <Image src={prod.img} alt={prod.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4 flex flex-col h-[150px]">
                <h4 className="font-cormorant text-[16px] font-semibold text-[var(--color-off-white)] mb-1">{prod.name}</h4>
                <p className="font-inter text-[14px] text-[#C9A84C] mb-auto">₹{prod.price} / 6m bundle</p>
                
                {mounted ? (() => {
                  const ShopifyContext = 'shopify-context' as any;
                  return (
                    <ShopifyContext type="product" handle={prod.handle}>
                      <template dangerouslySetInnerHTML={{ __html: `
                        <button onclick="document.getElementById('cart').addLine(event).showModal();" style="width:100%;background:#C9A84C;color:#1A3C2E;border:none;padding:10px 0;font-family:Inter,sans-serif;font-size:12px;letter-spacing:1px;text-transform:uppercase;font-weight:600;cursor:pointer;border-radius:3px;transition:opacity 0.2s;" onmouseover="this.style.opacity='0.9'" onmouseout="this.style.opacity='1'">
                          Add to Cart
                        </button>
                      ` }} />
                    </ShopifyContext>
                  );
                })() : (
                  <button className="w-full bg-[#C9A84C] text-[#1A3C2E] font-inter text-[12px] tracking-[1px] uppercase font-semibold py-[10px] rounded-[3px]">
                    Add to Cart
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }} 
          whileInView={{ opacity: 1 }} 
          transition={{ delay: 0.6 }} 
          className="text-center mt-6"
        >
          <a href="/collections/lajawaab-collection" className="font-inter text-[14px] font-medium text-[#C9A84C] hover:underline">View Full Collection →</a>
        </motion.div>

      </div>
    </section>
  );
}
