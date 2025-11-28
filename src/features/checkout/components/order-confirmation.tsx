"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
    CheckCircle2,
    MapPin,
    Truck,
    CreditCard,
    Calendar,
    Package,
    Mail,
    Phone,
} from "lucide-react";
import { TShippingAddress, SHIPPING_METHODS, TPaymentMethod, TOrderSummary } from "../types";
import Image from "next/image";
import { TCartItem } from "@/features/cart/types";
import Link from "next/link";

type TOrderConfirmationProps = {
    orderId: string;
    shippingAddress: TShippingAddress;
    shippingMethodId: string;
    paymentMethod: TPaymentMethod;
    items: TCartItem[];
    summary: TOrderSummary;
};

const paymentMethodLabels: Record<TPaymentMethod, string> = {
    credit_card: "Credit Card",
    paypal: "PayPal",
    buy_now_pay_later: "Buy Now, Pay Later",
    cash_on_delivery: "Cash on Delivery",
};

export function OrderConfirmation({
    orderId,
    shippingAddress,
    shippingMethodId,
    paymentMethod,
    items,
    summary,
}: TOrderConfirmationProps) {
    const shippingMethod = SHIPPING_METHODS.find(
        (m) => m.id === shippingMethodId
    );

    // Calculate estimated delivery date
    const getEstimatedDelivery = () => {
        const today = new Date();
        let daysToAdd = 10; // Default for free shipping
        if (shippingMethodId === "express") daysToAdd = 3;
        if (shippingMethodId === "overnight") daysToAdd = 1;
        
        const deliveryDate = new Date(today);
        deliveryDate.setDate(today.getDate() + daysToAdd);
        
        return deliveryDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
        });
    };

    return (
        <div className="space-y-6 animate-fade-in">
            {/* Success Header */}
            <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-4">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-[var(--foreground)] mb-2">
                    Order Confirmed!
                </h1>
                <p className="text-[var(--muted-foreground)] max-w-md mx-auto">
                    Thank you for your purchase. Your order has been received and
                    is being processed.
                </p>
                <div className="mt-4 flex items-center justify-center gap-2">
                    <span className="text-sm text-[var(--muted-foreground)]">
                        Order ID:
                    </span>
                    <Badge variant="outline" className="font-mono text-sm">
                        {orderId}
                    </Badge>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
                {/* Shipping Info */}
                <Card className="border-[var(--border)]">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <MapPin className="w-5 h-5 text-[var(--primary)]" />
                            Shipping Address
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2 text-sm">
                        <p className="font-semibold">
                            {shippingAddress.firstName} {shippingAddress.lastName}
                        </p>
                        <p className="text-[var(--muted-foreground)]">
                            {shippingAddress.address}
                        </p>
                        <p className="text-[var(--muted-foreground)]">
                            {shippingAddress.city}, {shippingAddress.state}{" "}
                            {shippingAddress.zipCode}
                        </p>
                        <div className="flex items-center gap-4 pt-2 text-[var(--muted-foreground)]">
                            <span className="flex items-center gap-1">
                                <Mail className="w-4 h-4" />
                                {shippingAddress.email}
                            </span>
                        </div>
                        <div className="flex items-center gap-1 text-[var(--muted-foreground)]">
                            <Phone className="w-4 h-4" />
                            {shippingAddress.phone}
                        </div>
                    </CardContent>
                </Card>

                {/* Delivery Info */}
                <Card className="border-[var(--border)]">
                    <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-base">
                            <Truck className="w-5 h-5 text-[var(--primary)]" />
                            Delivery Details
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[var(--muted-foreground)]">
                                Shipping Method
                            </span>
                            <span className="font-medium text-sm">
                                {shippingMethod?.name}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[var(--muted-foreground)]">
                                <Calendar className="w-4 h-4 inline mr-1" />
                                Estimated Delivery
                            </span>
                            <span className="font-medium text-sm text-emerald-600">
                                {getEstimatedDelivery()}
                            </span>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-[var(--muted-foreground)]">
                                <CreditCard className="w-4 h-4 inline mr-1" />
                                Payment Method
                            </span>
                            <span className="font-medium text-sm">
                                {paymentMethodLabels[paymentMethod]}
                            </span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Order Items */}
            <Card className="border-[var(--border)]">
                <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-2 text-base">
                        <Package className="w-5 h-5 text-[var(--primary)]" />
                        Order Items
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-3">
                        {items.map((item) => (
                            <div
                                key={`${item.productId}-${item.bundleId}`}
                                className="flex gap-3 p-3 bg-[var(--muted)]/30 rounded-xl"
                            >
                                <div className="relative w-16 h-16 flex-shrink-0 rounded-lg overflow-hidden bg-[var(--muted)]">
                                    <Image
                                        src={item.image}
                                        alt={item.productName}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h4 className="font-medium text-sm truncate">
                                        {item.productName}
                                    </h4>
                                    <p className="text-xs text-[var(--muted-foreground)]">
                                        {item.bundleLabel}
                                    </p>
                                    <p className="text-xs text-[var(--muted-foreground)] mt-1">
                                        Qty: {item.quantity}
                                    </p>
                                </div>
                                <div className="text-right">
                                    <p className="font-semibold text-sm">
                                        ${(item.price * item.quantity).toFixed(2)}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <Separator className="my-4" />

                    <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)]">
                                Subtotal
                            </span>
                            <span>${summary.subtotal.toFixed(2)}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)]">
                                Shipping
                            </span>
                            <span>
                                {summary.shipping === 0
                                    ? "FREE"
                                    : `$${summary.shipping.toFixed(2)}`}
                            </span>
                        </div>
                        <div className="flex justify-between">
                            <span className="text-[var(--muted-foreground)]">
                                Tax
                            </span>
                            <span>${summary.tax.toFixed(2)}</span>
                        </div>
                        {summary.discount > 0 && (
                            <div className="flex justify-between text-emerald-600">
                                <span>Discount</span>
                                <span>-${summary.discount.toFixed(2)}</span>
                            </div>
                        )}
                        <Separator className="my-2" />
                        <div className="flex justify-between font-bold text-base">
                            <span>Total</span>
                            <span className="text-[var(--primary)]">
                                ${summary.total.toFixed(2)}
                            </span>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Link
                    href="/"
                    className="inline-flex items-center justify-center h-11 px-8 rounded-xl bg-[var(--primary)] text-white font-medium hover:bg-[var(--primary)]/90 transition-colors"
                >
                    Continue Shopping
                </Link>
                <button className="inline-flex items-center justify-center h-11 px-8 rounded-xl border-2 border-[var(--border)] font-medium hover:bg-[var(--muted)] transition-colors">
                    Track Order
                </button>
            </div>
        </div>
    );
}
