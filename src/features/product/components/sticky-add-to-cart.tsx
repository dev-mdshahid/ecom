"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useCart } from "@/features/cart/store";

type TStickyAddToCartProps = {
    productId: string;
    productName: string;
    price: number;
    image: string;
    bundleId: string;
    bundleLabel: string;
};

export function StickyAddToCart({
    productId,
    productName,
    price,
    image,
    bundleId,
    bundleLabel
}: TStickyAddToCartProps) {
    const [isVisible, setIsVisible] = useState(false);
    const { addItem, openDrawer } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky bar after scrolling down 400px
            setIsVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAddToCart = () => {
        addItem({
            productId,
            productName,
            bundleId,
            bundleLabel,
            price,
            image,
        });
        openDrawer();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t-2 border-[var(--border)] shadow-lg z-50 md:hidden">
            <div className="container mx-auto px-4 py-3">
                <div className="flex items-center gap-3">
                    {/* Product Thumbnail */}
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#f5e6f0] to-[#e8d4e8] flex items-center justify-center flex-shrink-0">
                        <span className="text-2xl">🐨</span>
                    </div>

                    {/* Product Info */}
                    <div className="flex-1 min-w-0">
                        <div className="font-semibold text-sm text-[var(--foreground)] truncate">
                            {productName}
                        </div>
                        <div className="text-lg font-bold text-[var(--foreground)]">
                            £{price.toFixed(2)}
                        </div>
                    </div>

                    {/* Add to Cart Button */}
                    <Button
                        size="sm"
                        onClick={handleAddToCart}
                        className="bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-[var(--secondary-foreground)] font-bold rounded-full flex-shrink-0"
                    >
                        ADD TO CART
                    </Button>
                </div>
            </div>
        </div>
    );
}
