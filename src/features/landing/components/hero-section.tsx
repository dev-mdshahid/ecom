"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-[var(--background)] via-[var(--muted)] to-[var(--background)] py-20 md:py-32">
            {/* Decorative blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[var(--secondary)] opacity-20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[var(--primary)] opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Badge */}
                    <div className="flex justify-center mb-6 animate-fade-in">
                        <Badge
                            variant="secondary"
                            className="px-4 py-2 text-sm font-medium bg-[var(--secondary)] text-[var(--secondary-foreground)] border-none"
                        >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Trusted by 10,000+ Parents
                        </Badge>
                    </div>

                    {/* Headline */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[var(--foreground)] mb-6 animate-fade-in-up">
                        Gentle Care for Your
                        <span className="block mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-foreground)] bg-clip-text text-transparent">
                            Little One
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-[var(--muted-foreground)] mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up animation-delay-200">
                        Hospital-grade safety, designed for home comfort. Discover premium
                        baby care essentials that make parenting easier and safer.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-fade-in-up animation-delay-400">
                        <Button
                            asChild
                            size="lg"
                            className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white px-8 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <Link href="#products">
                                Shop Now
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="px-8 py-6 text-lg rounded-full border-2 border-[var(--border)] hover:bg-[var(--card)] transition-all duration-300"
                        >
                            <Link href="#how-it-works">Learn More</Link>
                        </Button>
                    </div>

                    {/* Trust Signals */}
                    <div className="flex flex-wrap justify-center items-center gap-8 text-sm text-[var(--muted-foreground)] animate-fade-in-up animation-delay-600">
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-[var(--primary)]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>30-Day Guarantee</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-[var(--primary)]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Free Shipping Over $50</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <svg
                                className="w-5 h-5 text-[var(--primary)]"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            <span>Hospital-Grade Safety</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
