import type { Metadata } from "next";
import { AboutHero } from "@/features/about/components/about-hero";
import { BrandStory } from "@/features/about/components/brand-story";
import { CoreValues } from "@/features/about/components/core-values";
import { TrustSection } from "@/features/about/components/trust-section";
import { FounderStory } from "@/features/about/components/founder-story";

export const metadata: Metadata = {
    title: "About Us - Safe Baby Care Products | Our Story",
    description:
        "Learn about our mission to provide safe, gentle, and reliable baby care products. Trusted by thousands of parents who refuse to compromise on quality and safety.",
    keywords: [
        "baby care brand",
        "safe baby products",
        "trusted baby essentials",
        "baby product safety",
        "parent-founded baby brand",
    ],
    openGraph: {
        title: "About Us - Safe Baby Care Products | Our Story",
        description:
            "Built by parents, for parents. Discover our commitment to safety, quality, and trust.",
        type: "website",
    },
};

export default function AboutPage() {
    return (
        <main className="min-h-screen">
            <AboutHero />
            <BrandStory />
            <CoreValues />
            <TrustSection />
            <FounderStory />
        </main>
    );
}
