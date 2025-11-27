"use client";

import { Check, X, Sparkles, Award, Crown, Trophy, Star, Shield } from "lucide-react";
import { TProductComparison } from "@/features/landing/types";

type TProductComparisonProps = {
    comparison: TProductComparison;
};

function OurValueDisplay({ value, isHighlight }: { value: string | boolean; isHighlight?: boolean }) {
    if (typeof value === "boolean") {
        return value ? (
            <div className="flex items-center justify-center">
                <div className="relative">
                    <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center shadow-md shadow-emerald-200/50">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-white" strokeWidth={3} />
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-center">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="w-4 h-4 md:w-5 md:h-5 text-gray-400" strokeWidth={2.5} />
                </div>
            </div>
        );
    }
    return (
        <span className={`text-sm md:text-base font-semibold ${isHighlight ? 'text-emerald-600' : 'text-[var(--foreground)]'}`}>
            {value}
        </span>
    );
}

function CompetitorValueDisplay({ value }: { value: string | boolean }) {
    if (typeof value === "boolean") {
        return value ? (
            <div className="flex items-center justify-center">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-emerald-400" strokeWidth={2} />
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-center">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                    <X className="w-4 h-4 text-gray-300" strokeWidth={2} />
                </div>
            </div>
        );
    }
    return (
        <span className="text-sm md:text-base text-gray-400">
            {value}
        </span>
    );
}

export function ProductComparison({ comparison }: TProductComparisonProps) {
    return (
        <section className="w-full py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Premium Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-[var(--primary)]/5 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-tl from-[var(--secondary)]/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 md:mb-14">
                    <div className="flex items-center justify-center gap-2 mb-5">
                        <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                        <Star className="w-4 h-4 text-amber-400" fill="currentColor" />
                    </div>
                    
                    <span className="inline-flex items-center gap-2 px-5 py-2 mb-5 text-xs font-bold tracking-widest text-[var(--foreground)] bg-white rounded-full border border-gray-200 shadow-sm uppercase">
                        <Award className="w-4 h-4 text-[var(--primary)]" />
                        Industry Leading
                    </span>
                    
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-3">
                        {comparison.sectionTitle}
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm md:text-base max-w-xl mx-auto">
                        {comparison.sectionSubtitle}
                    </p>
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto">
                    {/* Main Table Card */}
                    <div className="relative bg-white rounded-2xl md:rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
                        {/* Top gradient accent */}
                        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--primary)] via-[var(--secondary)] to-[var(--primary)]"></div>
                        
                        {/* Table Header */}
                        <div className="grid grid-cols-[1.3fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] border-b border-gray-100">
                            {/* Features Label */}
                            <div className="p-4 md:p-6 flex items-end">
                                <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">
                                    Features
                                </span>
                            </div>
                            
                            {/* Our Brand Column Header */}
                            <div className="relative p-4 md:p-6 bg-gradient-to-b from-[var(--primary)]/8 to-[var(--primary)]/3">
                                {/* Winner Badge - Properly positioned */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px">
                                    <div className="bg-gradient-to-r from-amber-400 to-amber-500 text-white text-[10px] md:text-xs font-bold px-3 md:px-4 py-1 rounded-b-lg flex items-center gap-1 shadow-md">
                                        <span>⭐</span>
                                        <span>WINNER</span>
                                    </div>
                                </div>
                                
                                <div className="text-center pt-5 md:pt-6">
                                    {/* Brand Icon */}
                                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 shadow-lg">
                                        <Trophy className="w-6 h-6 md:w-8 md:h-8 text-white" />
                                    </div>
                                    
                                    <h3 className="font-bold text-sm md:text-lg text-[var(--foreground)]">
                                        {comparison.ourBrandName}
                                    </h3>
                                    
                                    <div className="inline-flex items-center gap-1 mt-1.5 px-2.5 py-0.5 bg-emerald-50 rounded-full border border-emerald-100">
                                        <Sparkles className="w-3 h-3 text-emerald-500" />
                                        <span className="text-[10px] md:text-xs font-semibold text-emerald-600">
                                            Best Choice
                                        </span>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Competitor Column Header */}
                            <div className="p-4 md:p-6 bg-gray-50/50">
                                <div className="text-center pt-5 md:pt-6">
                                    <div className="inline-flex items-center justify-center w-12 h-12 md:w-16 md:h-16 mb-2 md:mb-3 rounded-xl md:rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 border border-gray-200">
                                        <span className="text-xl md:text-2xl">🏷️</span>
                                    </div>
                                    
                                    <h3 className="font-semibold text-sm md:text-lg text-gray-400">
                                        {comparison.competitorName}
                                    </h3>
                                    
                                    <span className="inline-block mt-1.5 text-[10px] md:text-xs text-gray-400">
                                        Average Competitor
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Feature Rows */}
                        <div className="divide-y divide-gray-50">
                            {comparison.features.map((feature, index) => {
                                const isOurValueBetter = feature.ourValue === true && feature.competitorValue !== true;
                                
                                return (
                                    <div
                                        key={index}
                                        className="grid grid-cols-[1.3fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] hover:bg-gray-50/50 transition-colors"
                                    >
                                        {/* Feature Label */}
                                        <div className="p-3.5 md:p-4 flex items-center">
                                            <span className="text-xs md:text-sm font-medium text-[var(--foreground)]">
                                                {feature.label}
                                            </span>
                                        </div>
                                        
                                        {/* Our Value */}
                                        <div className="p-3.5 md:p-4 flex items-center justify-center bg-[var(--primary)]/[0.04]">
                                            <OurValueDisplay value={feature.ourValue} isHighlight={isOurValueBetter} />
                                        </div>
                                        
                                        {/* Competitor Value */}
                                        <div className="p-3.5 md:p-4 flex items-center justify-center bg-gray-50/30">
                                            <CompetitorValueDisplay value={feature.competitorValue} />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Winner Footer */}
                        <div className="grid grid-cols-[1.3fr_1fr_1fr] md:grid-cols-[1.6fr_1fr_1fr] border-t border-gray-100 bg-gradient-to-r from-gray-50/50 to-transparent">
                            <div className="p-4 md:p-5 flex items-center">
                                <span className="text-xs md:text-sm font-bold text-[var(--foreground)]">
                                    Winner
                                </span>
                            </div>
                            
                            <div className="p-4 md:p-5 flex items-center justify-center bg-[var(--primary)]/[0.06]">
                                <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--primary)] rounded-full shadow-lg shadow-[var(--primary)]/25">
                                    <Crown className="w-4 h-4 text-amber-300" />
                                    <span className="text-xs md:text-sm font-bold text-white">
                                        #1 Choice
                                    </span>
                                </div>
                            </div>
                            
                            <div className="p-4 md:p-5 flex items-center justify-center bg-gray-50/30">
                                <span className="text-gray-300">—</span>
                            </div>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="mt-8 md:mt-10 flex flex-wrap items-center justify-center gap-3 md:gap-4">
                        {[
                            { icon: Check, text: "Based on Market Research", color: "emerald" },
                            { icon: Star, text: "10,000+ Happy Customers", color: "amber" },
                            { icon: Shield, text: "Quality Guaranteed", color: "blue" },
                        ].map((badge, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-100 shadow-sm"
                            >
                                <badge.icon 
                                    className={`w-4 h-4 ${
                                        badge.color === 'emerald' ? 'text-emerald-500' :
                                        badge.color === 'amber' ? 'text-amber-500' : 'text-blue-500'
                                    }`} 
                                    fill={badge.color === 'amber' ? 'currentColor' : 'none'} 
                                />
                                <span className="text-xs md:text-sm font-medium text-[var(--muted-foreground)]">
                                    {badge.text}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
