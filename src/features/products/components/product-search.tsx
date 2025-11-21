"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition, useState } from "react";

export function ProductSearch() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [isPending, startTransition] = useTransition();
    const currentSearch = searchParams.get("search") || "";

    // Local state to track input value without triggering navigation
    const [searchValue, setSearchValue] = useState(currentSearch);

    function performSearch() {
        const params = new URLSearchParams(searchParams.toString());
        if (searchValue.trim()) {
            params.set("search", searchValue.trim());
        } else {
            params.delete("search");
        }
        // Reset to page 1 when searching
        params.delete("page");

        startTransition(() => {
            router.push(`/products?${params.toString()}`);
        });
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === "Enter") {
            performSearch();
        }
    }

    return (
        <div className="relative w-full flex gap-2">
            <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                <Input
                    type="text"
                    placeholder="Search products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={handleKeyDown}
                    className="pl-9 bg-[var(--card)] border-[var(--border)] text-sm"
                    disabled={isPending}
                />
            </div>
            <Button
                onClick={performSearch}
                disabled={isPending}
                className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white shrink-0"
                size="default"
            >
                <Search className="w-4 h-4 md:mr-2" />
                <span className="hidden md:inline">Search</span>
            </Button>
        </div>
    );
}
