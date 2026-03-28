import type { Metadata, Viewport } from "next";
import { Inter, Cormorant_Garamond, Cormorant_SC } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";
import ClientWrapper from "@/components/ClientWrapper";
import ShopifyProvider from "@/components/ShopifyProvider";
import { MetaPixel } from "@/components/MetaPixel";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["300","400","500","600","700"] });
const cormorant = Cormorant_Garamond({ subsets: ["latin"], weight: ["400","500","600","700"], style: ["normal", "italic"], variable: "--font-cormorant" });
const cormorant_sc = Cormorant_SC({ subsets: ["latin"], weight: ["400","600","700"], variable: "--font-cormorant-sc" });

export const metadata: Metadata = {
  title: "Amber Silk Mills — Premium Fabric Manufacturers & Wholesalers",
  description: "Premium fabric manufacturers and wholesalers since 1938. 5,000+ designs — Dyeable, Brocade, Jacquard, Embroidery, Velvet. Wholesale & D2C.",
  icons: {
    icon: [{ url: "/assets/images/logo-green.jpg" }]
  },
};

export const viewport: Viewport = { themeColor: "#F7F3ED" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const shopifyDomain = process.env.SHOPIFY_STORE_DOMAIN || "atspeed.work";
  const shopifyToken = process.env.SHOPIFY_STOREFRONT_TOKEN || "2e39486c26322ed68598bb3d310eafcb";

  return (
    <html lang="en">
      <head>
        <script type="module" src="https://cdn.shopify.com/storefront/web-components.js" async />
      </head>
      <body className={`${inter.variable} ${cormorant.variable} ${cormorant_sc.variable} antialiased bg-[var(--color-off-white)] text-[var(--color-text-dark)]`}>
        <CustomCursor />
        <MetaPixel />
        <ShopifyProvider domain={shopifyDomain} token={shopifyToken}>
          <ClientWrapper>{children}</ClientWrapper>
        </ShopifyProvider>
      </body>
    </html>
  );
}
