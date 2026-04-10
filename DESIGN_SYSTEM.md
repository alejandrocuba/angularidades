# Angularidades Design System

This document outlines the foundational design tokens and variables for the Angularidades website. As this project transitions to an Analog app and scales, use these design tokens to maintain a consistent look-and-feel.

## 1. Brand Identity & Color Palette

The project signature is based on the five-color radial gradient (orange to deep brown) and clean white text.

### Base Colors
- **Brand Primary (Vibrant Orange):** `#ff8000`
- **Brand Secondary:** `#e06c00`
- **Brand Tertiary:** `#b65200`
- **Brand Dark:** `#5c2900`
- **Brand Deep (Near Black):** `#1a0d00`
- **Neutral White (Text & Particles):** `#ffffff`

### Proposed CSS Custom Properties
As components are added, these should be added to `src/styles.css` `:root`:

```css
:root {
  --color-brand-100: #ffaa00; /* Lighter accent if needed */
  --color-brand-200: #ff8000;
  --color-brand-300: #e06c00;
  --color-brand-400: #b65200;
  --color-brand-500: #5c2900;
  --color-brand-900: #1a0d00;
  
  --color-text-main: #ffffff;
  --color-text-muted: rgba(255, 255, 255, 0.7);
}
```

## 2. Typography

Currently, the project uses the system `sans-serif` fallback to remain lightweight.
To scale while maintaining a premium feel, tokenizing typography is recommended:

```css
:root {
  --font-family-base: system-ui, -apple-system, sans-serif;
  --font-family-heading: 'Outfit', sans-serif; /* Example from previous iterations */
  
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;
  --font-size-xl: 1.5rem;
  --font-size-2xl: 2rem;
  --font-size-4xl: 4rem;
}
```

## 3. Spacing System

A proportional spacing system based on an `8px` (`0.5rem`) root ensures layout consistency:

```css
:root {
  --spacing-1: 0.5rem;  /* 8px */
  --spacing-2: 1rem;    /* 16px */
  --spacing-3: 1.5rem;  /* 24px */
  --spacing-4: 2rem;    /* 32px */
  --spacing-6: 3rem;    /* 48px */
  --spacing-8: 4rem;    /* 64px */
}
```

## 4. Animation & Physics (Particles)

The signature particle effect relies on math-based properties. If abstracted to reusable Analog components, use these boundaries:
- **Particle Size:** `2px` to `10px` range.
- **Blur Logic:** `size / 6 px` proportional blurring to simulate depth.
- **Animation Cycle:** `8s` to `15s` floating loops with easing (`ease-in-out`).

## 5. Implementation Guidelines

1. **Vanilla CSS First:** Avoid utility classes unless requested. Scope styles using Analog component styles (`styles: []`) when component-specific, and `src/styles.css` for global tokens.
2. **Accessibility:** Ensure that text overlaying the radial gradient meets the WCAG AA contrast ratio threshold of `4.5:1`. The current white text passes successfully on the darker sections of the gradient.
