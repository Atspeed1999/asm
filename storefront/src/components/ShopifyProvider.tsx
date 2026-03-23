"use client";
export default function ShopifyProvider({ children }: { children: React.ReactNode }) {
  const ShopifyCart = 'shopify-cart' as any;
  const ShopifyStore = 'shopify-store' as any;
  return (
    <>
      <ShopifyStore domain="pqh2cp-x9.myshopify.com" public-access-token="2e39486c26322ed68598bb3d310eafcb" />
      {children}
      <ShopifyCart id="cart" />
    </>
  );
}
