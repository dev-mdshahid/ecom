"use client";

import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getPriceRange } from "../utils";

export function PriceFilter() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();

    const priceRange = getPriceRange();
    const minPrice = Number(searchParams.get("minPrice")) || priceRange.min;
    const maxPrice = Number(searchParams.get("maxPrice")) || priceRange.max;

    const [localMin, setLocalMin] = useState(minPrice);
    const [localMax, setLocalMax] = useState(maxPrice);

    useEffect(() => {
        setLocalMin(minPrice);
        setLocalMax(maxPrice);
    }, [minPrice, maxPrice]);

    function handlePriceChange(values: number[]) {
        setLocalMin(values[0]);
        setLocalMax(values[1]);
    }

    function applyFilter() {
        const params = new URLSearchParams(searchParams.toString());

        if (localMin > priceRange.min) {
            params.set("minPrice", localMin.toString());
        } else {
            params.delete("minPrice");
        }

        if (localMax < priceRange.max) {
            params.set("maxPrice", localMax.toString());
        } else {
            params.delete("maxPrice");
        }

        startTransition(() => {
            router.push(`/products?${params.toString()}`);
        });
    }

    return (
        <Card className="bg-[var(--card)] border-[var(--border)]">
            <CardHeader className="pb-3">
                <CardTitle className="text-base font-semibold">Price Range</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Slider
                        min={priceRange.min}
                        max={priceRange.max}
                        step={1}
                        value={[localMin, localMax]}
                        onValueChange={handlePriceChange}
                        onValueCommit={applyFilter}
                        className="w-full"
                        disabled={isPending}
                    />
                    <div className="flex items-center justify-between text-sm text-[var(--muted-foreground)]">
                        <span>${localMin}</span>
                        <span>${localMax}</span>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
