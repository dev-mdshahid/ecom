"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "../store";
import { CartItemCard } from "./cart-item-card";
import { Separator } from "@/components/ui/separator";

export function CartDrawer() {
    const { items, isOpen, closeDrawer, subtotal, totalItems } = useCart();

    const itemCount = totalItems();
    const total = subtotal();

    return (
        <Sheet open={isOpen} onOpenChange={closeDrawer}>
            <SheetContent side="right" className="w-full sm:w-96 p-0 flex flex-col">
                {/* Header with gradient */}
                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)] p-6 pb-8">
                    <SheetHeader>
                        <div className="flex items-center space-x-3">
                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                <ShoppingBag className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <SheetTitle className="text-white text-xl font-bold">
                                    Shopping Cart
                                </SheetTitle>
                                <SheetDescription className="text-white/80 text-sm">
                                    {itemCount === 0
                                        ? "Your cart is empty"
                                        : `${itemCount} ${itemCount === 1 ? "item" : "items"} in cart`}
                                </SheetDescription>
                            </div>
                        </div>
                    </SheetHeader>
                </div>

                {/* Cart Items */}
                <div className="flex-1 overflow-y-auto px-4 py-6">
                    {items.length === 0 ? (
                        <div className="flex flex-col items-center justify-center h-full text-center px-6">
                            <div className="w-24 h-24 rounded-full bg-[var(--muted)] flex items-center justify-center mb-4">
                                <ShoppingBag className="w-12 h-12 text-[var(--muted-foreground)]" />
                            </div>
                            <h3 className="text-lg font-semibold text-[var(--foreground)] mb-2">
                                Your cart is empty
                            </h3>
                            <p className="text-sm text-[var(--muted-foreground)] mb-6">
                                Add some baby essentials to get started!
                            </p>
                            <Button
                                asChild
                                className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white"
                                onClick={closeDrawer}
                            >
                                <Link href="/#products">
                                    Start Shopping
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                </Link>
                            </Button>
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {items.map((item) => (
                                <CartItemCard
                                    key={`${item.productId}-${item.bundleId}`}
                                    item={item}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {/* Footer with Total and Checkout */}
                {items.length > 0 && (
                    <div className="border-t border-[var(--border)] p-6 bg-[var(--muted)]/30 space-y-4">
                        {/* Subtotal */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between text-sm">
                                <span className="text-[var(--muted-foreground)]">Subtotal</span>
                                <span className="font-semibold text-[var(--foreground)]">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                            <Separator />
                            <div className="flex items-center justify-between">
                                <span className="text-base font-bold text-[var(--foreground)]">
                                    Total
                                </span>
                                <span className="text-xl font-bold text-[var(--primary)]">
                                    ${total.toFixed(2)}
                                </span>
                            </div>
                        </div>

                        {/* Checkout Button */}
                        <Button
                            asChild
                            className="w-full bg-[var(--secondary)] hover:bg-[var(--secondary)]/90 text-[var(--secondary-foreground)] font-bold h-12 rounded-full"
                            onClick={closeDrawer}
                        >
                            <Link href="/checkout">
                                Proceed to Checkout
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>

                        <p className="text-xs text-center text-[var(--muted-foreground)]">
                            Free shipping on all orders
                        </p>
                    </div>
                )}
            </SheetContent>
        </Sheet>
    );
}
