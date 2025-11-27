"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check } from "lucide-react";
import { TProductBundle } from "@/features/landing/types";
import { useCart } from "@/features/cart/store";

type TAddToCartSectionProps = {
    productId: string;
    productName: string;
    productImage: string;
    selectedBundle: TProductBundle;
    shippingCountry: string;
    paymentMethods: string[];
    trustBadges: { icon: string; text: string }[];
};

export function AddToCartSection({
    productId,
    productName,
    productImage,
    selectedBundle,
    shippingCountry,
    paymentMethods,
    trustBadges,
}: TAddToCartSectionProps) {
    const { addItem, openDrawer } = useCart();
    const [isAdding, setIsAdding] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleAddToCart = () => {
        setIsAdding(true);

        // Add item to cart
        addItem({
            productId,
            productName,
            bundleId: selectedBundle.id,
            bundleLabel: selectedBundle.label,
            price: selectedBundle.discountedPrice,
            image: productImage,
        });

        // Show success state
        setShowSuccess(true);
        setTimeout(() => {
            setShowSuccess(false);
            setIsAdding(false);

            // Open cart drawer after a brief delay
            setTimeout(() => {
                openDrawer();
            }, 100);
        }, 800);
    };

    return (
        <div className="space-y-4">
            {/* Add to Cart Button */}
            <Button
                size="lg"
                onClick={handleAddToCart}
                disabled={isAdding}
                className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-[var(--secondary-foreground)] font-bold text-base rounded-full h-14 shadow-md transition-all"
            >
                {showSuccess ? (
                    <>
                        <Check className="w-5 h-5 mr-2" />
                        ADDED TO CART!
                    </>
                ) : (
                    <>
                        ADD TO CART (50% OFF TODAY)
                        <ShoppingCart className="w-5 h-5 ml-2" />
                    </>
                )}
            </Button>

            {/* Shipping Info */}
            <div className="flex items-center justify-center gap-2 text-sm text-[var(--foreground)]">
                Free shipping all over in <span className="font-semibold underline">{shippingCountry}</span>
            </div>
        </div>
    );
}
