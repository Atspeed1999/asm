<img src="https://r2cdn.perplexity.ai/pplx-full-logo-primary-dark%402x.png" style="height:64px;margin-right:32px"/>

# - Platform decision is to stay with Shopify, and we are going to work on the front end part of it.

- D2C first with the wholesale inquiry part.
- I am talking about Google's AI coding tool. It is an IDE or AI coding tool by Google that you can download or install in your system, and it will help you build anything that you like.
I have added a logo image in the chat for you to use it as a reference or use it however you like. Keep in mind this is the actual current logo of the brand.
- I am sharing below a draft of content that can be used to create the website below( take whatever you think fits in your design ):

1. Hero Section (Above the Fold)

Headline: Premium Fabric Manufacturers \& Wholesalers Since 1938. Sub-headline: Direct-from-mill sourcing for garment manufacturers, export houses, and fashion designers. Access 5,000+ ready-to-ship designs of Dyeable, Brocade, and Embroidered fabrics at wholesale margins . Primary Button (Solid): Order Master Swatch Box Secondary Button (Outline): Explore Wholesale Catalog

2. B2B Trust Bar (Directly below Hero)
(Use clean, minimalist icons next to each point)

3rd Generation Weavers: 87+ years of manufacturing heritage.

Global Export Capabilities: IEC Registered (AJDPJ0004B).

Unmatched Scale: 5,000+ designs with ready stock.

Custom Manufacturing: Bespoke digital printing and color matching.

3. Category Grid (The Catalog)
(Clear, macro-texture images for each card. The copy here must be highly technical and specific.)
Dyeable Base Fabrics: * Copy: 100+ pristine base fabrics ready for custom processing. Sourcing pure natural crepe, georgette lurex, muslin, and chanderi.

Brocade \& Jacquard Weaves: * Copy: Heavy-loom precision. Supplying Antique Zari Broket, Banarasi Jacquard, and Mulberry Jacquard for premium ethnic wear and bridal designers.

Heavy Embroidery \& Handwork: * Copy: Intricate embellishments at scale. Featuring Lucknawi threadwork, Kasab Zari, Badla Zari, and Sequence embroidery .

Plain \& Velvet Collections: * Copy: Consistent quality across massive yardage. Highlighting our signature Pure Micro Velvet 9000, available in 15+ solid colors.

Home Furnishing Textiles:
Copy: High-margin décor textiles. Supplying heavy brocade and jacquard fabrics for cushion covers, bolsters, and premium interior projects .

4. The Manufacturing Moat (Custom Capabilities)
(Split section: Left side text, right side a video of a digital printing machine or a master weaver.)
Headline: Your Vision, Our Print. End-to-End Custom Manufacturing. Body Copy: We don't just supply off-the-shelf fabrics; we build them to your exact specifications. From custom digital print designs to precise color matching and specialized zari lining integration, our Delhi and Surat production hubs execute your vision with zero compromises .Bullet Points:

Bespoke Digital \& Foil Printing

Custom Color Dyeing \& Matching

Dyeable Base Supply for Downstream Processing CTA Button: Request Custom Quote

5. Social Proof (B2B Authority)
(Do not use reviews that just say "Nice fabric." Use the reviews that prove you can handle complex, international, and bulk orders.)
Headline: Trusted by Global Designers \& Manufacturers.
Review 1: "Second time I ordered from Amber from the Netherlands. This shop helped me a lot with customisation." – Sarita Bahadur.

Review 2: "Helpful and friendly environment. We received what we needed. Came all the way from Sri Lanka." – Prasantha Mendis.

Review 3: "Good quality fabric... I received what I want." – Abdullah Maaz.

6. The Risk Reversal (Bottom of Page Conversion)
Headline: Feel the Quality Before You Commit to Bulk.
Body Copy: We understand the risk of ordering bulk yardage unseen. Order our Master Swatch Box to experience the weight, drape, and precision of our core fabrics directly in your studio.
CTA Button: Order Swatch Box (₹499)
A final piece of advice: Get rid of the 10% off pop-up that is currently on the site. Replace it with an exit-intent pop-up that says: "Need bulk pricing? Download our complete B2B Catalog and MOQ list." Capture their email, give them the PDF catalog, and have your sales team follow up. That is how you close a ₹5 Lakh order, not with a 10% coupon.

Good. I have everything I need. The tool you're referring to is **Google's Project IDX** or more likely **Firebase Studio (formerly IDX)** — or possibly you mean giving this prompt to **Gemini/Jules** to write the Shopify Liquid code. The prompt I'm writing will work for all of these.

One note before the prompt: your content draft is **excellent** — sharp, B2B-specific, and honest. I've taken it wholesale (no pun intended), refined the copy where needed, and woven it into a complete build spec. Here it is:

***

# 🧵 Amber Silk Mills — Shopify Frontend Build Prompt


***

## MASTER CONTEXT

You are building the complete Shopify storefront frontend for **Amber Silk Mills**, a 3rd-generation Indian fabric manufacturer and wholesaler established in 1938, located in Gandhi Nagar, Delhi — one of Asia's largest textile markets. The business sells 5,000+ fabric designs spanning Dyeable, Brocade, Jacquard, Embroidery, Velvet, and Home Furnishing categories.

**Primary Goal of This Website:** D2C retail conversion with a parallel B2B wholesale inquiry funnel running throughout every page.

**Platform:** Shopify (custom Liquid theme — do NOT use a generic Shopify theme template. Write custom `sections/`, `snippets/`, `layout/theme.liquid`, and `assets/` files from scratch).

**Google's AI Coding Tool (Gemini/Jules/Firebase Studio):** Generate all Shopify Liquid `.liquid` files, `theme.json` settings schema, CSS (vanilla or SCSS), and vanilla JavaScript. No React, no Vue. Use Shopify's native Section Schema for all editable blocks.

***

## BRAND IDENTITY \& DESIGN SYSTEM

### Logo

The logo is a gold monogram "AS" with the text "AMBER SILK MILLS" and tagline "A LEGACY OF LUXURY SINCE 1938" on a deep forest green background. The logo uses a serif-adjacent custom font for "AMBER" and clean caps for "SILK MILLS." All design decisions must derive from this logo.

### Color Palette

```
--color-primary-green:   #1A3C2E   /* Deep Forest Green — primary background */
--color-primary-gold:    #C9A84C   /* Warm Heritage Gold — CTAs, accents, borders */
--color-gold-light:      #E8C97A   /* Light Gold — hover states, shimmer effects */
--color-off-white:       #F7F3ED   /* Warm Ivory — body backgrounds, card backgrounds */
--color-text-dark:       #1C1C1C   /* Near-black for body text */
--color-text-muted:      #6B6B6B   /* Muted grey for subheadings, captions */
--color-border:          #D9CDB8   /* Warm beige border */
--color-cta-solid:       #C9A84C   /* Gold fill CTA */
--color-cta-text:        #1A3C2E   /* Dark green text on gold button */
```


### Typography

```
--font-display:    'Cormorant Garamond', serif       /* Headlines, hero text — Google Font */
--font-body:       'Inter', sans-serif               /* Body copy, nav, UI — Google Font */
--font-accent:     'Cormorant SC', serif             /* Small caps, category labels */
```

Import both from Google Fonts in `layout/theme.liquid`. Set base font size to 16px. Use a fluid type scale: hero headline at `clamp(2.8rem, 6vw, 5rem)`, section headlines at `clamp(1.8rem, 3vw, 2.8rem)`, body at `1rem/1.7`.

### Iconography

Use **Lucide Icons** (CDN import) for all UI icons. Do not use emoji. Keep icons minimal — stroke weight 1.5px, color inherits from context.

### Motion \& Animation Principles

- All transitions: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` easing
- Hover transitions: 280ms
- Page element entrances: use `IntersectionObserver` with `opacity: 0 → 1` + `translateY(24px → 0)` over 600ms, staggered 80ms per child
- No heavy JavaScript animation libraries. Pure CSS + vanilla JS only.
- Fabric texture cards: on hover, apply `scale(1.03)` with a subtle gold border glow `box-shadow: 0 0 0 2px var(--color-primary-gold)`
- No autoplay video with sound anywhere on the site


### Spacing System

Use an 8px base grid. Define CSS custom properties:

```css
--space-xs: 8px; --space-sm: 16px; --space-md: 24px;
--space-lg: 48px; --space-xl: 80px; --space-2xl: 120px;
```


***

## GLOBAL LAYOUT COMPONENTS

### 1. Announcement Bar (`sections/announcement-bar.liquid`)

- Full-width, `background: var(--color-primary-green)`, `color: var(--color-primary-gold)`
- Font: `--font-accent`, 12px, letter-spacing 2px, all caps
- Rotating text (auto-cycle every 4s, fade transition):
    - "Free Shipping on Orders Above ₹2,500"
    - "Custom Digital Printing — Request a Quote"
    - "87 Years of Manufacturing Heritage Since 1938"
    - "International Shipping Available · IEC Registered Exporter"
- Dismissible with an X button (localStorage persisted for session)


### 2. Navigation (`sections/header.liquid`)

- Sticky header. On scroll past 80px: shrink logo, add `background: rgba(26,60,46,0.97)` with `backdrop-filter: blur(12px)`
- Desktop layout (left to right):
    - Logo (SVG/PNG, max-height 52px on default, 38px on scroll-shrink)
    - Nav links centered: **Shop** (mega-menu) · **Wholesale** · **Custom Printing** · **Bridal Edit** · **About** · **Contact**
    - Right side: Search icon · WhatsApp icon (links to `https://wa.me/919625242165`) · Cart icon with item count badge
- Nav link style: `--font-body`, 13px, letter-spacing 1.5px, uppercase, `color: var(--color-off-white)`. Hover: gold underline slides in from left (CSS `::after` pseudo-element, width 0→100%, 280ms)
- **Mega Menu for "Shop":** full-width dropdown, dark green background, 5 columns showing category name + a fabric texture thumbnail + 2–3 subcategory links. Triggered on hover (desktop) / tap (mobile).
- Mobile: hamburger → full-screen slide-in drawer from left. Dark green background. Logo at top. Nav links stacked at `2rem`, gold dividers between. WhatsApp CTA fixed at bottom of drawer.
- Cart drawer (right side): slide-in panel, shows item thumbnails, quantity controls, subtotal, checkout button. Do not navigate away from page on cart add.

***

## PAGE 1: HOMEPAGE (`templates/index.json` + all associated sections)

### Section 1.1 — Hero (`sections/hero.liquid`)

**Layout:** Full-viewport height (`100svh`). Two-column split on desktop (55% left content, 45% right visual). Single column stacked on mobile (visual below content).

**Left Column:**

- Pre-headline pill badge: `[ 🪡 Est. 1938 · Gandhi Nagar, Delhi ]` — small gold-bordered rounded tag, `--font-accent`, 11px
- Main Headline (H1):

```
Premium Fabric Manufacturers
& Wholesalers Since 1938.
```

Font: `--font-display`, `clamp(2.8rem, 5vw, 4.8rem)`, color `#F7F3ED`, line-height 1.1. The word **"1938"** renders in `var(--color-primary-gold)`.
- Sub-headline (P):

```
Direct-from-mill sourcing for garment manufacturers, export houses, 
and fashion designers. Access 5,000+ ready-to-ship designs across 
Dyeable, Brocade, and Embroidered fabrics at true wholesale margins.
```

Font: `--font-body`, 17px, `color: rgba(247,243,237,0.82)`, max-width 520px.
- CTA Button Group (horizontal, with gap):
    - **Primary (solid):** `background: var(--color-primary-gold)`, `color: var(--color-primary-green)`, text: "Order Master Swatch Box", font `--font-body` bold 14px, letter-spacing 1px uppercase, `padding: 16px 32px`, `border-radius: 3px`. Hover: `background: var(--color-gold-light)`, lift `translateY(-2px)`.
    - **Secondary (outline):** `border: 1.5px solid var(--color-primary-gold)`, `color: var(--color-primary-gold)`, transparent background, text: "Explore Wholesale Catalog". Hover: fill with gold at 15% opacity.
- Below CTAs: 3 micro-trust signals in a row (flex), separated by `·`:
    - `✓ No MOQ on First Sample Order`
    - `✓ International Shipping`
    - `✓ GST Invoice on Every Order`
    - Font: 12px, `--font-body`, `color: rgba(247,243,237,0.6)`

**Right Column:**

- A vertically stacked collage of 3 fabric close-up images (use Shopify metafield or hardcoded image src). Top image large (portrait), two smaller images below side by side. Images have `border-radius: 4px`, a 2px gold border.
- A floating badge overlaid bottom-left of the collage: `background: var(--color-primary-gold)`, dark green text, reads **"5,000+ Designs · Ready Stock"**, rounded pill, `--font-accent`, 11px, shadow.

**Background:** Dark green (`#1A3C2E`). Subtle noise/grain texture overlay via CSS (`background-image: url(noise.png)`, opacity 0.04) for a premium feel.

**Animation:** Left column elements animate in sequentially on page load — badge first (300ms delay), headline (500ms), sub-headline (700ms), buttons (900ms), micro-trust (1100ms). Each: `opacity: 0 → 1` + `translateY(16px → 0)`.

***

### Section 1.2 — B2B Trust Bar (`sections/trust-bar.liquid`)

- Full-width band, `background: var(--color-off-white)`, `border-top: 1px solid var(--color-border)`, `border-bottom: 1px solid var(--color-border)`
- `padding: 28px 0`
- 4 columns (flex, space-between, wrap on mobile → 2×2 grid):

| Icon | Label | Sub-text |
| :-- | :-- | :-- |
| `factory` (Lucide) | 3rd Generation Weavers | 87+ years of manufacturing heritage |
| `globe` | Global Export Capabilities | IEC Registered · AJDPJ0004B |
| `layers` | Unmatched Scale | 5,000+ designs · Ready stock |
| `paintbrush` | Custom Manufacturing | Bespoke digital printing \& colour matching |

- Each item: icon in `var(--color-primary-gold)` (24px), label in `--font-display` 16px dark, sub-text in `--font-body` 13px muted. Vertical dividers between items on desktop.

***

### Section 1.3 — Category Grid (`sections/category-grid.liquid`)

- Section background: `var(--color-off-white)`
- Section top: small pre-label "THE CATALOG" in `--font-accent` gold, then H2: **"5,000+ Designs. Every Fabric. Every Technique."** in `--font-display`
- Grid: 3 columns desktop, 2 columns tablet, 1 column mobile. Gap: 24px.
- **5 category cards** (plus 1 "View Full Catalog" card = 6 total, 3×2 grid):

**Card structure:**

- `background: white`, `border: 1px solid var(--color-border)`, `border-radius: 6px`, overflow hidden
- Top: fabric macro-texture image, `aspect-ratio: 4/3`, `object-fit: cover`. On hover: `scale(1.04)` (CSS on inner `<img>`, parent overflow hidden)
- Bottom: content area `padding: 20px`
    - Category label: `--font-accent`, 11px, gold, uppercase, letter-spacing 2px
    - Title: `--font-display`, 22px, dark
    - Description: `--font-body`, 14px, muted, line-height 1.6
    - Link: "Explore Category →" in gold, 13px, underline on hover

**Card Content:**

**Card 1 — Dyeable Base Fabrics**
Label: `CUSTOM PROCESSING`
Title: `Dyeable Base Fabrics`
Description: `100+ pristine base fabrics ready for custom processing. Pure Natural Crepe, Georgette Lurex, Muslin, Chanderi, and Organza — supplied in dyeable-ready form for downstream manufacturing and boutique dye houses.`

**Card 2 — Brocade \& Jacquard Weaves**
Label: `HEAVY LOOM PRECISION`
Title: `Brocade & Jacquard`
Description: `Antique Zari Broket, Banarasi Jacquard, Mulberry Jacquard, and Sherwani Jacquard. Engineered for premium ethnic wear, bridal couture, and heritage fashion labels.`

**Card 3 — Heavy Embroidery \& Handwork**
Label: `ARTISAN EMBELLISHMENT`
Title: `Embroidery & Handwork`
Description: `Intricate embellishments at scale. Lucknawi Threadwork, Kasab Zari, Badla Zari, Mukesh Work, Sequence Embroidery, and Chandla Work — 87+ designs available in ready stock.`

**Card 4 — Plain \& Velvet Collections**
Label: `CONSISTENT QUALITY`
Title: `Plain & Velvet`
Description: `Consistent quality across massive yardage. Featuring Pure Micro Velvet 9000 in 15+ solid colours alongside Georgette, Satin, Crepe, Chiffon, and Organza plains.`

**Card 5 — Home Furnishing Textiles**
Label: `DÉCOR & INTERIORS`
Title: `Home Furnishing Fabrics`
Description: `High-margin décor textiles for interior designers and furnishing labels. Heavy Brocade and Jacquard fabrics supplied for cushion covers, bolsters, curtains, and premium interior projects.`

**Card 6 — CTA Card (no image)**
Background: `var(--color-primary-green)`. Centered content vertically and horizontally.
Gold icon: `grid-2x2` (Lucide). Text: **"View Full Catalog"** in `--font-display` 22px gold. Sub: "5,000+ designs across 15 fabric categories" in off-white 13px. Arrow icon →. Full card is a clickable link to `/collections/all`.

***

### Section 1.4 — Custom Manufacturing Moat (`sections/manufacturing-moat.liquid`)

**Layout:** 50/50 split. Left: text. Right: video or image. Dark green background (`#1A3C2E`). `padding: var(--space-2xl) 0`.

**Left (Text):**

- Pre-label: "CUSTOM CAPABILITIES" in `--font-accent`, gold, 11px
- H2: **"Your Vision, Our Print. End-to-End Custom Manufacturing."** in `--font-display`, off-white, `clamp(2rem, 3vw, 2.8rem)`
- Body: *"We don't just supply off-the-shelf fabrics — we build them to your exact specifications. From custom digital print designs to precise colour matching and specialised zari lining integration, our Delhi and Surat production hubs execute your vision with zero compromises."* `--font-body`, 16px, `rgba(247,243,237,0.80)`, line-height 1.8, max-width 480px
- Bullet list (custom styled, gold dot markers):
    - Bespoke Digital \& Foil Printing
    - Custom Colour Dyeing \& Matching
    - Dyeable Base Supply for Downstream Processing
    - Zari \& Lurex Lining Integration
    - Minimum Order Flexibility for Sampling
- CTA Button: solid gold, text: "Request Custom Quote", links to `/pages/wholesale`

**Right (Media):**

- A `<video>` tag with `autoplay muted loop playsinline` showing a fabric printing machine or weaving process. Fallback: a high-quality fabric close-up image. `border-radius: 8px`, slight shadow. If using a Shopify `section_settings` schema, allow merchant to toggle between video URL and image.
- A floating stat card overlaid bottom-right corner: `background: var(--color-primary-gold)`, green text, reads: **"10+ Artisan Techniques Mastered"** with a small `sparkles` icon.

***

### Section 1.5 — Social Proof (`sections/testimonials.liquid`)

- Background: `var(--color-off-white)`
- Pre-label: "GLOBAL TRUST" in `--font-accent`, gold
- H2: **"Trusted by Designers \& Manufacturers Worldwide."** `--font-display`, dark
- Sub: "From Gandhi Nagar to the Netherlands — here's what our buyers say." `--font-body`, muted

**Review Cards:** 3-column desktop, single-column mobile (horizontal scroll with snap). Each card:

- `background: white`, `border: 1px solid var(--color-border)`, `border-radius: 6px`, `padding: 28px`
- 5 gold stars rendered as `★★★★★` in `var(--color-primary-gold)`
- Review quote in `--font-display` italic, 17px, dark, line-height 1.7
- Reviewer name in `--font-body` bold, 14px + flag emoji + country:

**Card 1:** *"Second time I ordered from Amber from the Netherlands. This shop helped me a lot with customisation."* — **Sarita Bahadur** 🇳🇱 Netherlands

**Card 2:** *"Helpful and friendly environment. We received what we needed. Came all the way from Sri Lanka."* — **Prasantha Mendis** 🇱🇰 Sri Lanka

**Card 3:** *"Good quality fabric. Received exactly what I wanted."* — **Abdullah Maaz** ✅ Verified Buyer

- Below the 3 cards: a centered row of trust logos/badges:
    - `[ ⭐ 4.3/5 · 250+ IndiaMart Reviews ]`
    - `[ 🌐 212 Google Reviews ]`
    - `[ 📦 IEC Export Registered ]`
    - Styled as pill badges, `border: 1px solid var(--color-border)`, `--font-body` 13px

***

### Section 1.6 — Lajawaab Collection Spotlight (`sections/collection-spotlight.liquid`)

- Full-bleed dark green section with gold accents
- Pre-label: "CURATED D2C COLLECTION"
- H2: **"The Lajawaab Collection."**
- Sub: *"Expertly curated 6-metre bundles — the finest fabrics for your next creation, delivered to your studio."*
- Horizontal scroll strip of 4–5 product cards (each: product image, name, price/meter, "Add to Cart" button). These pull from a Shopify collection handle `lajawaab-collection`.
- Below strip: link "View Full Collection →" in gold

***

### Section 1.7 — Risk Reversal / Swatch Box CTA (`sections/swatch-cta.liquid`)

**Full-width band. Two-column layout.**

- Left (60%):
    - H2: **"Feel the Quality Before You Commit to Bulk."** `--font-display`, dark, large
    - Body: *"We understand the risk of ordering bulk yardage unseen. Order our Master Swatch Box to experience the weight, drape, and precision of our core fabrics — directly in your studio or workshop."* `--font-body`, muted
    - Bullet: `✓ 15+ fabric samples` · `✓ Full technical spec sheet included` · `✓ ₹499 — redeemable against first bulk order`
    - CTA: solid gold button — "Order Swatch Box — ₹499"
- Right (40%): Image of a beautifully styled swatch box, fabric swatches fanned out, on a dark surface. `border-radius: 8px`.
- Background: `var(--color-off-white)`, `border-top: 2px solid var(--color-primary-gold)`

***

### Section 1.8 — Instagram Feed Strip (`sections/instagram-strip.liquid`)

- Pre-label: "FOLLOW OUR CRAFT"
- H2: **"@ambershilkmills"** — links to Instagram profile
- A horizontal row of 6 square Instagram-style image tiles (hardcoded or via a third-party Shopify Instagram feed app like `Instafeed`). On hover: dark green overlay with a camera icon and "View on Instagram."
- Below: "Follow for Daily Fabric Inspiration →" link in gold

***

### Section 1.9 — Footer (`sections/footer.liquid`)

**Background:** `#0F2A1E` (slightly darker than primary green). **Text:** off-white/muted.

**4-column layout:**

**Col 1 — Brand:**

- Logo (white/gold version, max-width 160px)
- Tagline: *"A Legacy of Luxury Since 1938."* in `--font-display` italic, 16px
- GST: `07AJDPJ0004B1Z8`
- IEC: `AJDPJ0004B`
- Address: `91/117, Jainmati Gali, Subhash Road, Gandhi Nagar, Delhi`
- Social icons: Instagram, WhatsApp (Lucide)

**Col 2 — Shop:**
Links: All Fabrics · Dyeable Fabrics · Brocade \& Jacquard · Embroidery · Plain \& Velvet · Home Furnishings · Lajawaab Collection

**Col 3 — Business:**
Links: Wholesale Inquiry · Custom Printing · Bridal Edit · About Us · Blog (Coming Soon) · Contact

**Col 4 — Contact:**

- WhatsApp: `+91 96252 42165`
- WhatsApp: `+91 98114 99301`
- Email: (pull from Shopify settings)
- Hours: Tue–Sun, 11:30 AM – 7:30 PM
- WhatsApp CTA button (outline, gold): "Chat on WhatsApp"

**Bottom bar:** `border-top: 1px solid rgba(255,255,255,0.1)`. Left: "© 2026 Amber Silk Mills. All rights reserved." Right: "Made with ❤️ in Gandhi Nagar, Delhi."

***

## PAGE 2: WHOLESALE / B2B PAGE (`templates/page.wholesale.liquid`)

- **Hero:** Dark green background. H1: **"Partner With India's Trusted Fabric Source."** Sub: *"From boutique designers to export houses — we supply at the scale and quality you need."* Two CTAs: "Download B2B Catalog (PDF)" and "WhatsApp Us Directly."
- **Why Partner With Us:** 4-column icon grid with: Heritage \& Reliability · Custom Manufacturing · Competitive Wholesale Pricing · International Shipping \& GST Compliance
- **Inquiry Form:** Clean, prominent. Fields: Name · Business Name · Business Type (dropdown: Garment Manufacturer / Boutique Owner / Fashion Designer / Export House / Interior Designer / Other) · WhatsApp Number · Email · Fabric Categories Interested In (checkboxes) · Approximate Monthly Requirement (meters) · Message. Submit button: "Send Wholesale Inquiry." On submit: show a thank-you message and trigger a WhatsApp pre-filled message to `+919625242165`.
- **Pricing Transparency Section:** Visible MOQ tiers (e.g., 5m sample, 50m small bulk, 200m+ large bulk) with general pricing brackets — forces no ambiguity.
- **Testimonials:** Same 3 review cards from homepage.

***

## PAGE 3: CUSTOM PRINTING PAGE (`templates/page.custom-printing.liquid`)

- **Hero:** H1: **"Your Vision, Our Print."** Split layout with a video/GIF of a digital printing machine.
- **How It Works:** 4-step horizontal process flow with numbered steps and icons:

1. Share Your Design / Colour Reference
2. We Sample on Your Chosen Base Fabric
3. Approve the Sample
4. Full Production Run
- **Capabilities Grid:** Cards for: Digital Print · Foil Print · Bandhani Print · Ombré Dyeing · Custom Zari Integration · Colour Matching
- **CTA:** "Request a Custom Quote" form — Name, WhatsApp, Fabric Type, Quantity, Upload Design File (Shopify file upload field).

***

## PAGE 4: BRIDAL EDIT PAGE (`templates/page.bridal-edit.liquid`)

- **Hero:** Cinematic, full-bleed image of a heavily embroidered bridal fabric. H1: **"For the Couture that Defines the Day."** Sub: *"Banarasi Jacquard, Zari Embroidery, and Mukesh Work — curated for bridal designers and wedding couture labels."*
- **Collection Grid:** Pulls from Shopify collection `bridal-edit` — product cards with fabric name, technique, price/meter.
- **Technique Showcase:** Horizontal scrollable strip — 5 close-up technique cards: Banarasi Jacquard · Lucknawi Threadwork · Kasab Zari · Mukesh Work · Velvet Flocking. Each card: image, technique name, 2-line description, "View Fabrics →" link.
- **Bridal Inquiry CTA:** *"Building a bridal line? Let's talk."* — WhatsApp CTA button.

***

## PAGE 5: ABOUT US PAGE (`templates/page.about.liquid`)

- **Hero:** Full-width sepia-toned or warm-toned image of Gandhi Nagar market or the store. H1: **"A Legacy of Luxury Since 1938."**
- **The Story Section:** Timeline layout (alternating left-right on desktop, vertical on mobile):
    - 1938 — Founded in Gandhi Nagar, Delhi
    - [Second generation milestone]
    - Present — 3rd Generation, led by Mr. Arpan Amar Jain. 5,000+ designs, global exports.
- **Owner Spotlight:** A photo of Mr. Arpan Amar Jain (or placeholder) with a quote card in `--font-display` italic: *"Every fabric we produce carries 87 years of craft, commitment, and care."*
- **By the Numbers:** Horizontal stat strip — `87 Years` · `5,000+ Designs` · `250+ B2B Clients` · `2 Production Hubs` · `15+ Countries Served`
- **Location Map:** Embedded Google Maps iframe showing Gandhi Nagar store. Address and business hours alongside.

***

## PAGE 6: CONTACT PAGE (`templates/page.contact.liquid`)

- Split layout: left = contact form (Name, Email, WhatsApp, Subject dropdown, Message). Right = contact details card (dark green background, gold text, WhatsApp numbers, address, hours, embedded map).
- Below form: 3 quick-contact cards — WhatsApp (primary), Email, Visit Us — each with a Lucide icon, label, and CTA.

***

## PRODUCT PAGE (`templates/product.liquid`)

- **Layout:** 60% left (image gallery), 40% right (product info).
- Image gallery: main large image + horizontal thumbnail strip below. Zoom on hover (CSS `transform: scale(2)` on image within a `overflow: hidden` container, follow cursor with JS).
- Right panel: breadcrumb → Category label → Product title (`--font-display`, large) → Price (per meter) → Short description → **Fabric Specs table** (Material, Width, GSM, Technique, Care Instructions, MOQ) → Quantity selector → "Add to Cart" (gold) + "Request Bulk Quote" (outline, links to `/pages/wholesale`) → Shipping info accordion.
- Below fold: Related Products strip (pulls from same collection).
- **No reviews section** — replace with a B2B trust callout: *"Ordering 50m+? Contact us for bulk pricing."* with WhatsApp CTA.

***

## COLLECTION PAGE (`templates/collection.liquid`)

- Left sidebar (desktop) / top filter drawer (mobile): filters by Fabric Type, Technique, Color, Price Range, Use Case (Bridal / Ethnic / Western / Home). Use Shopify native tag filtering.
- Products in a 4-column grid (desktop), 2-column (mobile). Cards: product image, fabric type label, name, price/meter, quick-add button.
- Sticky "Need help finding the right fabric?" bar at bottom of screen: "Chat with our fabric experts →" WhatsApp button.

***

## EXIT-INTENT POPUP (`snippets/exit-intent-popup.liquid` + JS)

**Trigger:** User's cursor moves above the viewport boundary (exit intent). Fire once per session (localStorage flag). Do NOT fire on mobile (scroll-based trigger there: fire when user scrolls back up 30% after reaching 70% of page).

**Design:**

- Modal overlay: `background: rgba(0,0,0,0.72)`, `backdrop-filter: blur(4px)`
- Modal card: `background: var(--color-primary-green)`, `border: 1px solid var(--color-primary-gold)`, `border-radius: 8px`, `padding: 48px`, max-width 480px, centered
- Gold icon: `download` (Lucide, 32px)
- H3: **"Need Bulk Pricing?"** in `--font-display`, gold, 28px
- Sub: *"Download our complete B2B Catalog with MOQ details, pricing tiers, and fabric specifications. Our sales team will follow up within 24 hours."* `--font-body`, off-white, 15px
- Input: Email address field (clean, white border-bottom only style)
- CTA Button: gold, full-width, "Download B2B Catalog →"
- Below CTA: small text in muted off-white: *"No spam. Just fabric."*
- Close X in top-right corner (off-white)

**Do NOT show:** The current 10% discount popup. Remove it entirely. This popup replaces it.

**On submit:**

1. Add email to Shopify customer list / trigger a Shopify Flow or Klaviyo automation
2. Trigger download of a PDF file (store in Shopify Files, use a direct URL)
3. Show confirmation message: *"Check your email — your B2B Catalog is on its way."*

***

## GLOBAL FLOATING ELEMENTS

### Sticky WhatsApp Button

- Fixed position: `bottom: 24px`, `right: 24px`
- Round button, 56px diameter, `background: #25D366` (WhatsApp green), white WhatsApp icon (Lucide `message-circle` or custom SVG)
- On hover: scale(1.1) + tooltip label slides out: "Chat on WhatsApp"
- `z-index: 9999`
- Links to: `https://wa.me/919625242165?text=Hi%20Amber%20Silk%20Mills%2C%20I%27m%20interested%20in%20your%20fabrics.`


### Back-to-Top Button

- Appears after 400px scroll. Same bottom-right area, above WhatsApp button. Dark green circle, gold arrow icon. Smooth scroll to top.

***

## PERFORMANCE \& TECHNICAL REQUIREMENTS

- **Lazy load** all images below the fold using `loading="lazy"` attribute
- **Critical CSS** inlined in `<head>` for above-the-fold content (hero section styles)
- All section schemas must have `presets` defined so merchants can add/remove sections from the Shopify Theme Editor
- Use Shopify's `{% render %}` tag for all snippets (not `{% include %}`)

```
- Implement `preconnect` for Google Fonts in `<head>`: `<link rel="preconnect" href="https://fonts.googleapis.com">`
```

- All forms must have CSRF protection via Shopify's native form tag: `{% form 'contact' %}`
- Schema markup (`application/ld+json`): add `Organization` schema on homepage, `Product` schema on product pages
- Mobile-first CSS — write base styles for mobile, use `@media (min-width: 768px)` and `@media (min-width: 1024px)` for tablet/desktop overrides
- Cart AJAX: all "Add to Cart" actions use the Shopify AJAX API (`/cart/add.js`) — no page refresh
- Page speed target: Lighthouse score 85+ on mobile

***

## FILE STRUCTURE TO GENERATE

```
/layout
  theme.liquid
/templates
  index.json
  page.wholesale.liquid
  page.custom-printing.liquid
  page.bridal-edit.liquid
  page.about.liquid
  page.contact.liquid
  product.liquid
  collection.liquid
/sections
  announcement-bar.liquid
  header.liquid
  hero.liquid
  trust-bar.liquid
  category-grid.liquid
  manufacturing-moat.liquid
  testimonials.liquid
  collection-spotlight.liquid
  swatch-cta.liquid
  instagram-strip.liquid
  footer.liquid
  exit-intent-popup.liquid
/snippets
  product-card.liquid
  review-card.liquid
  icon.liquid
/assets
  theme.css
  theme.js
  exit-intent.js
```


***

That's the complete build prompt. A few honest final notes before you hand this off:

**What will make or break this build:**

1. **Photography is everything.** No amount of great code fixes bad fabric photos. Shoot close-up macro texture shots for each category card — a phone with good lighting will work if styled well.
2. **The B2B Catalog PDF** for the exit-intent popup needs to actually exist before launch. A 4–5 page designed PDF with MOQ tiers, pricing brackets, and key fabric categories.
3. **The Swatch Box** (₹499) needs to be a real Shopify product with a product page before any paid traffic is sent to the site — it's your single most important D2C conversion tool.[^1]
<span style="display:none">[^2]</span>

<div align="center">⁂</div>

[^1]: amber_silk_mills_analysis.pdf

[^2]: image.jpg

