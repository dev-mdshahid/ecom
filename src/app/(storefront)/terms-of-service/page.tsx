import type { Metadata } from "next";
import { TermsHero } from "@/features/policies/components/terms-hero";
import { TermsContent } from "@/features/policies/components/terms-content";

export const metadata: Metadata = {
  title: "Terms of Service | BabyNest - Our Agreement With You",
  description:
    "Read BabyNest's Terms of Service. Understand your rights and responsibilities when using our website and purchasing our baby care products.",
  openGraph: {
    title: "Terms of Service | BabyNest",
    description: "Clear, fair, and transparent terms for shopping with BabyNest.",
  },
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <TermsHero />
      <TermsContent />
    </main>
  );
}
