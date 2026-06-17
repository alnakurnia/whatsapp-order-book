
# WhatsApp Order Book Landing Page

Single-page TanStack Start landing page for DigiOps.id's WhatsApp Order Book product, in Bahasa Indonesia, optimized for UMKM owners.

## Design System (src/styles.css)

- White background, black typography, large whitespace
- Accent: WhatsApp Green `#25D366` (+ darker hover `#1FB855`, soft tint `#E8F9EF`)
- Fonts: Poppins (headings), Inter (body), Nunito (accents) — loaded via `<link>` in `__root.tsx`
- Rounded-2xl cards, soft shadows, subtle border `#F0F0F0`
- Define semantic tokens: `--brand`, `--brand-foreground`, `--brand-soft`, `--ink`, `--muted-ink`, `--surface`, `--surface-alt`

## Route Structure

- `src/routes/__root.tsx` — add font `<link>` tags, base meta
- `src/routes/index.tsx` — entire landing page with SEO head (title, description, og tags, JSON-LD SoftwareApplication)
- Componentize sections under `src/components/landing/` (Navbar, Hero, Problems, WhyUs, Features, HowItWorks, AppGallery, Benefits, Audience, CaseStudies, Testimonials, Pricing, FAQ, FinalCTA, Footer, FloatingWhatsApp)

## Sections (per spec)

1. **Navbar** — sticky white, DigiOps.id logo, anchor links (Home/Fitur/Cara Kerja/Harga/FAQ), green "Mulai Gratis" CTA, mobile hamburger
2. **Hero** — 2 cols, label/headline/sub/5 check benefits/2 CTAs/trust badge + illustration
3. **Problems** — 6 cards with icons (lucide-react)
4. **Why Choose** — 4 benefit cards + happy owner illustration
5. **Features** — 4 alternating rows with mock UI visuals (Quick Capture, Status Board kanban, Daily Summary, Customer DB)
6. **How It Works** — 4-step horizontal timeline (vertical on mobile)
7. **App Gallery** — 5 branded SaaS screen mockups in laptop/mobile frames
8. **Benefits Metrics** — 4 metric cards (90%, 80%, 2x, "lebih baik")
9. **Cocok Untuk** — 6 industry cards
10. **Case Studies** — 3 before/after comparison cards
11. **Testimonials** — added per conversion notes, 3 cards with avatar/quote/business
12. **Pricing** — 3 tiers (Free/Starter Rp49k/Pro Rp99k) with "Paling Populer" badge
13. **FAQ** — shadcn Accordion, 6 items
14. **Final CTA** — green background, white text, 2 CTAs + illustration
15. **Footer** — 4 cols + copyright
16. **Floating WhatsApp button** (bottom-right, fixed)

## Illustrations & Imagery

Generate ~10 images via imagegen (fast tier, SVG-style flat illustrations + realistic dashboard mockups). Saved to `src/assets/` and externalized via lovable-assets where reusable. Key images:
- Hero: UMKM owner overwhelmed with WhatsApp chats
- Problems: messy WhatsApp screen
- Why: happy owner with dashboard
- Feature mockups: built primarily as real HTML/CSS UI (chat→order, kanban, summary, customer list) for crispness; supporting illustrations generated
- Audience: 6 small industry illustrations (or stylized icon cards)
- Case studies: before/after illustrations
- Final CTA: calm productive owner

## Conversion & UX

- Smooth scroll anchors
- Tailwind `animate-fade-in` / `hover-scale` on cards
- Scroll reveal via simple IntersectionObserver hook (`src/hooks/use-reveal.ts`)
- Mobile-first responsive (grid → stack)
- All CTAs link to `#pricing` or `https://wa.me/...` placeholder

## SEO

- `<title>`: "WhatsApp Order Book — Kelola Order WhatsApp Tanpa Berantakan | DigiOps.id"
- meta description (~150 chars, Indonesian)
- og:title/description/type=website, twitter:card=summary_large_image
- Canonical `/`, lang="id" on root html
- JSON-LD SoftwareApplication
- Single H1 (hero), semantic section/h2/h3
- Alt text on every image

## Dependencies

All needed pieces (lucide-react, shadcn Accordion/Button/Card) already in project. No new packages.

## Out of Scope

- No backend / auth / forms submission (CTAs are anchor or wa.me links)
- No i18n switcher (Indonesian only)
- No real payment integration
