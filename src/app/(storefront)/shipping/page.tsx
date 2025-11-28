import type { Metadata } from "next";
import { ShippingHero } from "@/features/policies/components/shipping-hero";
import { ShippingContent } from "@/features/policies/components/shipping-content";

export const metadata: Metadata = {
  title: "Shipping & Delivery | BabyNest - Fast, Reliable Shipping",
  description:
    "Learn about BabyNest's shipping options, delivery times, and costs. Free shipping on orders over $50. Express and overnight options available.",
  openGraph: {
    title: "Shipping & Delivery | BabyNest",
    description: "Fast, reliable shipping for baby essentials. Free shipping on orders over $50.",
  },
};

export default function ShippingPage() {
  return (
    <main className="min-h-screen">
      <ShippingHero />
      <ShippingContent />
    </main>
  );
}
