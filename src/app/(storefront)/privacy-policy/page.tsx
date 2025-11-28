import type { Metadata } from "next";
import { PrivacyPolicyHero } from "@/features/policies/components/privacy-policy-hero";
import { PrivacyPolicyContent } from "@/features/policies/components/privacy-policy-content";

export const metadata: Metadata = {
  title: "Privacy Policy | BabyNest - Your Data, Protected",
  description:
    "Learn how BabyNest collects, uses, and protects your personal information. We're committed to transparency and keeping your data secure.",
  openGraph: {
    title: "Privacy Policy | BabyNest",
    description: "Your privacy matters to us. Learn how we protect your personal information.",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <PrivacyPolicyHero />
      <PrivacyPolicyContent />
    </main>
  );
}
