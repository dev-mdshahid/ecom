import { Metadata } from "next";
import { ProductCard } from "@/components/shared/product-card";
import { ProductSearch } from "@/features/products/components/product-search";
import { ProductSort } from "@/features/products/components/product-sort";
import { PriceFilter } from "@/features/products/components/price-filter";
import { filterAndSortProducts } from "@/features/products/utils";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";

type TProductsPageProps = {
    searchParams: Promise<{
        search?: string;
        sort?: "price-asc" | "price-desc" | "name";
        minPrice?: string;
        maxPrice?: string;
    }>;
};

export async function generateMetadata({
    searchParams,
}: TProductsPageProps): Promise<Metadata> {
    const params = await searchParams;
    const search = params.search;

    return {
        title: search
            ? `${search} - Baby Products | BabyNest`
            : "All Products - Premium Baby Care Essentials | BabyNest",
        description:
            "Shop our complete collection of hospital-grade baby care products. Safe, certified, and trusted by 10,000+ parents. Free shipping on orders over $50.",
        openGraph: {
            title: "Premium Baby Care Products | BabyNest",
            description:
                "Discover safe, certified baby essentials including hair trimmers, nasal aspirators, and nail grinders.",
        },
    };
}

export default async function ProductsPage({ searchParams }: TProductsPageProps) {
    const params = await searchParams;

    const filteredProducts = filterAndSortProducts({
        search: params.search,
        sortBy: params.sort,
        minPrice: params.minPrice ? Number(params.minPrice) : undefined,
        maxPrice: params.maxPrice ? Number(params.maxPrice) : undefined,
    });

    const hasActiveFilters =
        params.search || params.sort || params.minPrice || params.maxPrice;

    return (
        <div className="min-h-screen bg-[var(--background)]">
            {/* Hero Section */}
            <section className="bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 text-white py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl">
                        <h1 className="text-3xl md:text-5xl font-bold mb-4">
                            Premium Baby Essentials
                        </h1>
                        <p className="text-base md:text-lg opacity-90">
                            Explore our complete collection of hospital-grade baby care
                            products. Safe, certified, and designed with love.
                        </p>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8 md:py-12">
                <div className="container mx-auto px-4">
                    {/* Mobile-First Toolbar */}
                    <div className="mb-6 md:mb-8">
                        <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                            {/* Search - Full width on mobile */}
                            <div className="w-full md:flex-1 md:max-w-md">
                                <ProductSearch />
                            </div>

                            {/* Sort & Filter Row */}
                            <div className="flex gap-2 items-center">
                                {/* Sort Dropdown */}
                                <div className="flex-1 md:flex-initial">
                                    <ProductSort />
                                </div>

                                {/* Mobile Filter Button */}
                                <Sheet>
                                    <SheetTrigger asChild>
                                        <Button
                                            variant="outline"
                                            size="default"
                                            className="gap-2 bg-[var(--card)] border-[var(--border)]"
                                        >
                                            <Filter className="w-4 h-4" />
                                            <span className="hidden sm:inline">Filters</span>
                                            {hasActiveFilters && (
                                                <span className="w-2 h-2 bg-[var(--primary)] rounded-full" />
                                            )}
                                        </Button>
                                    </SheetTrigger>
                                    <SheetContent
                                        side="right"
                                        className="w-[300px] sm:w-[400px] bg-[var(--background)]"
                                    >
                                        <SheetHeader className="mb-6">
                                            <SheetTitle>Filter Products</SheetTitle>
                                            <SheetDescription>
                                                Refine your search with price filters
                                            </SheetDescription>
                                        </SheetHeader>
                                        <div className="space-y-6">
                                            <PriceFilter />
                                        </div>
                                    </SheetContent>
                                </Sheet>
                            </div>
                        </div>

                        {/* Active Filters Summary */}
                        {hasActiveFilters && (
                            <div className="mt-4 flex items-center gap-2 text-sm text-[var(--muted-foreground)]">
                                <span className="font-medium">Active filters:</span>
                                <div className="flex flex-wrap gap-2">
                                    {params.search && (
                                        <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md text-xs">
                                            Search: {params.search}
                                        </span>
                                    )}
                                    {params.sort && (
                                        <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md text-xs">
                                            Sort: {params.sort}
                                        </span>
                                    )}
                                    {(params.minPrice || params.maxPrice) && (
                                        <span className="px-2 py-1 bg-[var(--secondary)] text-[var(--secondary-foreground)] rounded-md text-xs">
                                            Price: ${params.minPrice || "0"} - $
                                            {params.maxPrice || "∞"}
                                        </span>
                                    )}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Desktop Price Filter Sidebar + Products Grid */}
                    <div className="hidden md:grid md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr] gap-8">
                        {/* Desktop Sidebar */}
                        <aside className="space-y-6">
                            <PriceFilter />
                        </aside>

                        {/* Products Grid */}
                        <div>
                            {/* Results Count */}
                            <div className="mb-6">
                                <p className="text-sm text-[var(--muted-foreground)]">
                                    Showing{" "}
                                    <span className="font-semibold text-[var(--foreground)]">
                                        {filteredProducts.length}
                                    </span>{" "}
                                    {filteredProducts.length === 1 ? "product" : "products"}
                                </p>
                            </div>

                            {filteredProducts.length > 0 ? (
                                <div className="grid grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                                    {filteredProducts.map((product, index) => (
                                        <ProductCard
                                            key={product.id}
                                            product={product}
                                            index={index}
                                        />
                                    ))}
                                </div>
                            ) : (
                                <div className="text-center py-20">
                                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--muted)] mb-4">
                                        <X className="w-8 h-8 text-[var(--muted-foreground)]" />
                                    </div>
                                    <h3 className="text-xl font-semibold mb-2 text-[var(--foreground)]">
                                        No products found
                                    </h3>
                                    <p className="text-[var(--muted-foreground)] mb-6">
                                        Try adjusting your filters or search query
                                    </p>
                                    <Button asChild variant="default">
                                        <a href="/products">Clear all filters</a>
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Products Grid (No Sidebar) */}
                    <div className="md:hidden">
                        {/* Results Count */}
                        <div className="mb-4">
                            <p className="text-sm text-[var(--muted-foreground)]">
                                <span className="font-semibold text-[var(--foreground)]">
                                    {filteredProducts.length}
                                </span>{" "}
                                {filteredProducts.length === 1 ? "product" : "products"}
                            </p>
                        </div>

                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-2 gap-4">
                                {filteredProducts.map((product, index) => (
                                    <ProductCard
                                        key={product.id}
                                        product={product}
                                        index={index}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-16">
                                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--muted)] mb-4">
                                    <X className="w-8 h-8 text-[var(--muted-foreground)]" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                                    No products found
                                </h3>
                                <p className="text-sm text-[var(--muted-foreground)] mb-6 px-4">
                                    Try adjusting your filters or search query
                                </p>
                                <Button asChild variant="default">
                                    <a href="/products">Clear all filters</a>
                                </Button>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Trust Section */}
            <section className="bg-[var(--muted)] py-12 md:py-16">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-5xl mx-auto">
                        {[
                            { label: "Hospital-Grade Safety", icon: "🛡️" },
                            { label: "Free Shipping $50+", icon: "🚚" },
                            { label: "30-Day Guarantee", icon: "✅" },
                            { label: "10,000+ Happy Parents", icon: "❤️" },
                        ].map((item, i) => (
                            <div key={i} className="text-center">
                                <div className="text-3xl md:text-4xl mb-2">{item.icon}</div>
                                <p className="text-xs md:text-sm font-medium text-[var(--foreground)]">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
