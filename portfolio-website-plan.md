# Comprehensive Plan: Robust & Secure Portfolio Website

## 1. Objective
Build a professional, performant, and secure personal portfolio website that adheres to industry standards. The site will showcase projects, skills, and potentially a blog, utilizing a modern React-based stack optimized for SEO and developer experience.

## 2. Technical Stack
Based on the selected preferences, the foundational stack will be:
*   **Framework:** Next.js (React) utilizing the App Router for optimal server-side rendering (SSR), static site generation (SSG), and seamless client-side hydration.
*   **Language:** TypeScript for type safety, reducing runtime errors, and improving code maintainability.
*   **Styling:** Tailwind CSS for rapid, utility-first styling that enforces consistency and minimizes shipped CSS payload.
*   **Content Management:** Local Markdown/MDX files. MDX allows embedding interactive React components directly within Markdown content.
*   **Deployment (Recommended):** Vercel or Netlify for zero-configuration deployments, edge caching, and automated CI/CD pipelines.

## 3. Architecture & Content Management
*   **Contentlayer / next-mdx-remote:** Utilize a library like Contentlayer or `next-mdx-remote` to parse and validate local `.md` or `.mdx` files. This ensures content is strictly typed and easily queried within Next.js components.
*   **Directory Structure:**
    *   `src/app/`: Next.js App Router pages and layouts.
    *   `src/components/`: Reusable UI components (Buttons, Cards, Navigation).
    *   `src/content/`: Dedicated folder for MDX files (e.g., `projects/`, `blog/`).
    *   `src/lib/`: Utility functions, formatting tools, and API wrappers.
    *   `public/`: Static assets like images and fonts.

## 4. Design Requirements & Best Practices
*   **Responsive Design:** Mobile-first approach using Tailwind's responsive prefixes (sm, md, lg, xl) to ensure the layout adapts flawlessly to all screen sizes.
*   **Accessibility (a11y):**
    *   Strict adherence to WCAG 2.1 AA guidelines.
    *   Semantic HTML (using `<nav>`, `<main>`, `<article>`, `<section>`).
    *   Appropriate ARIA labels and roles where native HTML falls short.
    *   Ensuring adequate color contrast ratios and focus states for keyboard navigation.
*   **Dark Mode Support:** Implement a system-preference-aware dark mode toggle using `next-themes` and Tailwind's `dark:` modifier.
*   **Typography:** Utilize a clean, readable font stack (e.g., Inter, Roboto, or system fonts) via `next/font` for optimized loading without layout shift (CLS).

## 5. Industry Standards
*   **SEO Optimization:**
    *   Dynamic meta tags, titles, and descriptions using Next.js Metadata API.
    *   Proper structured data (JSON-LD) for articles and the author profile.
    *   Canonical URLs to prevent duplicate content issues.
    *   Automated `sitemap.xml` and `robots.txt` generation.
*   **Code Quality & Linting:**
    *   ESLint configured with strictly opinionated rules (e.g., `eslint-config-next`, Airbnb, or Standard).
    *   Prettier for consistent code formatting.
    *   Husky and lint-staged to enforce quality checks before commits.

## 6. Security Practices
*   **Content Security Policy (CSP):** Implement strict CSP headers via `next.config.js` to mitigate Cross-Site Scripting (XSS) and data injection attacks.
*   **Sanitization:** When rendering Markdown/MDX, ensure the parser correctly escapes HTML or strips dangerous tags to prevent XSS.
*   **Dependency Management:** Regularly audit dependencies using `npm audit` or Dependabot to patch known vulnerabilities.
*   **Secure Headers:** Enforce HTTP Strict Transport Security (HSTS), X-Content-Type-Options, X-Frame-Options, and Referrer-Policy headers.
*   **Input Validation:** If implementing a contact form (via an API route or external service like Formspree/Resend), strictly validate and sanitize input on the server side using a library like Zod.

## 7. Robustness & Performance
*   **Core Web Vitals:** Optimize for Largest Contentful Paint (LCP), First Input Delay (FID)/Interaction to Next Paint (INP), and Cumulative Layout Shift (CLS).
*   **Image Optimization:** Utilize the `next/image` component for automatic image resizing, WebP/AVIF format conversion, and lazy loading.
*   **Error Handling:** Implement robust error boundaries (`error.tsx`) and custom 404 pages (`not-found.tsx`) to handle failures gracefully without crashing the app.
*   **Static Generation (SSG):** Pre-render pages at build time whenever possible to serve content instantaneously from a CDN.

## 8. Implementation Steps
1.  **Initialize Project:** Create the Next.js app with TypeScript and Tailwind CSS.
2.  **Setup Tooling:** Configure ESLint, Prettier, and Husky.
3.  **Foundation & Layout:** Build the global layout (Header, Navigation, Footer, Theme toggle).
4.  **Content System:** Integrate the MDX parsing system and create sample content files.
5.  **Page Development:** Develop the Home, About, Projects, and (optional) Blog pages.
6.  **Component Refinement:** Build reusable UI elements and integrate animations (e.g., using Framer Motion for subtle transitions).
7.  **SEO & Metadata:** Add global and page-specific SEO metadata.
8.  **Security & Performance Audit:** Configure headers, analyze Core Web Vitals using Lighthouse, and address any warnings.
9.  **Deployment:** Deploy to Vercel/Netlify and configure the custom domain.