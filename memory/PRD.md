# PRD — Nagpal's House of Beauty (Salon Furniture Landing Page)

## Original Problem Statement
User provided a static HTML landing page for "Nagpal's House of Beauty", a Delhi-based salon furniture supplier (styling chairs, shampoo/wash units, workstations, trolleys, mirrors; pan-India delivery, retail + bulk). User then requested an Awwwards-level rebuild inspired by salonfurniture.in: bolder-but-sleeker typography, big furniture photography hero, Explore Now button scrolling to an all-categories section, partners logo wall, rotating category-product selector, warm brown-toned furniture gallery, bigger Instagram section, brand name in CAPS, WhatsApp-based enquiries, placeholder contact numbers for now.

## Architecture
- Frontend: React 19 + Tailwind + framer-motion (scroll reveals, masked headline, AnimatePresence) + lenis (smooth momentum scroll). Single-page site, section anchors.
- Backend: FastAPI template retained (health endpoint only; no backend features requested).
- Content: centralized in `/app/frontend/src/data/content.js` (contact info, categories, spotlights, products, partners, gallery, Instagram grid) — single edit point for the user.
- Design system: `/app/design_guidelines.json` — obsidian/deep forest green + ivory + antique brass, Syne display + Karla body.

## User Personas
- Salon owner furnishing a new salon (bulk buyer) — wants categories, specs, WhatsApp quote fast.
- Stylist upgrading one or two pieces (retail buyer).
- Interior designer sourcing furniture for a client salon.

## Core Requirements (static)
- Home/hero with big furniture imagery + Explore Now → #all-categories
- Categories, Products, About, Contact sections; products dropdown in nav
- Partners wall, rotating category selector, brown-toned gallery, large Instagram block
- All enquiries via WhatsApp deep links (wa.me with pre-filled text)
- Brand name always in CAPS

## Implemented (2026-07-08, update 5)
- Instagram section now uses official Instagram embeds (iframe /embed player) for 6 real reels from @nagpalshouseofbeauty — clipped via overflow-hidden wrapper (aspect 5/6, iframe 205% height, -56px top offset, dark cover strips top 5px / bottom 9px) so only the video player shows on both desktop and mobile; no white Instagram chrome. Site header scroll border also removed (was rendering as a light line). Reel IDs in INSTAGRAM_REELS in content.js

## Implemented (2026-07-08, update 4)
- Sticky tap-to-call button (mobile-only, stacked above WhatsApp bubble, tel:+918506808606)
- Google Maps embed in contact section pinpointing the Rohini showroom (keyless embed), with address bar + "Get directions" link, warm-toned filter to match theme

## Implemented (2026-07-08, update 3)
- Real contact details live: phone/WhatsApp +91 85068 08606, email nagpalshouseofbeauty@gmail.com, showroom 251, Pocket H-17, near Rohini West Metro Station, Sector 7, Rohini, Delhi 110085
- Category renames: Styling Chairs → Salon Chairs (id styling-chairs unchanged), Pedicure & Spa → Pedicure & Manicure Station (id pedi-spa unchanged); marquee wording updated to match
- Partners wall now 8 names: VLCC, Affinity, Head Masters, Lemon Tree, Marriot, Looks, Jawed Habib, Orane (4-col grid restored)
- Mobile optimization pass: fixed horizontal overflow (marquee track inflated document width — root overflow-x: clip), responsive brand size/wrap in header, hero headline fluid clamp sizing, phone number visible in mobile utility bar, Instagram handle min size reduced; verified at 390×844 (menu, hero, categories, contact)

## Implemented (2026-07-08, update 2)
- Hero now uses the client's own dark barbershop-floor photo (saved locally at /app/frontend/public/images/hero-salon.jpg); hero eyebrow reads "Salon furniture manufacturers · Sonipat · Pan-India"
- Trust bar strip (after marquee): 1000+ Salons Furnished · Pan-India Delivery & Installation · Custom Bulk & Made-to-Order
- Testimonials section (#clients): Siya Pant, Ashish Yadav, Soniya Gupta (Premlata quote unused, available)
- About rewritten as real story: 01 Manufactured in Sonipat (own unit in Sonipat, Haryana; 12 yrs manufacturing, 25+ yrs importing & selling), 02 Quality Over Quantity (extreme comfort), 03 Pan-India White-Glove; plus credentials grid: ISO 9001:2000, GMP Certified, Customizable Designs, Factory Pricing — Price Guarantee, Extreme Comfort

## Implemented (2026-07-08)
- Kinetic hero: full-bleed barbershop photo with scroll parallax + zoom, masked line-by-line headline reveal, Explore Now (Lenis smooth scroll to categories), floating scroll cue
- Slow editorial brass-outline marquee
- Sticky glassmorphism header: CAPS brand, products dropdown, mobile menu, Enquire Now CTA
- Partners logo wall (6 real client names: VLCC, Affinity, Head Masters, Lemon Tree, Marriot, Looks)
- Categories grid (6 categories incl. new Spa Furniture; staggered 3-col layout) — each card opens its own category page at /category/:id
- Category pages: banner with masked image reveal, product grid (5-6 products per category, 31 total, each with WhatsApp enquiry link), bulk-quote CTA band, back-to-categories
- Products dropdown in nav navigates directly to each category page; nav anchors work from any route
- Best Sellers / standalone products section REMOVED per user request (products now live inside category pages)
- Best sellers grid (6 products, WhatsApp enquiry each)
- Numbered manifesto About chapters (01 Delhi Atelier / 02 Twelve-Hour Days / 03 Pan-India White-Glove)
- Oversized Instagram section with 6-image grid + follow button
- Centered oversized brand header (NAGPAL'S HOUSE OF BEAUTY in caps, nav below)

## Removed per user request (2026-07-08)
- Rotating category-product selector ("Find the perfect piece") — component deleted
- Brown-toned gallery ("Material & finish") — component deleted
- Hero "Ask about bulk orders" link
- Standalone Best Sellers products section — replaced by per-category product pages
- Contact band with contact list + WhatsApp CTA; floating WhatsApp bubble; footer
- All imagery verified live; backwash/vanity photos validated for relevance

## Placeholder Data (needs real values from user)
- Phone / WhatsApp: +91 98765 43210 (sample) — edit `WHATSAPP_NUMBER` and `CONTACT` in content.js
- Email: hello@nagpalshouseofbeauty.in (sample)
- Partner names: VLCC, Looks Salon, Affinity, Toni & Guy India, BBlunt, Jawed Habib, Geetanjali Salon, Naturals (SAMPLE — swap for real clients)
- No testimonials section (user said they'd share real ones — not yet provided)

## Backlog
- P0: Real contact numbers, real partner/client names, real testimonials
- P1: Per-category product listing pages with real catalog + prices
- P1: Real Instagram feed embed or real post images
- P2: Enquiry form saving leads to MongoDB (in addition to WhatsApp)
- P2: Multi-language (Hindi) toggle; SEO meta/OG tags; Google Maps showroom embed

## Next Tasks
1. Collect real phone/WhatsApp/email from user and update content.js
2. Replace sample partner names with actual clients served
3. Add testimonials section once user shares reviews
