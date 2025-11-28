import type { Metadata } from "next";
import { RefundPolicyHero } from "@/features/policies/components/refund-policy-hero";
import { RefundPolicyContent } from "@/features/policies/components/refund-policy-content";

export const metadata: Metadata = {
  title: "Return & Refund Policy | BabyNest - Hassle-Free Returns",
  description:
    "Learn about BabyNest's 30-day return and refund policy. We offer hassle-free returns for baby products to ensure your complete satisfaction.",
  openGraph: {
    title: "Return & Refund Policy | BabyNest",
    description: "Shop with confidence with our 30-day money-back guarantee on all baby care products.",
  },
};

export default function RefundPolicyPage() {
  return (
    <main className="min-h-screen">
      <RefundPolicyHero />
      <RefundPolicyContent />
    </main>
  );
}
