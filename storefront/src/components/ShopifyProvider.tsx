"use client";
export default function ShopifyProvider({ children, domain, token }: { children: React.ReactNode; domain: string; token: string }) {
  const ShopifyCart = 'shopify-cart' as any;
  const ShopifyStore = 'shopify-store' as any;
  return (
    <>
      <ShopifyStore domain={domain} public-access-token={token} />
      {children}
      <ShopifyCart id="cart" />
    </>
  );
}
