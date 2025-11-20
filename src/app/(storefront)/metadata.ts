import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "BabyEssentials - Safe, Certified Baby Products | Hospital-Grade Quality",
    description: "Discover premium baby care products trusted by 10,000+ parents. Shop hospital-grade baby hair trimmers, nose suckers, and nail grinders with 30-day guarantee. Free shipping on orders over $50.",
    keywords: "baby products, baby care, baby hair trimmer, baby nose sucker, baby nail grinder, safe baby products, certified baby essentials",
    openGraph: {
        title: "BabyEssentials - Gentle Care for Your Little One",
        description: "Hospital-grade safety, designed for home comfort. Give your baby the best start with our certified essentials.",
        type: "website",
        images: [
            {
                url: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=630&fit=crop&q=80",
                width: 1200,
                height: 630,
                alt: "BabyEssentials - Safe Baby Products",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "BabyEssentials - Safe, Certified Baby Products",
        description: "Hospital-grade safety, designed for home comfort. Trusted by 10,000+ parents.",
        images: ["https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=1200&h=630&fit=crop&q=80"],
    },
};
