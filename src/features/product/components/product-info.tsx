"use client";

import { Star, Package, StarHalf } from "lucide-react";
import { Badge } from "@/components/ui/badge";

type TProductInfoProps = {
    name: string;
    rating: number;
    reviewCount: number;
    inStock: boolean;
    tagline: string;
    price: number;
    originalPrice?: number;
    badge?: string;
    features: string[];
};

export function ProductInfo({
    name,
    rating,
    reviewCount,
    inStock,
    tagline,
    price,
    originalPrice,
    badge,
    features,
}: TProductInfoProps) {
    const renderStars = (rating: number) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 >= 0.5;

        for (let i = 0; i < fullStars; i++) {
            stars.push(<Star key={`full-${i}`} className="w-4 h-4 fill-orange-400 text-orange-400" />);
        }
        if (hasHalfStar) {
            stars.push(<StarHalf key="half" className="w-4 h-4 fill-orange-400 text-orange-400" />);
        }
        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-300" />);
        }
        return stars;
    };

    return (
        <div className="space-y-4">
            {/* Rating & Reviews */}
            <div className="flex items-center gap-2">
                <div className="flex items-center gap-1">
                    {renderStars(rating)}
                </div>
                <span className="text-sm font-semibold text-[var(--foreground)]">
                    RATED {rating}/5 BASED ON +{reviewCount.toLocaleString()} REVIEWS
                </span>
            </div>

            {/* Product Name */}
            <div>
                <h1 className="text-2xl font-bold text-[var(--foreground)] mb-1">
                    {name}
                </h1>
            </div>

            {/* Stock Status */}
            {inStock && (
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm font-semibold text-green-600 uppercase">
                        In Stock, Ready to Ship
                    </span>
                </div>
            )}

            {/* Tagline */}
            <p className="text-[var(--foreground)] font-medium">{tagline}</p>

            {/* Pricing */}
            <div className="flex items-center gap-3">
                <span className="text-3xl font-bold text-[var(--foreground)]">
                    £{price.toFixed(2)}
                </span>
                {originalPrice && (
                    <span className="text-xl text-[var(--muted-foreground)] line-through">
                        £{originalPrice.toFixed(2)}
                    </span>
                )}
                {badge && (
                    <Badge className="bg-[var(--secondary)] text-[var(--secondary-foreground)] border-none px-2 py-1 text-xs font-bold">
                        {badge}
                    </Badge>
                )}
            </div>

            {/* Features List */}
            <div className="space-y-2 pt-2">
                {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-2">
                        <div className="flex-shrink-0 mt-0.5">
                            <svg
                                className="w-4 h-4 text-green-500"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                        </div>
                        <span className="text-sm text-[var(--foreground)]">{feature}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
