"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { TCheckoutStep } from "../types";

type TCheckoutProgressProps = {
    currentStep: TCheckoutStep;
};

const steps: { id: TCheckoutStep; label: string; number: number }[] = [
    { id: "shipping", label: "Shipping Details", number: 1 },
    { id: "payment", label: "Payment Method", number: 2 },
    { id: "confirmation", label: "Confirmation", number: 3 },
];

export function CheckoutProgress({ currentStep }: TCheckoutProgressProps) {
    const currentIndex = steps.findIndex((s) => s.id === currentStep);

    return (
        <div className="w-full py-6 px-4">
            {/* Mobile View */}
            <div className="flex md:hidden items-center justify-center gap-2 text-sm">
                <span className="font-medium text-[var(--primary)]">
                    Step {currentIndex + 1} of {steps.length}:
                </span>
                <span className="text-[var(--foreground)]">
                    {steps[currentIndex].label}
                </span>
            </div>

            {/* Desktop View */}
            <div className="hidden md:flex items-center justify-center">
                {steps.map((step, index) => {
                    const isCompleted = index < currentIndex;
                    const isCurrent = index === currentIndex;
                    const isUpcoming = index > currentIndex;

                    return (
                        <div key={step.id} className="flex items-center">
                            <div className="flex items-center gap-3">
                                {/* Step Circle */}
                                <div
                                    className={cn(
                                        "w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300",
                                        isCompleted &&
                                            "bg-emerald-500 text-white",
                                        isCurrent &&
                                            "bg-[var(--primary)] text-white ring-4 ring-[var(--primary)]/20",
                                        isUpcoming &&
                                            "bg-[var(--muted)] text-[var(--muted-foreground)]"
                                    )}
                                >
                                    {isCompleted ? (
                                        <Check className="w-4 h-4" />
                                    ) : (
                                        step.number
                                    )}
                                </div>

                                {/* Step Label */}
                                <span
                                    className={cn(
                                        "text-sm font-medium transition-colors",
                                        isCompleted && "text-emerald-600",
                                        isCurrent && "text-[var(--primary)]",
                                        isUpcoming &&
                                            "text-[var(--muted-foreground)]"
                                    )}
                                >
                                    {step.label}
                                </span>
                            </div>

                            {/* Connector Line */}
                            {index < steps.length - 1 && (
                                <div
                                    className={cn(
                                        "w-16 lg:w-24 h-0.5 mx-4 transition-colors",
                                        index < currentIndex
                                            ? "bg-emerald-500"
                                            : "bg-[var(--border)]"
                                    )}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
