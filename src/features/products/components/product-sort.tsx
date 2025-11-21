"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function ProductSort() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const currentSort = searchParams.get("sort") || "default";

    function handleSort(value: string) {
        const params = new URLSearchParams(searchParams.toString());
        if (value && value !== "default") {
            params.set("sort", value);
        } else {
            params.delete("sort");
        }

        startTransition(() => {
            router.push(`/products?${params.toString()}`);
        });
    }

    return (
        <Select value={currentSort} onValueChange={handleSort} disabled={isPending}>
            <SelectTrigger className="w-full md:w-[180px] bg-[var(--card)] border-[var(--border)] text-sm">
                <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="default">Default</SelectItem>
                <SelectItem value="price-asc">Price: Low to High</SelectItem>
                <SelectItem value="price-desc">Price: High to Low</SelectItem>
                <SelectItem value="name">Name: A to Z</SelectItem>
            </SelectContent>
        </Select>
    );
}
