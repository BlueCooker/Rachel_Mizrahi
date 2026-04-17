# Website Template - Service Business Landing Page

> Use this template to plan and build a landing page for any service-based business.
> Fill in each section below, then hand it to your developer (or AI assistant) to generate the site.
> All fields are placeholders - replace them with your own values.
> Sections marked **(optional)** can be removed if not needed.

---

## 0. Scope at a Glance

The reference implementation (Shiraz Levi - Hebrew RTL cosmetics landing page) includes:

- Single-page layout (`index.html`) with Hero, Services, Brands, Gallery, Testimonials, Contact, Footer
- Two auxiliary pages: `privacy.html`, `accessibility.html`
- Floating Action Buttons (phone + WhatsApp)
- Floating Accessibility Widget (font size, contrast, link highlight, reduce motion, reset) - **legally required for Israeli businesses, see §0.1**
- Google Analytics (gtag.js)
- Deferred, idle-loaded JS for performance (no blocking scripts above the fold)
- Inline SVG icons (no icon-library CDN)

Drop any section you don't need - the CSS/JS are tolerant of missing DOM nodes.

---

## 0.1 Legal Compliance (Israel) - READ BEFORE SHIPPING

> ⚠️ **This is a liability issue, not a nice-to-have.** A site operated by an Israeli business that fails to meet these requirements exposes the owner to civil lawsuits, statutory damages (up to **₪50,000 without proof of damage** per plaintiff under the Equal Rights for Persons with Disabilities Law), Privacy Protection Authority enforcement, and reputational harm. The three items below are **mandatory** for the reference site's target audience.

### A. Accessibility - required by law

**Legal basis:**
- *Equal Rights for Persons with Disabilities Law, 5758-1998*
- *Equal Rights for Persons with Disabilities (Service Accessibility Adjustments) Regulations, 5773-2013* - service providers with a public-facing website must make it accessible.
- *Israeli Standard IS 5568*, which adopts **WCAG 2.0 Level AA** as the technical benchmark for websites.

**What the site MUST have:**
1. **Technical conformance** with WCAG 2.0 AA (keyboard nav, alt text, contrast, focus states, ARIA, etc.).
2. **An accessibility widget** (font size, contrast, link highlighting, motion reduction, reset) - see §15. In Israeli practice this widget is treated as standard and is what end-users look for as visible proof of compliance.
3. **A published accessibility statement** (`accessibility.html`) that names an accessibility coordinator, lists the standard being met, documents known limitations, and gives a feedback channel. See §17.
4. **A link to the accessibility statement** from the footer of every page.

**For this template:** §15 (Accessibility Widget) and the `accessibility.html` auxiliary page are **NOT optional** for businesses subject to Israeli law. Do not ship without them.

### B. Privacy - required by law

**Legal basis:**
- *Privacy Protection Law, 5741-1981* (as substantially amended by **Amendment No. 13 of 2024**, in force from **August 2025**, which tightens definitions, adds database-registration obligations, and grants the PPA stronger enforcement and fining powers).
- *Privacy Protection (Information Security) Regulations, 5777-2017*.

**What the site MUST have:**
1. **A privacy policy** (`privacy.html`) describing: what personal data is collected (contact form fields, analytics, cookies), purposes, legal basis, recipients/processors, retention, user rights (access / correction / deletion / objection), international transfers, cookie/tracking disclosures, and contact details for privacy requests.
2. **Consent at the point of collection** - the contact form's mandatory "I agree to the privacy policy" checkbox (linked to `privacy.html`) is there specifically to evidence this. Do not remove it.
3. **A link to the privacy policy** from the footer of every page and from any form that collects personal data.
4. **Google Analytics / cookie disclosure** inside the privacy policy if `gtag.js` (or any tracker) is included.
5. **Database registration** with the PPA if the collected data crosses the thresholds defined by the amended law - check per-client.

### C. Keep it current

**Both laws are evolving.** The Privacy Protection Amendment No. 13 changed materially in 2025; accessibility regulations have been amended multiple times. **Before each launch**:

- [ ] Confirm current conformance target (WCAG 2.0 AA is still the IS 5568 benchmark at time of writing - verify it hasn't moved to WCAG 2.1 / 2.2).
- [ ] Confirm current privacy-law requirements (post-Amendment-13 obligations, database registration thresholds, cookie rules).
- [ ] Have the `privacy.html` and `accessibility.html` content reviewed by a lawyer familiar with Israeli digital law, or at minimum against current PPA and Accessibility Commissioner guidance.
- [ ] Re-run an accessibility audit (automated + manual keyboard + screen reader) on the deployed site, not just in dev.
- [ ] Record the review date in `accessibility.html` ("Last updated: …") and in the privacy policy.

> **This template does not constitute legal advice.** Use it as a structural baseline; have the final text and implementation reviewed by counsel before launch.

---

## 1. Business Identity

| Field | Your Value |
|-------|------------|
| Business Name | `[BUSINESS_NAME]` |
| Professional Title / Subtitle | `[PROFESSIONAL_TITLE]` |
| Owner / Author Name | `[OWNER_NAME]` |
| Phone Number (display format) | `[PHONE_NUMBER]` |
| Phone Number (tel: href format) | `[PHONE_TEL_HREF]` |
| WhatsApp Number (international, digits only) | `[WHATSAPP_INTERNATIONAL]` |
| Email (optional) | `[EMAIL_ADDRESS]` |
| Instagram Handle (optional) | `[INSTAGRAM_HANDLE]` |
| Instagram URL (optional) | `[INSTAGRAM_URL]` |
| Facebook URL (optional) | `[FACEBOOK_URL]` |
| Physical Address | `[STREET_ADDRESS]` |
| Location Note (e.g. "Pearl Sadav Center") | `[LOCATION_NOTE]` |
| Service Area | `[SERVICE_AREA]` |
| Working Hours (weekdays) | `[WEEKDAY_HOURS]` |
| Working Hours (weekend / special) | `[WEEKEND_HOURS]` |
| Appointment Note (e.g. "by appointment only") | `[APPOINTMENT_NOTE]` |
| Default WhatsApp Message | `[DEFAULT_WHATSAPP_MESSAGE]` |

> Instagram/email are interchangeable in the contact card - pick whichever channels the business actually uses.

---

## 2. Language & Direction

| Field | Your Value | Notes |
|-------|------------|-------|
| Language Code | `[LANG_CODE]` | e.g. `he`, `en`, `ar`, `es` |
| Text Direction | `[TEXT_DIRECTION]` | `rtl` or `ltr` |
| Font Family (Body) | `[BODY_FONT]` | e.g. `Heebo`, `Inter` |
| Font Family (Script / Accent) | `[SCRIPT_FONT]` | e.g. `Karantina`, `Dancing Script` |
| Font Family (Elegant / Display) | `[ELEGANT_FONT]` | e.g. `Suez One`, `Playfair Display` |
| Google Fonts URL | `[GOOGLE_FONTS_URL]` | preconnect + stylesheet link |

> For LTR languages, set `dir="ltr"` in the `<html>` tag and `direction: ltr` in `html { }`. For RTL, use `rtl`.
> The reference site uses three fonts: a body font, a handwritten/script font for section titles (`.section-title-script`), and an elegant display font (`--font-elegant`) reserved for future headings.

---

## 3. Color Theme

The reference site defines a rich palette via CSS custom properties in `:root`. Change them once and the entire site updates.

### Brand / primary ramp

| Variable | Your Value | Purpose |
|----------|------------|---------|
| `--primary` | `[PRIMARY_COLOR]` | Main brand color |
| `--primary-light` | `[PRIMARY_LIGHT]` | Tints, backgrounds |
| `--primary-lighter` | `[PRIMARY_LIGHTER]` | Very light tint |
| `--primary-dark` | `[PRIMARY_DARK]` | Hover states, accents |
| `--accent` | `[ACCENT_COLOR]` | Secondary brand highlight |

### Call-to-action

| Variable | Your Value | Purpose |
|----------|------------|---------|
| `--cta` | `[CTA_COLOR]` | Primary button background |
| `--cta-hover` | `[CTA_HOVER_COLOR]` | Primary button hover |

### Neutrals & text

| Variable | Your Value | Purpose |
|----------|------------|---------|
| `--nude` | `[NUDE_COLOR]` | Warm neutral |
| `--nude-light` | `[NUDE_LIGHT_COLOR]` | Very light warm neutral |
| `--charcoal` | `[HEADING_TEXT]` | Strong text (headings) |
| `--text` | `[BODY_TEXT]` | Body text |
| `--text-light` | `[MUTED_TEXT]` | Muted / secondary text |
| `--gray-50` | `[BG_LIGHTEST]` | Lightest background |
| `--gray-100` | `[BG_SECTION]` | Section backgrounds |
| `--white` | `[CARD_BG]` | Card backgrounds |

### Shape & motion

| Variable | Your Value | Purpose |
|----------|------------|---------|
| `--shadow-sm` / `--shadow-md` / `--shadow-lg` | `[SHADOWS]` | Layered depth |
| `--radius` / `--radius-sm` / `--radius-lg` | `[RADII]` | Corner rounding |
| `--transition` | `[TRANSITION]` | Default easing (e.g. `0.3s ease`) |

---

## 4. Images & Assets

| Asset | Path / Filename | Specs |
|-------|-----------------|-------|
| Logo (header + footer) | `[LOGO_PATH]` | Square or circular crop, served as `.webp` with `.jpg`/`.png` fallback |
| Favicon | `[FAVICON_PATH]` | Usually same file as logo |
| Hero Portrait (front) | `[HERO_PORTRAIT_PATH]` | Main hero image - preloaded with `rel="preload"` and `fetchpriority="high"` |
| Hero Portrait (back, optional) | `[HERO_BACK_PATH]` | Shown on flip-card hover - typically the logo |
| Open Graph Image | `[OG_IMAGE_PATH]` | For social sharing |
| Gallery Images (optional) | `Images/gallery-*.webp` | Any count; populate `<div class="gallery-slide">` for each |
| Brand Logos (optional) | `Images/brand-*.webp` | One per partner/supplier shown in the Brands grid |

> **Image format:** prefer `.webp` with explicit `width` / `height` attributes (avoids layout shift) and `loading="lazy"` / `decoding="async"` for below-the-fold images. The hero portrait should use `fetchpriority="high"` and NO `loading="lazy"`.

---

## 5. SEO & Meta

| Field | Your Value |
|-------|------------|
| Page Title | `[PAGE_TITLE]` |
| Meta Description | `[META_DESCRIPTION]` |
| Meta Keywords | `[META_KEYWORDS]` |
| Open Graph Title | `[OG_TITLE]` |
| Open Graph Description | `[OG_DESCRIPTION]` |
| Open Graph Image | `[OG_IMAGE_PATH]` |
| Open Graph Type | `website` |
| Canonical URL | `[CANONICAL_URL]` |

---

## 6. Analytics (optional)

| Field | Your Value |
|-------|------------|
| Google Analytics Measurement ID | `[GA_MEASUREMENT_ID]` (e.g. `G-XXXXXXXXXX`) |

The reference site embeds `gtag.js` in the `<head>` of every page (index, privacy, accessibility). Remove the two `<script>` blocks if analytics isn't wanted.

---

## 7. Navigation Links

Desktop + mobile nav in the sticky header. Logo on one side, links on the other, hamburger menu on mobile.

| # | Label | Target |
|---|-------|--------|
| 1 | `[NAV_1_LABEL]` | `#home` |
| 2 | `[NAV_2_LABEL]` | `#services` |
| 3 | `[NAV_3_LABEL]` (optional) | `#gallery` |
| 4 | `[NAV_4_LABEL]` (optional) | `#brands` |
| 5 | `[NAV_5_LABEL]` | `#testimonials` |
| 6 | `[NAV_6_LABEL]` | `#contact` |

> The header includes a skip-link (`.skip-link`) targeting `#services` for keyboard accessibility.

---

## 8. Hero Section

Compact hero centered on the page with a portrait image (optional flip-card), heading, subtitle, and two CTA buttons.

| Field | Your Value |
|-------|------------|
| Portrait Image (front) | `[HERO_PORTRAIT_PATH]` |
| Portrait Image (back, optional - shown on hover flip) | `[HERO_BACK_PATH]` |
| Main Title | `[HERO_MAIN_TITLE]` |
| Role / Subtitle (one line) | `[HERO_ROLE]` |
| Description (1-2 sentences) | `[HERO_SUBTITLE]` |

### Hero CTA Buttons (2 buttons)

| # | Label | Action | Style |
|---|-------|--------|-------|
| 1 | `[HERO_CTA_1_LABEL]` | Scroll to `#contact` | `btn btn-primary btn-lg` |
| 2 | `[HERO_CTA_2_LABEL]` | `tel:` link (inline phone SVG + number) | `btn btn-outline btn-lg` |

> The reference site does **not** include a badge, quick-service checklist, or trust-strip stats. Those can be added if the business benefits from them (see section 8.a).

### 8.a Optional Hero Extensions

- **Badge text** (small label above the title): wrap in `<span class="hero-badge">`.
- **Feature bullets** (short list under the subtitle): use an `<ul>` with checkmark SVGs.
- **Trust strip** (stat row with 3-4 numbers): add a `<section class="trust-strip">` below the hero with `.stat-item` children (`number` + `label`).

---

## 9. Services Section

Horizontal **slider** of 5-8 cards (prev/next buttons on desktop, swipe on mobile). Each card: icon + title + short description.

### Section Header

| Field | Your Value |
|-------|------------|
| Title (script font) | `[SERVICES_SECTION_TITLE]` |
| Description (optional) | `[SERVICES_SECTION_DESCRIPTION]` |

### Service Cards

| # | Icon (inline SVG) | Title | Description |
|---|------------------|-------|-------------|
| 1 | `[ICON_SVG_1]` | `[SERVICE_1_TITLE]` | `[SERVICE_1_DESCRIPTION]` |
| 2 | `[ICON_SVG_2]` | `[SERVICE_2_TITLE]` | `[SERVICE_2_DESCRIPTION]` |
| 3 | `[ICON_SVG_3]` | `[SERVICE_3_TITLE]` | `[SERVICE_3_DESCRIPTION]` |
| 4 | `[ICON_SVG_4]` | `[SERVICE_4_TITLE]` | `[SERVICE_4_DESCRIPTION]` |
| 5 | `[ICON_SVG_5]` | `[SERVICE_5_TITLE]` | `[SERVICE_5_DESCRIPTION]` |
| 6 | `[ICON_SVG_6]` | `[SERVICE_6_TITLE]` | `[SERVICE_6_DESCRIPTION]` |
| 7 | `[ICON_SVG_7]` | `[SERVICE_7_TITLE]` | `[SERVICE_7_DESCRIPTION]` |
| 8 (optional) | `[ICON_SVG_8]` | `[SERVICE_8_TITLE]` | `[SERVICE_8_DESCRIPTION]` |

> **Icons:** the reference site uses **inline SVGs** (no external library) for zero dependencies and faster TTI. Grab shapes from [lucide.dev/icons](https://lucide.dev/icons) and paste the SVG markup directly - don't load Lucide via CDN.
> **Feature bullets per card** (3 items each) are supported by the template but **not used** in the reference site. Add `<ul class="service-features">` inside the card if you want them.

### Slider behavior

- Desktop (>1024px): 5 cards visible, prev/next buttons
- Tablet (768-1024px): 3 cards visible
- Mobile (≤768px): slider disabled, cards stack / scroll-snap

---

## 10. Brands Section (optional)

Grid of 4-6 partner/product brand logos with a short intro. Remove the whole `<section class="brands">` if irrelevant.

### Section Header

| Field | Your Value |
|-------|------------|
| Title (script font) | `[BRANDS_SECTION_TITLE]` |
| Description | `[BRANDS_SECTION_DESCRIPTION]` |

### Brand Logos

| # | Logo Path | Alt Text |
|---|-----------|----------|
| 1 | `[BRAND_1_LOGO]` | `[BRAND_1_ALT]` |
| 2 | `[BRAND_2_LOGO]` | `[BRAND_2_ALT]` |
| 3 | `[BRAND_3_LOGO]` | `[BRAND_3_ALT]` |
| 4 | `[BRAND_4_LOGO]` | `[BRAND_4_ALT]` |

### Footer Note

| Field | Your Value |
|-------|------------|
| Note under grid | `[BRANDS_NOTE]` |

---

## 11. Gallery Section (optional)

Horizontal auto-playing image carousel with lightbox on click. Pause on hover and when out of viewport.

### Section Header

| Field | Your Value |
|-------|------------|
| Title (script font) | `[GALLERY_SECTION_TITLE]` |
| Description | `[GALLERY_SECTION_DESCRIPTION]` |

### Gallery Images

Each slide: `<div class="gallery-slide"><img src="..." alt="..." width="800" height="800" loading="lazy" decoding="async"></div>`

| # | Image Path | Alt Text (meaningful, describes the result/content) |
|---|-----------|-------|
| 1 | `[GALLERY_1_PATH]` | `[GALLERY_1_ALT]` |
| 2 | `[GALLERY_2_PATH]` | `[GALLERY_2_ALT]` |
| … | … | … |

### Slider behavior

- Desktop (>768px): 3 slides visible
- Tablet (481-768px): 2 slides visible
- Mobile (≤480px): 1 slide visible
- Autoplay: 3s interval, pauses on hover or when scrolled out of view
- Lightbox: click/Enter/Space opens zoomed view, Escape closes, focus trapped

---

## 12. Testimonials Section

Carousel of testimonial cards with star ratings. Data defined in `script.js` (not HTML) - the JS builds cards and dots dynamically.

### Section Header

| Field | Your Value |
|-------|------------|
| Title (script font) | `[TESTIMONIALS_SECTION_TITLE]` |
| Description | `[TESTIMONIALS_SECTION_DESCRIPTION]` |

### Testimonials Data (array in `script.js`)

```js
const testimonials = [
    { name: "...", location: "...", rating: 5, text: "...", service: "...", date: "..." },
    // … any number of entries
];
```

| # | Name | Location | Rating (1-5) | Text | Service Type | Date |
|---|------|----------|-------------|------|-------------|------|
| 1 | `[CLIENT_1_NAME]` | `[CLIENT_1_LOCATION]` | `[CLIENT_1_RATING]` | `[CLIENT_1_TEXT]` | `[CLIENT_1_SERVICE]` | `[CLIENT_1_DATE]` |
| 2 | `[CLIENT_2_NAME]` | `[CLIENT_2_LOCATION]` | `[CLIENT_2_RATING]` | `[CLIENT_2_TEXT]` | `[CLIENT_2_SERVICE]` | `[CLIENT_2_DATE]` |
| … | … | … | … | … | … | … |

### Carousel behavior

- One card visible at a time, 100% width
- Autoplay: 6s interval, pauses on hover and when out of view
- Prev/next buttons, dots, and touch swipe (with RTL-aware direction)

---

## 13. Contact Section

Two-column layout: contact info card on one side, contact form on the other.

### Section Header

| Field | Your Value |
|-------|------------|
| Title (script font) | `[CONTACT_SECTION_TITLE]` |
| Description | `[CONTACT_SECTION_DESCRIPTION]` |

### Contact Info Card - each row: inline SVG icon + label + value(s)

| Row | Label | Value(s) | Notes |
|-----|-------|----------|-------|
| Phone | `[PHONE_LABEL]` | `[PHONE_NUMBER]` (as `tel:` link) | |
| WhatsApp | `[WHATSAPP_LABEL]` | Link to `https://wa.me/[WHATSAPP_INTERNATIONAL]` | Button label e.g. "Send a message" |
| Instagram (optional) | `[INSTAGRAM_LABEL]` | `[INSTAGRAM_URL]` | `target="_blank" rel="noopener"` |
| Email (optional) | `[EMAIL_LABEL]` | `mailto:[EMAIL_ADDRESS]` | |
| Working Hours | `[HOURS_LABEL]` | `[WEEKDAY_HOURS]` + `[WEEKEND_HOURS]` + optional note | |
| Location | `[LOCATION_LABEL]` | `[STREET_ADDRESS]` + `[LOCATION_NOTE]` | Can link to Google Maps |

### Contact Form Fields

Form submits via WhatsApp (no backend): JS builds a pre-filled message and opens `wa.me/[WHATSAPP_INTERNATIONAL]?text=...` in a new tab.

| Field | Type | Required | Placeholder |
|-------|------|----------|-------------|
| Full Name | text | Yes | `[PLACEHOLDER_NAME]` |
| Phone | tel | Yes | `[PLACEHOLDER_PHONE]` |
| Email | email | No | `[PLACEHOLDER_EMAIL]` |
| Topic | select | Yes | See options below |
| Preferred Time | select | No | See options below |
| Message | textarea | No | `[PLACEHOLDER_MESSAGE]` |
| Privacy Consent | checkbox | Yes | Links to `privacy.html` |

### Topic Options (customize per business - key used as WhatsApp tag, label shown in UI)

| # | Value (key) | Display Label |
|---|-------------|---------------|
| 1 | `[TOPIC_1_KEY]` | `[TOPIC_1_LABEL]` |
| 2 | `[TOPIC_2_KEY]` | `[TOPIC_2_LABEL]` |
| … | … | … |

### Preferred Time Options

| # | Value (key) | Display Label |
|---|-------------|---------------|
| 1 | `[TIME_1_KEY]` | `[TIME_1_LABEL]` |
| 2 | `[TIME_2_KEY]` | `[TIME_2_LABEL]` |
| … | … | … |

> Update `topicMap` and `timeMap` in `script.js` so the values get translated into the WhatsApp message body.

### Phone Validation

The default regex matches Israeli format (`/^0[0-9]{1,2}-?[0-9]{7}$/`). Update for your target country.

---

## 14. Floating Action Buttons (FABs)

Two fixed-position buttons always visible at bottom of screen (RTL: left side; LTR: right side).

| Button | Icon | Action | Class |
|--------|------|--------|-------|
| Phone Call | Inline phone SVG | `tel:[PHONE_TEL_HREF]` | `.fab .fab-phone` |
| WhatsApp | Inline chat SVG | `https://wa.me/[WHATSAPP_INTERNATIONAL]?text=[DEFAULT_WHATSAPP_MESSAGE]` | `.fab .fab-whatsapp` |

---

## 15. Accessibility Widget

> ⚠️ **Mandatory for Israeli businesses** - see §0.1.A. Technically optional for deployments outside Israel, but strongly recommended.

Floating side-panel button (position-fixed, vertically centered). Injected into `<body>` by `initAccessibilityWidget()` in `script.js`.

| Control | Effect |
|---------|--------|
| Font size (`א-` / `א+`) | Scales `html { font-size }` between 80% and 150% |
| Contrast toggle | Adds `.high-contrast` to `<body>` |
| Highlight links | Adds `.highlight-links` to `<body>` |
| Stop animations | Adds `.stop-animations` to `<body>` |
| Reset | Removes all classes and resets font size |

> Widget labels are hard-coded in the JS - translate them when localizing. The companion `accessibility.html` declaration page should reference the same controls.

---

## 16. Footer

Three-column footer at the bottom of every page.

| Element | Contents |
|---------|----------|
| Brand (left / start) | Logo + business name + tagline |
| Links (center) | Same nav links as header + social links + `accessibility.html` + `privacy.html` |
| Copyright (bottom row) | `© [YEAR] [BUSINESS_NAME] - [RIGHTS_NOTE]` |

---

## 17. Auxiliary Pages

> ⚠️ **Both pages are legally mandatory for Israeli businesses** - see §0.1. Failing to publish or maintain them exposes the owner to civil claims. Have the final text reviewed by counsel; the headings below are a structural baseline only.

Both pages reuse the site's header, footer, and CSS so they feel consistent. They use `.header.scrolled` by default (no hero behind them). Link to both from the footer of **every** page.

### `privacy.html` - Privacy Policy

Required under the Privacy Protection Law, 5741-1981 (as amended by Amendment No. 13, in force August 2025). At minimum, the page must cover:

| Section | Contents |
|---------|----------|
| Identity of the data controller | `[BUSINESS_NAME]` + registered address + contact |
| What is collected | Contact-form fields, analytics events, cookies, IP/user-agent, any CRM fields |
| Purposes & legal basis | Appointment booking, customer service, marketing (if applicable - needs separate opt-in) |
| Recipients / processors | Hosting provider, Google Analytics, WhatsApp, any CRM |
| Retention period | Per-category retention times |
| User rights | Access, correction, deletion, objection, data portability; how to exercise them |
| International transfers | Any non-Israel data flows (GA, hosting outside Israel) |
| Cookies & tracking | Categorization + opt-out instructions |
| Security measures | Summary of technical/organizational safeguards |
| Contact for privacy requests | Email / form / postal address |
| Last updated | `[PRIVACY_UPDATED_DATE]` |

### `accessibility.html` - Accessibility Statement

Required under the Equal Rights for Persons with Disabilities (Service Accessibility Adjustments) Regulations, 5773-2013. Must be published and linked from every page.

| Field | Your Value |
|-------|------------|
| Target Standard | `[A11Y_STANDARD]` (IS 5568 / WCAG 2.0 AA at time of writing - re-verify before launch) |
| Declaration of effort | Statement that reasonable effort was made to meet the standard |
| Implemented accommodations | List: keyboard nav, alt text, contrast, accessibility widget controls, skip links, ARIA, etc. |
| Known limitations | Any content that is not fully accessible + workaround |
| Accessibility Coordinator Name | `[A11Y_COORDINATOR]` |
| Coordinator Role / Contact | `[A11Y_CONTACT]` (phone + email) |
| Feedback channel | How a user reports an accessibility barrier and expected response time |
| Date of last audit | `[A11Y_UPDATED_DATE]` |

> When the site's content changes materially, update the "last audited" date and re-run the check. An out-of-date statement is itself a compliance risk.

---

## 18. Technical Stack Summary

| Component | Technology | Notes |
|-----------|-----------|-------|
| HTML | Vanilla HTML5 | `index.html` + `privacy.html` + `accessibility.html` |
| CSS | Vanilla CSS | Single `style.css`, CSS custom properties for theming |
| JavaScript | Vanilla ES6+ | Single `script.js`, no build step, idle-loaded below-the-fold |
| Icons | **Inline SVGs** | No CDN/library - shapes copied from lucide.dev |
| Fonts | Google Fonts (CDN) | preconnected + `display=swap` |
| Analytics | Google `gtag.js` (optional) | Async-loaded |
| Build Tools | None | Static files, deploy anywhere |
| Hosting | Any static host | Reference site deploys via GitHub Pages (note `CNAME` file) |

---

## 19. File Structure

```
project/
├── index.html              # Main landing page
├── privacy.html            # Privacy policy
├── accessibility.html      # Accessibility statement
├── style.css               # All styles + CSS variables
├── script.js               # All interactions (idle-loaded)
├── CNAME                   # (GitHub Pages custom domain, optional)
└── Images/
    ├── logo.webp           # Logo (plus .jpg/.png fallback)
    ├── hero-portrait.webp  # Hero image (plus fallback)
    ├── brand-*.webp        # Brand logos (optional)
    └── gallery-*.webp      # Gallery images (optional)
```

---

## 20. JS Features & What to Update

`script.js` is split into self-contained `init*()` functions. Missing DOM nodes are tolerated - each function exits early if its root element isn't found.

| Feature | Function | What to Change |
|---------|----------|----------------|
| Mobile menu | `initMobileMenu()` | None (works as-is) |
| Sticky header | `initStickyHeader()` | None (works as-is) |
| Services slider | `initServicesSlider()` | Adjust `getVisibleCount()` for your breakpoints |
| Gallery slider + lightbox | `initGallery()` | Adjust `getVisibleCount()`; translate ARIA labels |
| Testimonials carousel | `initTestimonials()` | Replace the `testimonials` array at the top of the file |
| Contact form → WhatsApp | `initContactForm()` | Update phone regex, `waNumber`, `topicMap`, `timeMap`, message template |
| Accessibility widget | `initAccessibilityWidget()` | Translate control labels |

### Performance pattern

```js
document.addEventListener("DOMContentLoaded", () => {
    // Critical, above-the-fold
    initMobileMenu();
    initStickyHeader();
    initServicesSlider();

    // Deferred - each below-the-fold init gets its own idle slot
    scheduleIdle(() => initGallery(),             1000);
    scheduleIdle(() => initTestimonials(),        1500);
    scheduleIdle(() => initContactForm(),         2000);
    scheduleIdle(() => initAccessibilityWidget(), 2500);
});
```

`scheduleIdle` uses `requestIdleCallback` with a `setTimeout` fallback - keeps Total Blocking Time low on page load.

---

## 21. Responsive Breakpoints

| Breakpoint | Hero | Services | Gallery | Layout |
|------------|------|----------|---------|--------|
| ≤480px (mobile) | Stacked | Stacked / scroll-snap | 1 slide | Mobile nav (hamburger) |
| 481-768px (tablet) | Stacked | Stacked / scroll-snap | 2 slides | Mobile nav |
| 769-1024px (small desktop) | Compact | 3-card slider | 3 slides | Desktop nav |
| >1024px (desktop) | Compact | 5-card slider | 3 slides | Desktop nav |

---

## 22. Accessibility Checklist

The reference site targets WCAG 2.0 AA and Israeli IS 5568. The CSS/JS provides:

- Semantic landmarks (`<header>`, `<main>` implicit, `<section>`, `<footer>`)
- Skip-to-content link (`.skip-link`)
- Focus-visible outlines
- `aria-label` on icon-only buttons
- `role="dialog"` + focus trap on the gallery lightbox
- `role="button"` + keyboard activation on clickable slides
- Inline SVGs marked `aria-hidden` where decorative
- All images have meaningful `alt` (or `alt=""` for decorative)
- Color-contrast-safe palette (verify after theme changes)
- Accessibility widget for font size, contrast, link highlight, motion reduction

---

## Quick Start Checklist

- [ ] Fill in all placeholder (`[PLACEHOLDER]`) fields above
- [ ] Prepare images: logo, hero portrait (+ optional back face), gallery images, brand logos
- [ ] Choose color palette and update the full CSS variable set in `:root`
- [ ] Choose fonts for your language and update Google Fonts preconnect + URL
- [ ] Set `<html lang>` and `dir` (+ matching `direction:` in CSS)
- [ ] Write service card content (title, description, inline SVG icon)
- [ ] Write brand section (or remove if unused)
- [ ] Add gallery images with descriptive alt text (or remove if unused)
- [ ] Collect testimonials and populate the `testimonials` array in `script.js`
- [ ] Update phone/WhatsApp numbers everywhere (HTML + JS: `waNumber`, FAB hrefs, contact card)
- [ ] Update contact form topic and time options (HTML) + `topicMap`/`timeMap` (JS)
- [ ] Update phone validation regex for your target country
- [ ] Update meta tags (title, description, keywords, OG image)
- [ ] (Optional) Add Google Analytics Measurement ID or remove the gtag snippet
- [ ] Fill in `privacy.html` and `accessibility.html` with business-specific content
- [ ] Translate accessibility widget control labels in `script.js`
- [ ] Test on mobile, tablet, desktop - including keyboard-only and screen reader
- [ ] Verify Total Blocking Time / Lighthouse score after deploy
- [ ] Deploy to static hosting (add `CNAME` if using GitHub Pages + custom domain)

### Pre-launch legal gate (Israeli businesses)

> Do not go live until these are signed off - see §0.1 for the liability context.

- [ ] Confirm the target accessibility standard is still current (IS 5568 / WCAG 2.0 AA at time of writing - re-verify)
- [ ] Confirm current Israeli privacy-law obligations (Privacy Protection Law + Amendment No. 13 effects, database registration threshold, cookie rules)
- [ ] Run an accessibility audit on the deployed site: automated (Lighthouse / axe) + manual keyboard + screen reader
- [ ] Verify the accessibility widget is present on **every** page and functions correctly
- [ ] Verify `accessibility.html` and `privacy.html` are linked from the footer of **every** page
- [ ] Verify the contact form shows the privacy-consent checkbox and cannot submit without it
- [ ] Record the last-audit / last-updated date inside both auxiliary pages
- [ ] Have `privacy.html` and `accessibility.html` reviewed by a lawyer familiar with Israeli digital-law compliance
- [ ] Identify and document the accessibility coordinator (name + contact) inside `accessibility.html`
- [ ] If Google Analytics or any tracker is enabled, confirm it is disclosed in the privacy policy
