"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Truck, Zap, Clock } from "lucide-react";
import { cn } from "@/lib/utils";
import { SHIPPING_METHODS } from "../types";

type TShippingMethodSelectorProps = {
    selectedMethod: string;
    onChange: (methodId: string) => void;
};

const methodIcons: Record<string, React.ReactNode> = {
    free: <Truck className="w-5 h-5" />,
    express: <Zap className="w-5 h-5" />,
    overnight: <Clock className="w-5 h-5" />,
};

export function ShippingMethodSelector({
    selectedMethod,
    onChange,
}: TShippingMethodSelectorProps) {
    return (
        <Card className="border-[var(--border)] shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                        <Truck className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    Shipping Method
                </CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    value={selectedMethod}
                    onValueChange={onChange}
                    className="grid gap-3"
                >
                    {SHIPPING_METHODS.map((method) => (
                        <div key={method.id}>
                            <Label
                                htmlFor={method.id}
                                className={cn(
                                    "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                                    selectedMethod === method.id
                                        ? "border-[var(--primary)] bg-[var(--primary)]/5"
                                        : "border-[var(--border)] hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/50"
                                )}
                            >
                                <RadioGroupItem
                                    value={method.id}
                                    id={method.id}
                                    className="sr-only"
                                />

                                {/* Custom Radio Indicator */}
                                <div
                                    className={cn(
                                        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0",
                                        selectedMethod === method.id
                                            ? "border-[var(--primary)] bg-[var(--primary)]"
                                            : "border-[var(--muted-foreground)]/50"
                                    )}
                                >
                                    {selectedMethod === method.id && (
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    )}
                                </div>

                                {/* Icon */}
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                                        selectedMethod === method.id
                                            ? "bg-[var(--primary)] text-white"
                                            : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                                    )}
                                >
                                    {methodIcons[method.id]}
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center justify-between gap-2">
                                        <span className="font-semibold text-[var(--foreground)]">
                                            {method.name}
                                        </span>
                                        <span
                                            className={cn(
                                                "font-bold",
                                                method.price === 0
                                                    ? "text-emerald-600"
                                                    : "text-[var(--foreground)]"
                                            )}
                                        >
                                            {method.price === 0
                                                ? "FREE"
                                                : `$${method.price.toFixed(2)}`}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--muted-foreground)] mt-0.5">
                                        {method.estimatedDays}
                                    </p>
                                </div>
                            </Label>
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}
