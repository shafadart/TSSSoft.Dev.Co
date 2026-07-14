---
name: T.S.S. Soft Identity
colors:
  surface: '#11131b'
  surface-dim: '#11131b'
  surface-bright: '#373942'
  surface-container-lowest: '#0c0e16'
  surface-container-low: '#191b23'
  surface-container: '#1d1f27'
  surface-container-high: '#282a32'
  surface-container-highest: '#32343d'
  on-surface: '#e1e2ed'
  on-surface-variant: '#c3c6d7'
  inverse-surface: '#e1e2ed'
  inverse-on-surface: '#2e3039'
  outline: '#8d90a0'
  outline-variant: '#434655'
  surface-tint: '#b4c5ff'
  primary: '#b4c5ff'
  on-primary: '#002a78'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#0053db'
  secondary: '#b4c5ff'
  on-secondary: '#182d63'
  secondary-container: '#33467e'
  on-secondary-container: '#a4b6f5'
  tertiary: '#ffb596'
  on-tertiary: '#581e00'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#dbe1ff'
  secondary-fixed-dim: '#b4c5ff'
  on-secondary-fixed: '#00174b'
  on-secondary-fixed-variant: '#31447b'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#11131b'
  on-background: '#e1e2ed'
  surface-variant: '#32343d'
typography:
  display-xl:
    fontFamily: Hanken Grotesk
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.04em
  display-xl-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 44px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Hanken Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Hanken Grotesk
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.7'
    letterSpacing: 0em
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: 0em
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1'
    letterSpacing: 0.1em
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  section-gap: 8rem
  container-padding: 2rem
  gutter: 1.5rem
  bento-gap: 1rem
---

## Brand & Style
The brand personality is authoritative yet ethereal, blending the structural reliability of enterprise software with the forward-thinking agility of a boutique agency. This design system utilizes a **High-End Minimalist** style infused with **Glassmorphism** to create a sense of depth and technical sophistication.

The target audience consists of C-level executives and technical founders who value precision, clarity, and "breathing room." The UI should evoke an emotional response of calm confidence—reducing cognitive load through extreme whitespace and a focused color story. Visual interest is generated through subtle light refraction and layered transparency rather than decorative ornamentation.

## Colors
The palette is rooted in a deep, nocturnal foundation to establish a "premium dark mode" aesthetic. 

- **Primary (Vibrant Blue):** Reserved exclusively for high-priority calls to action and critical highlights. 
- **Background (Slate 950):** A deep, near-black navy that serves as the canvas for glass effects.
- **Typography:** Headings utilize pure white for maximum contrast, while body copy uses Slate 400 to reduce eye strain and establish a clear visual hierarchy.
- **Glass Overlays:** Surfaces use variable opacities of white (5% to 10%) combined with backdrop blurs to create the signature glassmorphic look.

## Typography
This design system employs a tiered typography strategy to balance impact with utility. 

- **Headlines:** Hanken Grotesk is used for its sharp, contemporary geometry. It is set with tight tracking (letter-spacing) to create a "dense" and authoritative feel for large displays.
- **Body:** Inter provides high legibility for long-form technical descriptions, ensuring a neutral and professional tone.
- **Technical Accents:** Geist is used for labels, navigation items, and monospaced data points to reinforce the "software agency" identity.

## Layout & Spacing
The layout philosophy is defined by **Macro-Spacing**. Major content blocks are separated by significant vertical gaps (128px / 8rem) to force focus on one narrative point at a time.

- **The Bento Grid:** Services and portfolio items are organized in a modular Bento-style layout. This uses a fixed-aspect-ratio grid where items can span different column and row counts, creating a modern, dashboard-like aesthetic.
- **Grid System:** A 12-column fluid grid is used for standard content, transitioning to a single column on mobile. 
- **Safe Zones:** Generous horizontal margins ensure that content never feels cramped against the edges of the viewport.

## Elevation & Depth
Depth is not communicated through traditional drop shadows but through **optical transparency and light occlusion**.

1.  **Backdrop Blur:** All elevated surfaces must use a minimum of `12px` (md) backdrop blur to pull the element away from the background.
2.  **Edge Treatment:** Instead of shadows, use a 1px solid border at `white/10`. This creates a "micro-highlight" on the edge of the glass, simulating physical light hitting a pane.
3.  **Z-Axis Hierarchy:**
    - *Level 0:* Background (Slate 950).
    - *Level 1:* Content Cards (10% opacity white fill).
    - *Level 2:* Overlays/Modals (15% opacity white fill + 24px blur).

## Shapes
The shape language is ultra-smooth. By utilizing high corner radii, we soften the technical "edge" of the enterprise software niche.

- **Primary Containers:** Large cards (such as those in the Bento grid) use `rounded-3xl` (1.5rem to 2rem) to create a friendly, premium feel.
- **Interactive Elements:** Buttons and tags use a full pill-shape (`rounded-full`) to clearly distinguish them from layout containers.
- **Inputs:** Standardize on `rounded-xl` for form fields to maintain consistency with the card language.

## Components
- **Buttons:** Primary buttons are `rounded-full` with a solid Vibrant Blue fill. Text should be white and semibold. Ghost buttons use the `white/10` border and a backdrop blur with no background fill.
- **Bento Cards:** Cards must have a `white/10` border. Content inside should have ample internal padding (minimum 32px). Backgrounds should be `white/5` with `backdrop-blur-md`.
- **Inputs:** Fields are dark-themed with a `white/5` fill. On focus, the border color transitions to Vibrant Blue.
- **Chips/Labels:** Used for service categories. These are small, `rounded-full` elements with a light `white/10` background and uppercase `label-caps` typography.
- **Navigation:** The header should be a floating glass dock, centered at the top of the page with a `rounded-full` shape and significant backdrop blur.