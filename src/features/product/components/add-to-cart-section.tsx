"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { TProductBundle } from "@/features/landing/types";

type TAddToCartSectionProps = {
    selectedBundle: TProductBundle;
    shippingCountry: string;
    paymentMethods: string[];
    trustBadges: { icon: string; text: string }[];
};

export function AddToCartSection({
    selectedBundle,
    shippingCountry,
    paymentMethods,
    trustBadges,
}: TAddToCartSectionProps) {
    return (
        <div className="space-y-4">
            {/* Add to Cart Button */}
            <Button
                size="lg"
                className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-[var(--secondary-foreground)] font-bold text-base rounded-full h-14 shadow-md"
            >
                ADD TO CART (50% OFF TODAY)
                <ShoppingCart className="w-5 h-5 ml-2" />
            </Button>

            {/* Shipping Info */}
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--foreground)]">

                Free shipping all over in <span className="font-semibold underline">{shippingCountry}</span>

            </div>
        </div>
    );
}
