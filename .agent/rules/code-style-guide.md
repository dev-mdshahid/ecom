---
trigger: always_on
---

## 1. Project Context & Scope
*   **Application:** Production-grade Next.js E-commerce for Baby Products.
*   **Niche:** Authentic, safe baby essentials (Hair Trimmer, Nose Sucker, Nail Grinder).
*   **Design Vibe:** Trustworthy, soft, safe, clean.
*   **Key Pages:** Landing, Product Detail, Cart, Checkout, Admin Dashboard, Contact, About, Policies.
*   **User Roles:** Customer (Public), Admin (Protected).

## 2. Tech Stack & Core Libraries
*   **Framework:** Next.js 16 (App Router) with React 19 and HonoJS.
*   **Styling:** Tailwind CSS v4.0 + Shadcn/UI.
*   **Language:** TypeScript (Strict).
*   **Database:** PostgreSQL + Drizzle ORM.
*   **Forms:** React Hook Form + Zod Validation.
*   **State:** Zustand (Client Global), TanStack Query (Admin Data), Server Actions (Mutations).

## 3. Architectural Pattern: Feature-Based + Vertical Slice
Do not group files by type. Group by **Business Feature**.

### Directory Structure
```text
src/
  app/                  # Next.js App Router (Pages & Layouts only)
  components/
    shared/             # Truly global shared UI (Buttons, Inputs)
    layout/             # Header, Footer
  features/             # FUNCTIONAL LOGIC LIVES HERE
    cart/
      components/       # Components specific to Cart
      hooks/            # Hooks specific to Cart
      cart.actions.ts   # Server Actions for Cart
      cart.types.ts     # Types specific to Cart
    products/
    admin-orders/
  lib/                  # Singleton utilities (db, stripe, utils)
  types/                # Global/Generic types only
```

## 4. Coding Standards & Conventions (STRICT)

### File Naming & Exports
*   **Files:** Use `kebab-case` for all filenames (e.g., `product-card.tsx`, `use-cart.ts`).
*   **Folders:** Use `kebab-case` (e.g., `admin-orders`, `product-details`).
*   **Exports:**
    *   **Pages/Layouts:** `export default`.
    *   **Components/Hooks/Utils:** `export` (Named Export) ONLY.
    *   **Importing:** `import { ProductCard } from '@/features/products/components/product_card'`

### TypeScript Conventions
*   **Type Naming:** Prefix all types/interfaces with `T` (e.g., `TProduct`, `TCartItem`).
*   **Props:** `type TComponentNameProps = { ... }`.
*   **Strictness:** No `any`. No `ts-ignore`.

### Component Design (SRP)
*   **Single Responsibility:** A component should do ONE thing. If > 150 lines, break it down.
*   **Server vs Client:**
    *   Default to **Server Components**.
    *   Use `'use client'` only when interactivity is required.
*   **Shadcn:** Use Shadcn UI components for all base elements.

### Styling (Tailwind v4)
*   **Variables:** ALWAYS use CSS variables defined in `globals.css`.
    *   ✅ `bg-[var(--primary)]` or `text-[var(--primary)]`.
    *   ❌ `bg-[#6667aa]`.
*   **Spacing:** Use Tailwind spacing scale.

### Forms
*   Use **React Hook Form** for form state.
*   Use **Zod** for schema validation.
*   Define schemas in the feature folder (e.g., `src/features/contact/schemas.ts`).

## 5. Design System & Color Palette
**INSTRUCTION TO COPILOT:** Implement the following CSS variables in `src/app/globals.css`. The design uses a soft "Baby Shop" palette. Use the cream color for the background to avoid harsh white, but keep cards white for product clarity.

```css
@theme {
  /* Base Colors */
  --background: #fcf7f0;     /* Cream - Main App Background */
  --foreground: #333333;     /* Dark Gray - Main Text (Softer than black) */
  
  --card: #ffffff;           /* White - Product Cards/Containers */
  --card-foreground: #333333;
  
  --popover: #ffffff;
  --popover-foreground: #333333;

  /* Brand Colors */
  --primary: #6667aa;        /* Purple - Main Buttons/Links */
  --primary-foreground: #ffffff;

  --secondary: #edd1e1;      /* Pink - Accents/Badges/Soft Buttons */
  --secondary-foreground: #4a4b8a; /* Darker purple for text on pink */

  --muted: #efebe5;          /* Slightly darker cream for borders/inputs */
  --muted-foreground: #777777;

  --accent: #edd1e1;         /* Pink accent */
  --accent-foreground: #4a4b8a;

  --destructive: #ef4444;
  --destructive-foreground: #ffffff;

  --border: #eaddd5;
  --input: #eaddd5;
  --ring: #6667aa;

  --radius: 0.5rem;
}

/* Application Base Styles */
body {
  background-color: var(--background);
  color: var(--foreground);
}
```

## 6. SEO & Performance Rules
1.  **Metadata:** Every `page.tsx` must export `generateMetadata`.
2.  **Images:** ALWAYS use `next/image`. Use `priority` for LCP images.
3.  **Next.js 16 Specifics:**
    *   In dynamic pages, access params via await: `const { slug } = await params;`
    *   Use `React.cache` for data fetching functions.

## 7. Production Architecture: The "Safe Mutation" Pattern
When building forms/actions, follow this pattern:

1.  **Schema:** Define Zod schema in `schemas.ts`.
2.  **Server Action:**
    *   Validate input with Zod.
    *   Perform DB operation (drizzle).
    *   `revalidatePath`.
    *   Return `{ success: boolean, message: string, data?: T }`.
3.  **Client Component:**
    *   Use `useActionState` (React 19) to handle pending states.