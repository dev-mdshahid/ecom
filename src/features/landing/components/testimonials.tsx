"use client";

import { testimonials } from "../data";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export function Testimonials() {
    return (
        <section className="py-20 md:py-28 bg-[var(--card)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Loved by Parents Everywhere
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Join thousands of happy parents who trust BabyNest for their little
                        ones
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {testimonials.map((testimonial, index) => (
                        <Card
                            key={testimonial.id}
                            className="bg-gradient-to-br from-[var(--background)] to-[var(--muted)] border-[var(--border)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            <CardContent className="p-6 space-y-4">
                                {/* Rating Stars */}
                                <div className="flex gap-1">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="w-5 h-5 fill-[var(--primary)] text-[var(--primary)]"
                                        />
                                    ))}
                                </div>

                                {/* Testimonial Content */}
                                <p className="text-[var(--foreground)] leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-[var(--border)]">
                                    <Avatar className="w-12 h-12 bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)]">
                                        <AvatarFallback className="text-white font-semibold">
                                            {testimonial.avatar}
                                        </AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold text-[var(--foreground)]">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-[var(--muted-foreground)]">
                                            {testimonial.role}
                                        </p>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
