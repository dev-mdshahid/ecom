import { TProduct } from "@/features/landing/types";
import { products as allProducts } from "@/features/landing/data";

type TFilterOptions = {
    search?: string;
    sortBy?: "price-asc" | "price-desc" | "name";
    minPrice?: number;
    maxPrice?: number;
};

export function filterAndSortProducts(options: TFilterOptions): TProduct[] {
    let filtered = [...allProducts];

    // Search filter
    if (options.search) {
        const searchLower = options.search.toLowerCase();
        filtered = filtered.filter(
            (product) =>
                product.name.toLowerCase().includes(searchLower) ||
                product.description.toLowerCase().includes(searchLower) ||
                product.tagline.toLowerCase().includes(searchLower)
        );
    }

    // Price range filter
    if (options.minPrice !== undefined) {
        filtered = filtered.filter((product) => product.price >= options.minPrice!);
    }
    if (options.maxPrice !== undefined) {
        filtered = filtered.filter((product) => product.price <= options.maxPrice!);
    }

    // Sorting
    if (options.sortBy) {
        filtered.sort((a, b) => {
            switch (options.sortBy) {
                case "price-asc":
                    return a.price - b.price;
                case "price-desc":
                    return b.price - a.price;
                case "name":
                    return a.name.localeCompare(b.name);
                default:
                    return 0;
            }
        });
    }

    return filtered;
}

export function getPriceRange(): { min: number; max: number } {
    const prices = allProducts.map((p) => p.price);
    return {
        min: Math.min(...prices),
        max: Math.max(...prices),
    };
}
