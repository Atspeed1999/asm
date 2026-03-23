import React from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'shopify-context': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { type?: string; handle?: string };
      'shopify-cart': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & { id?: string };
    }
  }
}
