# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Hebrew RTL landing page for **Rachel Mizrahi**, a certified CBT therapist (Wingate Institute graduate) practicing in Kiryat Ben-Gurion, Holon. Single-owner marketing site, not a product.

## Stack

Vanilla HTML5 + CSS + ES6 JavaScript. **No build step, no package manager, no test framework, no linter.** Three HTML pages, one `style.css`, one `script.js`, static images. Deployable to any static host.

## Running locally

Open `index.html` directly in a browser, or serve the directory with any static server — e.g.:

```bash
python -m http.server 8000
# then open http://localhost:8000
```

There is no watch mode or HMR — refresh the browser after editing.

## Architecture

### Pages and shared chrome

Three static pages: `index.html` (landing), `privacy.html`, `accessibility.html`. **The header, footer, navigation, and `<head>` font/meta links are duplicated in each file** — there is no template engine. When you change nav links, logo, footer, or the Google Fonts URL, update all three pages.

### Theming

Every color, radius, shadow, transition, and font family is declared as a CSS custom property in `style.css` `:root` (lines ~1-33). Components reference the variables, so a single change in `:root` updates the entire site. The palette is "sage + warm clay" (`--primary: #6B8E7F`, `--accent: #C9A57B`) — intentionally not the pink of the source template.

Fonts: Heebo (body), Amatic SC (section titles, via `.section-title-script`), Frank Ruhl Libre (hero title + legal page titles, via `--font-elegant`).

### JavaScript organization

`script.js` is a set of self-contained `init*()` functions called from one `DOMContentLoaded` listener at the bottom of the file. Each `init*()` exits early if its root DOM node is missing, so pages without a given component (e.g. privacy.html has no testimonials) just silently skip.

Above-the-fold init runs synchronously; below-the-fold init is deferred via the `scheduleIdle(fn, timeout)` helper, which uses `requestIdleCallback` with a `setTimeout` fallback. This keeps Total Blocking Time low.

The testimonials array is defined at the top of `script.js` — `initTestimonials()` builds the DOM from it. To edit testimonials, edit the array, not the HTML.

### Contact form → WhatsApp

`initContactForm()` in `script.js` has no backend. On submit, it validates fields, builds a pre-filled message using `topicMap` / `timeMap` (Hebrew translations for the `<select>` values), and opens `https://wa.me/972509250117?text=...` in a new tab. Phone regex is Israeli-format: `/^0[0-9]{1,2}-?[0-9]{7}$/`.

### Accessibility widget

`initAccessibilityWidget()` injects a fixed side-panel into `<body>` at runtime (not in HTML). Controls: font-size ±, high contrast, link highlight, stop animations, reset. All labels are Hebrew, hard-coded in the JS.

**Do NOT implement "high contrast" with `filter: contrast(…)` on `<body>`.** CSS filters create a containing block for `position: fixed` descendants, which pushes the widget, FABs, and sticky header off-screen on any scrollable page. The current implementation uses explicit color overrides (black bg / white text / yellow accents) in the `body.high-contrast …` rules in `style.css` — keep it that way.

### RTL specifics

`<html lang="he" dir="rtl">` plus `direction: rtl` in CSS. The services slider uses `translateX(${offset}px)` (positive X moves visually leftward in RTL — that's "next"); the testimonials carousel uses `translateX(${index * 100}%)` and its touch-swipe handler treats positive-dx as "previous" to match RTL reading direction. Use `inset-inline-start` / `inset-inline-end` rather than `left` / `right` throughout the CSS.

## Israeli legal compliance (not optional)

Three pieces of the site exist specifically to comply with Israeli law — don't treat them as cosmetic:

- `accessibility.html` + the floating accessibility widget + footer link to the statement → *Equal Rights for Persons with Disabilities (Service Accessibility) Regulations, 5773-2013* (target: IS 5568 / WCAG 2.0 AA).
- `privacy.html` + the `#f-consent` checkbox on the contact form + footer link → *Privacy Protection Law, 5741-1981* (including Amendment No. 13, in force 2025-08).
- The contact form will not submit without the consent checkbox — that is the GDPR/Israeli-style consent record, not UX polish.

Both legal pages currently contain the literal placeholder `יעודכן בהשקה` where the "last updated" date goes; they should be replaced with a real date and the text reviewed by an Israeli digital-law lawyer before launch. `generic-website-template.md` §0.1 has the full regulatory context.

## Repo conventions (from prior user feedback)

- **One change = one branch = one PR.** Never push directly to `main`. Branch naming: `fix/<slug>`, `feat/<slug>`, `chore/<slug>`. `gh` CLI is not installed on the current machine — after `git push -u origin <branch>`, GitHub returns a "Create a pull request" URL in the push output; surface that URL to the user rather than trying to automate PR creation.

- **No em-dashes or en-dashes in copy.** Use a plain ASCII hyphen (`-`). The user finds `—` / `–` an AI tell. If you catch one, replace it.

- **Testimonials stay as initials-only placeholders** (e.g. `ת.ל., תל אביב`) with a `NOTE:` comment in `script.js` flagging them. Never invent full names or present fabricated testimonials as real — consumer-protection law and therapy-profession ethics both prohibit it. Real testimonials can only replace the placeholders after written client consent.

## Pending before production launch

These items are known-incomplete and should not be "fixed" silently — they need the real values from Rachel:

- Google Analytics Measurement ID (`gtag.js` snippet is present but commented out in `index.html` `<head>`)
- Real testimonials with written consent to replace the 5 placeholders in `script.js`
- Replace `יעודכן בהשקה` date placeholders in `privacy.html` and `accessibility.html`
- Dedicated `favicon.ico` (currently reusing `Images/Logo.jpg`)
- Legal review of `privacy.html` and `accessibility.html` text

## Reference

`generic-website-template.md` is the source template this site was built from. It's kept in-repo as a structural reference (color/field/section definitions, responsive breakpoints, legal-compliance checklist). It is not served to visitors — don't link to it from any page.
