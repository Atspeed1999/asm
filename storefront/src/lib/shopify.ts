const domain = process.env.SHOPIFY_STORE_DOMAIN || "pqh2cp-x9.myshopify.com";
const storefrontAccessToken = process.env.SHOPIFY_STOREFRONT_TOKEN || "2e39486c26322ed68598bb3d310eafcb";

export async function shopifyFetch({ query, variables }: { query: string; variables?: any }) {
  const endpoint = `https://${domain}/api/2024-01/graphql.json`;

  try {
    const result = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Storefront-Access-Token": storefrontAccessToken,
      },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 } // optional revalidation for ISR cache
    });

    if (!result.ok) {
      console.error(`Error: Shopify API returned status HTTP ${result.status}`);
      return { status: result.status, body: await result.text() };
    }

    const { data, errors } = await result.json();
    if (errors) {
      console.error("Shopify GraphQL Errors:", errors);
      return null;
    }

    return { status: result.status, body: data };
  } catch (error) {
    console.error("Error fetching from Shopify", error);
    return { status: 500, error: "Error receiving data" };
  }
}

export async function getProducts() {
  const query = `
    query getProducts {
      products(first: 50) {
        edges {
          node {
            id
            title
            handle
            description
            priceRange {
              minVariantPrice {
                amount
                currencyCode
              }
            }
            images(first: 1) {
              edges {
                node {
                  url
                  altText
                }
              }
            }
            variants(first: 1) {
              edges {
                node {
                  id
                }
              }
            }
          }
        }
      }
    }
  `;

  const res = await shopifyFetch({ query });
  return res?.body?.products?.edges?.map((edge: any) => edge.node) || [];
}
