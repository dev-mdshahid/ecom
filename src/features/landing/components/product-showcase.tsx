"use client";

import { products } from "../data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function ProductShowcase() {
    return (
        <section id="products" className="py-20 md:py-28 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Our Premium Collection
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Carefully curated baby essentials designed with love and certified
                        for safety
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {products.map((product, index) => (
                        <Card
                            key={product.id}
                            className="group relative overflow-hidden bg-[var(--card)] border-[var(--border)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Badge */}
                            {product.badge && (
                                <div className="absolute top-4 right-4 z-10">
                                    <Badge className="bg-[var(--primary)] text-white border-none px-3 py-1">
                                        {product.badge}
                                    </Badge>
                                </div>
                            )}

                            {/* Product Image */}
                            <div className="relative h-64 bg-gradient-to-br from-[var(--muted)] to-[var(--background)] overflow-hidden">
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-48 h-48 rounded-full bg-[var(--secondary)] opacity-30 blur-2xl" />
                                </div>
                                <div className="relative z-10 h-full flex items-center justify-center p-8">
                                    {/* Placeholder - Replace with actual images */}
                                    <div className="w-full h-full flex items-center justify-center text-6xl opacity-50">
                                        {index === 0 && "✂️"}
                                        {index === 1 && "👃"}
                                        {index === 2 && "💅"}
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="pb-4">
                                <CardTitle className="text-2xl font-bold text-[var(--foreground)]">
                                    {product.name}
                                </CardTitle>
                                <p className="text-sm text-[var(--primary)] font-medium">
                                    {product.tagline}
                                </p>
                            </CardHeader>

                            <CardContent className="space-y-6">
                                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Features */}
                                <ul className="space-y-2">
                                    {product.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="flex items-start gap-2 text-sm text-[var(--foreground)]"
                                        >
                                            <Check className="w-4 h-4 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Price & CTA */}
                                <div className="flex items-center justify-between pt-4 border-t border-[var(--border)]">
                                    <div>
                                        <span className="text-3xl font-bold text-[var(--foreground)]">
                                            ${product.price}
                                        </span>
                                    </div>
                                    <Button
                                        asChild
                                        className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-full"
                                    >
                                        <Link href={`/products/${product.id}`}>Add to Cart</Link>
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
