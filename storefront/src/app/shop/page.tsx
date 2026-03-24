import { getProducts } from "@/lib/shopify";
import Image from "next/image";

export default async function ShopPage() {
  const products = await getProducts();
  const ShopifyBuyButton = 'shopify-buy-button' as any;

  return (
    <div className="pt-24 pb-20 min-h-screen bg-[var(--color-off-white)]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-6">
        <h1 className="font-cormorant font-semibold text-3xl md:text-5xl text-[var(--color-primary-green)] mb-12 text-center">Shop Our Catalog</h1>

        {products.length === 0 ? (
          <div className="text-center py-20 text-[var(--color-text-muted)] text-lg">
            No products found. Please ensure your Shopify Storefront API has products published to the Web App sales channel.
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {products.map((product: any) => {
              const image = product.images.edges[0]?.node;
              const price = product.priceRange.minVariantPrice;
              const variantId = product.variants.edges[0]?.node.id;

              // Convert standard Shopify GID (gid://shopify/ProductVariant/XXXXX) to the raw ID required by the web component
              const rawVariantId = variantId ? variantId.split("/").pop() : "";

              return (
                <div key={product.id} className="group relative flex flex-col bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-[var(--color-border)]">
                  <div className="relative aspect-[4/5] w-full bg-[#f8f3ed] overflow-hidden">
                    {image ? (
                      <Image
                        src={image.url}
                        alt={image.altText || product.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-[600ms] ease-out"
                        sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 25vw"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-gray-400 font-inter text-sm bg-gray-100">
                        No Image
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6 flex flex-col flex-1 bg-white">
                    <h3 className="font-display font-medium text-[17px] text-[#1A3C2E] mb-2 leading-snug line-clamp-2">{product.title}</h3>
                    
                    <div className="flex items-center justify-between mt-auto pt-4">
                      <span className="font-semibold tracking-wide text-[#C9A84C] text-lg">
                        {price.currencyCode === "INR" ? "₹" : "$"} {parseFloat(price.amount).toFixed(2)}
                      </span>
                    </div>

                    <div className="mt-5 w-full">
                      {/* The web component seamlessly attaches to the <shopify-cart> existing on the screen and powers standard checkout! */}
                      {rawVariantId ? (
                        <ShopifyBuyButton 
                          variant-id={rawVariantId} 
                          button-text="Add to Cart" 
                          className="w-full !font-inter !tracking-widest"
                          style={{ '--shopify-button-background': 'var(--color-primary-green)', '--shopify-button-text': '#F7F3ED' } as React.CSSProperties}
                        ></ShopifyBuyButton>
                      ) : (
                        <button disabled className="w-full p-3 bg-gray-200 text-gray-400 rounded-md font-inter text-sm tracking-widest uppercase">Unavailable</button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
