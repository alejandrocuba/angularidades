# Agent Instructions & Project Rules

## 1. Technology Stack
- **Framework:** [Analog](https://analogjs.org/)
- **Styling:** Widely available CSS based on [Baseline](https://web.dev/baseline) (Don't use Tailwind helpers)
- **Tooling:** [Vite](https://vitejs.dev/), [Vitest](https://vitest.dev/).
- **Deployment:** [Firebase Hosting](https://firebase.google.com/docs/hosting)

## 2. Code Quality & Skills Guidelines
This repository incorporates several specific agentic skills that must be used as guidelines:
- **Angular Developer:** Apply modern Angular/Analog best practices (Reactivity, Signals, SSR, clean component structure).
- **Accessibility (a11y):** Ensure all markup adheres to WCAG 2.2 guidelines. Use semantic HTML and proper ARIA labels.
- **Web Vitals & Performance:** Optimize for LCP, INP, CLS, and fast loading. Minimize main thread blocking.
- **SEO:** Maintain basic metadata, structured data, and valid HTML for discoverability.
- **Best Practices:** Ensure high code quality, security, and compatibility.

## 3. Workflow & Editor
- Always verify existing styles and tokens in `DESIGN_SYSTEM.md` before introducing new hardcoded values to keep the design DRY and scalable.
- Maintain the original `angularidades.com` style identity (radial gradients, particles) while scaling.
- Use `pnpm` commands; **do not** use local `.npm-cache` bypasses.
- Make architectural choices considering that this might start as a landing page but is built in Analog.