"use client";

import { products } from "../data";
import { ProductCard } from "@/components/shared/product-card";

export function ProductShowcase() {
    return (
        <section id="products" className="py-20 md:py-28 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Our Premium Collection
                    </h2>
                    <p className="text-base md:text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Carefully curated baby essentials designed with love and certified
                        for safety
                    </p>
                </div>

                {/* Products Grid - 2 cols mobile, 2 cols tablet, 3 cols desktop */}
                <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <ProductCard key={product.id} product={product} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
