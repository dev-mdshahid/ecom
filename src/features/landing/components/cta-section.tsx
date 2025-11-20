"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles, ShieldCheck, Truck, RefreshCw } from "lucide-react";
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
                    {/* Icon Badge */}
                    <div className="flex justify-center mb-8">
                        <div className="relative">
                            <div className="absolute inset-0 bg-white/30 rounded-2xl blur-lg" />
                            <div className="relative w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl">
                                <Sparkles className="w-10 h-10 text-white" strokeWidth={2.5} />
                            </div>
                        </div>
                    </div>

                    {/* Headline */}
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                        Ready to Give Your Baby the Best?
                    </h2>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Join <span className="font-semibold text-white">10,000+ happy parents</span> who trust BabyNest for safe, gentle, and effective baby care products.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mb-16">
                        <Button
                            asChild
                            size="lg"
                            className="w-full sm:w-fit bg-white text-[var(--primary)] hover:bg-white/90 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 font-semibold group"
                        >
                            <Link href="#products">
                                Shop Now
                                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="w-full sm:w-fit bg-transparent px-10 py-7 text-lg rounded-full border-2 border-white text-white hover:bg-white hover:text-[var(--primary)] transition-all duration-300 font-semibold"
                        >
                            <Link href="/contact">Contact Us</Link>
                        </Button>
                    </div>

                    {/* Trust Badges */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                        <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <Truck className="w-6 h-6 text-white" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">Free Shipping</p>
                                <p className="text-xs text-white/80 mt-1">On orders over $50</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <RefreshCw className="w-6 h-6 text-white" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">30-Day Guarantee</p>
                                <p className="text-xs text-white/80 mt-1">Money-back promise</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                                <ShieldCheck className="w-6 h-6 text-white" strokeWidth={2} />
                            </div>
                            <div>
                                <p className="font-semibold text-white text-sm">Hospital-Grade</p>
                                <p className="text-xs text-white/80 mt-1">Certified safety</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
