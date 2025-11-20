"use client";

import { features } from "../data";
import { Card, CardContent } from "@/components/ui/card";
import {
    Shield,
    HeartPulse,
    Truck,
    CalendarCheck,
    LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    "shield-check": Shield,
    "heart-pulse": HeartPulse,
    truck: Truck,
    "calendar-check": CalendarCheck,
};

export function WhyChooseUs() {
    return (
        <section className="py-20 md:py-28 bg-[var(--card)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Why Parents Choose BabyNest
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Your baby deserves the best. That's why we go above and beyond to
                        deliver quality, safety, and peace of mind.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {features.map((feature, index) => {
                        const Icon = iconMap[feature.icon];
                        return (
                            <Card
                                key={feature.id}
                                className="group relative overflow-hidden bg-gradient-to-br from-[var(--background)] to-[var(--muted)] border-[var(--border)] hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                                    {/* Icon Container */}
                                    <div className="relative">
                                        <div className="absolute inset-0 bg-[var(--primary)] opacity-10 rounded-full blur-xl scale-150 group-hover:scale-175 transition-transform duration-500" />
                                        <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:rotate-6">
                                            {Icon && (
                                                <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                                            )}
                                        </div>
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-xl font-bold text-[var(--foreground)]">
                                        {feature.title}
                                    </h3>
                                    <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
