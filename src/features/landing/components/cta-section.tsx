"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export function CTASection() {
    return (
        <section className="py-20 md:py-28 bg-gradient-to-br from-[var(--primary)] via-[var(--accent-foreground)] to-[var(--primary)] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center">
                    {/* Icon */}
                    <div className="flex justify-center mb-6">
                        <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                            <Sparkles className="w-8 h-8 text-white" strokeWidth={2} />
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                        Ready to Give Your Baby the Best?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join 10,000+ happy parents who trust BabyNest for safe, gentle, and
                        effective baby care products. Shop now with our 30-day guarantee.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-[var(--primary)] hover:bg-white/90 px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold"
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
                            className="px-8 py-6 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-all duration-300"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>

                    {/* Trust Signal */}
                    <p className="text-white/80 text-sm mt-8">
                        ✓ Free Shipping Over $50 · ✓ 30-Day Money-Back Guarantee · ✓
                        Hospital-Grade Safety
                    </p>
                </div>
            </div>
        </section>
    );
}
