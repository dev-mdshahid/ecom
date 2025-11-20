"use client";

import { stats } from "../data";
import { Users, Package, Star, Shield, LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
    users: Users,
    package: Package,
    star: Star,
    "shield-check": Shield,
};

export function StatsBanner() {
    return (
        <section className="py-16 bg-gradient-to-r from-[var(--primary)] to-[var(--accent-foreground)] relative overflow-hidden">
            {/* Decorative Elements */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    {stats.map((stat, index) => {
                        const Icon = iconMap[stat.icon];
                        return (
                            <div
                                key={stat.id}
                                className="text-center group"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                {/* Icon */}
                                {Icon && (
                                    <div className="flex justify-center mb-3">
                                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-white" strokeWidth={2} />
                                        </div>
                                    </div>
                                )}

                                {/* Value */}
                                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                    {stat.value}
                                </div>

                                {/* Label */}
                                <div className="text-sm md:text-base text-white/90 font-medium">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
