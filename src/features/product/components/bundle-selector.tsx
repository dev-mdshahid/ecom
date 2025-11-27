"use client";

import { useState } from "react";
import { TProductBundle } from "@/features/landing/types";
import { Check } from "lucide-react";

type TBundleSelectorProps = {
    bundles: TProductBundle[];
    onBundleChange?: (bundle: TProductBundle) => void;
};

export function BundleSelector({ bundles, onBundleChange }: TBundleSelectorProps) {
    const [selectedBundleId, setSelectedBundleId] = useState(bundles[0]?.id || "");

    const handleBundleSelect = (bundle: TProductBundle) => {
        setSelectedBundleId(bundle.id);
        onBundleChange?.(bundle);
    };

    return (
        <div className="space-y-3">
            <h3 className="text-sm font-semibold text-[var(--foreground)]">
                Choose Your Bundle
            </h3>
            <div className="space-y-2">
                {bundles.map((bundle) => {
                    const isSelected = selectedBundleId === bundle.id;
                    return (
                        <button
                            key={bundle.id}
                            onClick={() => handleBundleSelect(bundle)}
                            className={`w-full p-3 rounded-lg border-2 transition-all text-left relative ${
                                isSelected
                                    ? "border-[var(--primary)] bg-[var(--primary)]/5"
                                    : "border-[var(--border)] bg-white hover:border-[var(--primary)]/40"
                            }`}
                        >
                            {/* Badge */}
                            {bundle.badge && (
                                <div className="absolute -top-2 left-3">
                                    <span className="bg-[var(--secondary)] text-[var(--secondary-foreground)] text-[10px] font-bold px-2 py-0.5 rounded">
                                        {bundle.badge}
                                    </span>
                                </div>
                            )}

                            <div className="flex items-center gap-3">
                                {/* Radio/Check Circle */}
                                <div
                                    className={`flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                                        isSelected
                                            ? "border-[var(--primary)] bg-[var(--primary)]"
                                            : "border-[var(--border)]"
                                    }`}
                                >
                                    {isSelected && <Check className="w-3 h-3 text-white" />}
                                </div>

                                {/* Koala Icon */}
                                <div className="text-2xl">🐨</div>

                                {/* Bundle Info */}
                                <div className="flex-1">
                                    <div className="font-semibold text-sm text-[var(--foreground)]">
                                        {bundle.label}
                                    </div>
                                </div>

                                {/* Pricing */}
                                <div className="text-right">
                                    <div className="flex items-center gap-2">
                                        <span className="text-xs text-[var(--muted-foreground)] line-through">
                                            £{bundle.originalPrice.toFixed(2)}
                                        </span>
                                        <span className="text-base font-bold text-[var(--foreground)]">
                                            £{bundle.discountedPrice.toFixed(2)}
                                        </span>
                                    </div>
                                    <div className="text-[10px] font-semibold text-[var(--secondary-foreground)] bg-[var(--secondary)] px-1.5 py-0.5 rounded mt-1 inline-block">
                                        EXTRA {bundle.discount} OFF
                                    </div>
                                </div>
                            </div>
                        </button>
                    );
                })}
            </div>
        </div>
    );
}
