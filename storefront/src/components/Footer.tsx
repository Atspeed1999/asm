import Image from "next/image";
import Link from "next/link";
import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0F2A1E] text-[var(--color-off-white)] pt-[80px]">
      <div className="max-w-[1280px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-[60px]">
        
        {/* Col 1 */}
        <div className="flex flex-col gap-4">
          <Image src="/assets/images/logo-transparent.png" alt="Amber Silk Mills" width={140} height={45} className="mb-2" />
          <p className="font-cormorant italic text-[18px] text-[#C9A84C]">A Legacy of Luxury Since 1938.</p>
          <div className="font-inter text-[13px] text-[var(--color-off-white)]/60 space-y-1">
            <p>GST: 07AJDPJ0004B1Z8</p>
            <p>IEC: AJDPJ0004B</p>
            <p className="pt-2 leading-relaxed">91/117, Jainmati Gali, Subhash Road,<br/>Gandhi Nagar, Delhi</p>
          </div>
          <div className="flex items-center gap-4 mt-2">
            <a href="https://instagram.com/ambersilkmills" target="_blank" className="p-2 border border-[#C9A84C]/30 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
              <Instagram size={18} className="text-[#C9A84C]" />
            </a>
            <a href="https://wa.me/919625242165" target="_blank" className="p-2 border border-[#C9A84C]/30 rounded-full hover:bg-[#C9A84C]/10 transition-colors">
              <MessageCircle size={18} className="text-[#C9A84C]" />
            </a>
          </div>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-cormorant font-semibold text-[20px] text-[#C9A84C] mb-2">Shop</h4>
          {["All Fabrics", "Dyeable Fabrics", "Brocade & Jacquard", "Embroidery", "Plain & Velvet", "Home Furnishings", "Lajawaab Collection"].map((link, i) => (
            <Link key={i} href="#" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">{link}</Link>
          ))}
        </div>

        {/* Col 3 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-cormorant font-semibold text-[20px] text-[#C9A84C] mb-2">Business</h4>
          <Link href="/wholesale" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">Wholesale Inquiry</Link>
          <Link href="/custom-printing" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">Custom Printing</Link>
          <Link href="/bridal-edit" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">Bridal Edit</Link>
          <Link href="/about" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">About Us</Link>
          <Link href="/contact" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">Contact</Link>
          <Link href="/policies" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors pt-4">Policies</Link>
        </div>

        {/* Col 4 */}
        <div className="flex flex-col gap-4">
          <h4 className="font-cormorant font-semibold text-[20px] text-[#C9A84C] mb-2">Contact</h4>
          <a href="https://wa.me/919625242165" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">WhatsApp: +91 96252 42165</a>
          <a href="https://wa.me/919811499301" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">WhatsApp: +91 98114 99301</a>
          <a href="mailto:info@ambersilkmills.in" className="font-inter text-[14px] text-[var(--color-off-white)]/80 hover:text-[#C9A84C] transition-colors">Email Us</a>
          <p className="font-inter text-[13px] text-[var(--color-off-white)]/50 pt-2">Tue–Sun, 11:30 AM – 7:30 PM</p>
          <a href="https://wa.me/919625242165" className="mt-4 font-inter text-[12px] font-semibold tracking-[1px] uppercase border-[1.5px] border-[#C9A84C] text-[#C9A84C] py-3 px-6 rounded-[3px] text-center hover:bg-[#C9A84C]/10 transition-colors inline-block max-w-[max-content]">
            Chat on WhatsApp
          </a>
        </div>

      </div>
      
      <div className="border-t border-[#C9A84C]/15 py-6">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 font-inter text-[12px] text-[var(--color-off-white)]/50">
          <span>© 2026 Amber Silk Mills. All rights reserved.</span>
          <span>Made with ❤️ in Gandhi Nagar, Delhi.</span>
        </div>
      </div>
    </footer>
  );
}
