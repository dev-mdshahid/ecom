"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash2 } from "lucide-react";
import { TCartItem } from "../types";
import { useCart } from "../store";

type TCartItemCardProps = {
    item: TCartItem;
};

export function CartItemCard({ item }: TCartItemCardProps) {
    const updateQuantity = useCart((state) => state.updateQuantity);
    const removeItem = useCart((state) => state.removeItem);

    const handleIncrease = () => {
        updateQuantity(item.productId, item.bundleId, item.quantity + 1);
    };

    const handleDecrease = () => {
        updateQuantity(item.productId, item.bundleId, item.quantity - 1);
    };

    const handleRemove = () => {
        removeItem(item.productId, item.bundleId);
    };

    return (
        <div className="flex gap-4 p-4 bg-[var(--card)] rounded-lg border border-[var(--border)] hover:shadow-sm transition-shadow">
            {/* Product Image */}
            <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--muted)]">
                <Image
                    src={item.image}
                    alt={item.productName}
                    fill
                    className="object-cover"
                />
            </div>

            {/* Product Info */}
            <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-sm text-[var(--foreground)] truncate">
                    {item.productName}
                </h3>
                <p className="text-xs text-[var(--muted-foreground)] mt-0.5">
                    {item.bundleLabel}
                </p>
                <p className="text-sm font-bold text-[var(--primary)] mt-1">
                    ${item.price.toFixed(2)}
                </p>

                {/* Quantity Controls */}
                <div className="flex items-center gap-2 mt-2">
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md border-[var(--border)]"
                        onClick={handleDecrease}
                    >
                        <Minus className="h-3 w-3" />
                    </Button>
                    <span className="text-sm font-medium w-8 text-center">
                        {item.quantity}
                    </span>
                    <Button
                        variant="outline"
                        size="icon"
                        className="h-7 w-7 rounded-md border-[var(--border)]"
                        onClick={handleIncrease}
                    >
                        <Plus className="h-3 w-3" />
                    </Button>
                </div>
            </div>

            {/* Remove Button */}
            <div className="flex flex-col justify-between items-end">
                <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-[var(--muted-foreground)] hover:text-[var(--destructive)] hover:bg-[var(--destructive)]/10"
                    onClick={handleRemove}
                >
                    <Trash2 className="h-4 w-4" />
                </Button>
                <p className="text-sm font-semibold text-[var(--foreground)]">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </div>
    );
}
