"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Menu, X, Search, ShoppingBag, MessageCircle } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { label: "Shop", href: "#", hasMega: true },
  { label: "Wholesale", href: "/wholesale" },
  { label: "Custom Printing", href: "/custom-printing" },
  { label: "Bridal Edit", href: "/bridal-edit" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }} 
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        className={`fixed top-0 left-0 w-full z-[1000] border-b transition-all duration-300 ${
          scrolled 
            ? "bg-[rgba(26,60,46,0.97)] backdrop-blur-[12px] border-[#C9A84C]/15 py-3" 
            : "bg-[var(--color-primary-green)] border-[#C9A84C]/15 py-4"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-4 md:px-6 flex items-center justify-between">
          <button className="md:hidden text-[var(--color-off-white)] p-2" onClick={() => setOpen(true)}>
            <Menu className="w-6 h-6" />
          </button>

          <Link href="/" className="relative z-10 transition-transform duration-300">
            <Image 
              src="/assets/images/logo-transparent.png" 
              alt="Amber Silk Mills" 
              width={160} 
              height={52} 
              className={`object-contain transition-all duration-300 ${scrolled ? 'h-[38px]' : 'h-[52px]'}`}
            />
          </Link>

          <div className="hidden md:flex gap-8 items-center" onMouseLeave={() => setMegaOpen(false)}>
            {NAV_LINKS.map((item, i) => (
              <div key={i} className="relative py-4 shrink-0" onMouseEnter={() => item.hasMega && setMegaOpen(true)}>
                <Link 
                  href={item.href} 
                  className="font-inter text-[13px] tracking-[1.5px] uppercase text-[var(--color-off-white)] relative group py-1"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C9A84C] transition-all duration-300 group-hover:w-full" />
                </Link>
              </div>
            ))}

            {/* Mega Menu Overlay */}
            <AnimatePresence>
              {megaOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} 
                  animate={{ opacity: 1, y: 0 }} 
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 w-full bg-[var(--color-primary-green)] border-t border-[#C9A84C]/15 p-8 shadow-2xl"
                  onMouseEnter={() => setMegaOpen(true)}
                  onMouseLeave={() => setMegaOpen(false)}
                >
                  <div className="max-w-[1280px] mx-auto grid grid-cols-5 gap-6">
                    {/* Add mega menu items */}
                    {[
                      { img: "https://ambersilkmills.in/cdn/shop/collections/13_82f65dac-fd1e-4c0e-b99b-de5ddd24aded.jpg?v=1721133497&width=400", title: "Dyeable Fabrics", link: "Pure Natural Crepe" },
                      { img: "https://ambersilkmills.in/cdn/shop/collections/2_2af6d76b-bc86-426f-87ac-61da6e71e2a5.jpg?v=1721133393&width=400", title: "Brocade & Jacquard", link: "Banarasi Jacquard" },
                      { img: "https://ambersilkmills.in/cdn/shop/collections/6_1a3e2c2c-8eb5-4cba-a3f2-48e8e8c49b40.jpg?v=1721133436&width=400", title: "Embroidery", link: "Lucknawi Thread Work" },
                      { img: "https://ambersilkmills.in/cdn/shop/collections/10_fca70e24-e7d7-417f-bc15-b2e9ef2e39e4.jpg?v=1721133468&width=400", title: "Plain & Velvet", link: "Micro Velvet 9000" },
                      { img: "https://ambersilkmills.in/cdn/shop/collections/15_04e1e153-2b2f-4a1e-90cc-a6b16ddd2e04.jpg?v=1721133514&width=400", title: "Home Furnishing", link: "Cushion Covers" },
                    ].map((col, idx) => (
                      <div key={idx} className="flex flex-col">
                        <div className="relative w-full aspect-square mb-3 rounded overflow-hidden border border-[#C9A84C]/20">
                          <Image src={col.img} alt={col.title} fill className="object-cover" />
                        </div>
                        <h4 className="font-cormorant font-semibold text-[16px] text-[#C9A84C] mb-2">{col.title}</h4>
                        <Link href="#" className="text-[13px] text-[var(--color-off-white)]/70 hover:text-[#C9A84C] py-1">{col.link}</Link>
                        <Link href="#" className="text-[13px] text-[var(--color-off-white)]/70 hover:text-[#C9A84C] py-1">View All &rarr;</Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="flex items-center gap-5 md:gap-6 shrink-0">
            <button aria-label="Search" className="text-[var(--color-off-white)] hover:text-[#C9A84C] transition-colors">
              <Search className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <a href="https://wa.me/919625242165" target="_blank" rel="noopener noreferrer" className="text-[var(--color-off-white)] hover:text-[#C9A84C] transition-colors">
              <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
            </a>
            <button aria-label="Cart" className="text-[var(--color-off-white)] hover:text-[#C9A84C] transition-colors relative" onClick={() => (document.getElementById('cart') as any)?.showModal?.()}>
              <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              {/* Note: Cart count would be logic handled by Shopify component context if built extensively */}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div 
            initial={{ x: "-100%" }} 
            animate={{ x: 0 }} 
            exit={{ x: "-100%" }}
            transition={{ type: "tween", ease: [0.25, 0.46, 0.45, 0.94], duration: 0.4 }}
            className="fixed inset-0 z-[1001] bg-[var(--color-primary-green)] flex flex-col pt-8 px-6 pb-24 overflow-y-auto"
          >
            <button className="absolute top-6 right-6 text-[var(--color-off-white)]" onClick={() => setOpen(false)}>
              <X className="w-8 h-8" strokeWidth={1.5} />
            </button>
            <Image src="/assets/images/logo-transparent.png" alt="Logo" width={160} height={52} className="mb-10 object-contain" />
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((item, i) => (
                <Link 
                  key={i} 
                  href={item.href} 
                  onClick={() => setOpen(false)}
                  className="font-inter text-[32px] font-light text-[var(--color-off-white)] py-4 border-b border-[#C9A84C]/20"
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-auto pt-8">
              <a href="https://wa.me/919625242165" className="btn btn-outline-light w-full border-[#C9A84C] text-[#C9A84C] py-4 rounded font-inter tracking-widest text-sm text-center block">
                CHAT ON WHATSAPP
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
