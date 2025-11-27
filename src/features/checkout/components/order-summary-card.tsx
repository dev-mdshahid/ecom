"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    ShoppingBag,
    Tag,
    Minus,
    Plus,
    X,
    Percent,
    Truck,
    ShieldCheck,
    Gift,
} from "lucide-react";
import { TCartItem } from "@/features/cart/types";
import { TOrderSummary, SHIPPING_METHODS } from "../types";
import { cn } from "@/lib/utils";
import { useState } from "react";

type TOrderSummaryCardProps = {
    items: TCartItem[];
    summary: TOrderSummary;
    selectedShippingMethod: string;
    promoCode: string;
    onPromoCodeChange: (code: string) => void;
    onApplyPromoCode: () => void;
    promoApplied: boolean;
    promoError?: string;
    onUpdateQuantity: (
        productId: string,
        bundleId: string,
        quantity: number
    ) => void;
    onRemoveItem: (productId: string, bundleId: string) => void;
};

export function OrderSummaryCard({
    items,
    summary,
    selectedShippingMethod,
    promoCode,
    onPromoCodeChange,
    onApplyPromoCode,
    promoApplied,
    promoError,
    onUpdateQuantity,
    onRemoveItem,
}: TOrderSummaryCardProps) {
    const [isApplying, setIsApplying] = useState(false);
    const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);
    const selectedMethod = SHIPPING_METHODS.find(
        (m) => m.id === selectedShippingMethod
    );

    const handleApplyPromo = async () => {
        setIsApplying(true);
        await onApplyPromoCode();
        setIsApplying(false);
    };

    return (
        <Card className="border-[var(--border)] shadow-sm sticky top-24">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-lg">
                        <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                            <ShoppingBag className="w-4 h-4 text-[var(--primary)]" />
                        </div>
                        Your Cart
                    </div>
                    <Badge variant="secondary" className="text-sm">
                        {totalItems} {totalItems === 1 ? "item" : "items"}
                    </Badge>
                </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Cart Items */}
                <div className="space-y-3 max-h-[280px] overflow-y-auto pr-1 scrollbar-thin">
                    {items.map((item) => (
                        <div
                            key={`${item.productId}-${item.bundleId}`}
                            className="flex gap-3 p-3 bg-[var(--muted)]/30 rounded-xl group relative"
                        >
                            {/* Remove Button */}
                            <button
                                onClick={() =>
                                    onRemoveItem(item.productId, item.bundleId)
                                }
                                className="absolute -top-2 -right-2 w-6 h-6 bg-red-100 hover:bg-red-200 text-red-600 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-10"
                            >
                                <X className="w-3 h-3" />
                            </button>

                            {/* Product Image */}
                            <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--muted)]">
                                <Image
                                    src={item.image}
                                    alt={item.productName}
                                    fill
                                    className="object-cover"
                                />
                                {/* Quantity Badge on Image */}
                                <div className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--primary)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                                    {item.quantity}
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="flex-1 min-w-0">
                                <h4 className="font-medium text-sm text-[var(--foreground)] truncate">
                                    {item.productName}
                                </h4>
                                <p className="text-xs text-[var(--muted-foreground)] truncate">
                                    {item.bundleLabel}
                                </p>

                                {/* Quantity Controls */}
                                <div className="flex items-center gap-2 mt-2">
                                    <button
                                        onClick={() =>
                                            onUpdateQuantity(
                                                item.productId,
                                                item.bundleId,
                                                item.quantity - 1
                                            )
                                        }
                                        className="w-6 h-6 rounded-md bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)] transition-colors"
                                    >
                                        <Minus className="w-3 h-3" />
                                    </button>
                                    <span className="text-sm font-medium w-6 text-center">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() =>
                                            onUpdateQuantity(
                                                item.productId,
                                                item.bundleId,
                                                item.quantity + 1
                                            )
                                        }
                                        className="w-6 h-6 rounded-md bg-[var(--background)] border border-[var(--border)] flex items-center justify-center hover:bg-[var(--muted)] transition-colors"
                                    >
                                        <Plus className="w-3 h-3" />
                                    </button>
                                </div>
                            </div>

                            {/* Price */}
                            <div className="text-right">
                                <p className="font-semibold text-sm text-[var(--foreground)]">
                                    ${(item.price * item.quantity).toFixed(2)}
                                </p>
                                {item.quantity > 1 && (
                                    <p className="text-xs text-[var(--muted-foreground)]">
                                        ${item.price.toFixed(2)} each
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <Separator />

                {/* Promo Code */}
                <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm font-medium text-[var(--foreground)]">
                        <Gift className="w-4 h-4 text-[var(--primary)]" />
                        Promo Code or Gift Card
                    </div>
                    <div className="flex gap-2">
                        <Input
                            placeholder="Enter code"
                            value={promoCode}
                            onChange={(e) => onPromoCodeChange(e.target.value)}
                            className={cn(
                                "flex-1",
                                promoApplied &&
                                    "border-emerald-500 bg-emerald-50",
                                promoError && "border-red-500"
                            )}
                            disabled={promoApplied}
                        />
                        <Button
                            onClick={handleApplyPromo}
                            disabled={!promoCode || promoApplied || isApplying}
                            className={cn(
                                promoApplied &&
                                    "bg-emerald-500 hover:bg-emerald-500"
                            )}
                        >
                            {promoApplied ? "Applied!" : "Apply"}
                        </Button>
                    </div>
                    {promoApplied && (
                        <p className="text-xs text-emerald-600 flex items-center gap-1">
                            <Percent className="w-3 h-3" />
                            Discount applied successfully!
                        </p>
                    )}
                    {promoError && (
                        <p className="text-xs text-red-500">{promoError}</p>
                    )}
                </div>

                <Separator />

                {/* Summary */}
                <div className="space-y-3">
                    <h4 className="font-semibold text-sm flex items-center gap-2">
                        <Tag className="w-4 h-4 text-[var(--primary)]" />
                        Order Summary
                    </h4>

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)]">
                                Subtotal
                            </span>
                            <span className="font-medium">
                                ${summary.subtotal.toFixed(2)}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)] flex items-center gap-1">
                                <Truck className="w-3 h-3" />
                                Shipping
                                {selectedMethod && (
                                    <span className="text-xs">
                                        ({selectedMethod.name})
                                    </span>
                                )}
                            </span>
                            <span
                                className={cn(
                                    "font-medium",
                                    summary.shipping === 0 && "text-emerald-600"
                                )}
                            >
                                {summary.shipping === 0
                                    ? "FREE"
                                    : `$${summary.shipping.toFixed(2)}`}
                            </span>
                        </div>

                        <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)]">
                                Estimated Tax
                            </span>
                            <span className="font-medium">
                                ${summary.tax.toFixed(2)}
                            </span>
                        </div>

                        {summary.discount > 0 && (
                            <div className="flex justify-between text-emerald-600">
                                <span className="flex items-center gap-1">
                                    <Percent className="w-3 h-3" />
                                    Discount
                                </span>
                                <span className="font-medium">
                                    -${summary.discount.toFixed(2)}
                                </span>
                            </div>
                        )}
                    </div>

                    <Separator />

                    <div className="flex justify-between items-center">
                        <span className="text-base font-bold">Total</span>
                        <span className="text-xl font-bold text-[var(--primary)]">
                            ${summary.total.toFixed(2)}
                        </span>
                    </div>
                </div>

                {/* Trust Badges */}
                <div className="pt-2 flex items-center justify-center gap-4 text-xs text-[var(--muted-foreground)]">
                    <div className="flex items-center gap-1">
                        <ShieldCheck className="w-4 h-4 text-emerald-500" />
                        <span>Secure</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Truck className="w-4 h-4 text-[var(--primary)]" />
                        <span>Fast Shipping</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
