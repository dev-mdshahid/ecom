"use client";

import { Check, X, Sparkles, Award, Crown, Trophy, Star, Shield, Zap } from "lucide-react";
import { TProductComparison } from "@/features/landing/types";

type TProductComparisonProps = {
    comparison: TProductComparison;
};

function OurValueDisplay({ value, isHighlight }: { value: string | boolean; isHighlight?: boolean }) {
    if (typeof value === "boolean") {
        return value ? (
            <div className="flex items-center justify-center">
                <div className="relative">
                    <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-md" />
                    <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-emerald-400 via-emerald-500 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/25">
                        <Check className="w-5 h-5 text-white" strokeWidth={3} />
                    </div>
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-center">
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-gray-100 flex items-center justify-center">
                    <X className="w-5 h-5 text-gray-400" strokeWidth={2.5} />
                </div>
            </div>
        );
    }
    return (
        <span className={`text-sm md:text-base font-bold ${isHighlight ? 'text-emerald-600' : 'text-[var(--foreground)]'}`}>
            {value}
        </span>
    );
}

function CompetitorValueDisplay({ value }: { value: string | boolean }) {
    if (typeof value === "boolean") {
        return value ? (
            <div className="flex items-center justify-center">
                <div className="w-7 h-7 md:w-8 md:h-8 rounded-full bg-emerald-50/80 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-emerald-400" strokeWidth={2} />
                </div>
            </div>
        ) : (
            <div className="flex items-center justify-center">
                <X className="w-4 h-4 text-gray-300" strokeWidth={2} />
            </div>
        );
    }
    return (
        <span className="text-sm md:text-base text-gray-400 font-medium">
            {value}
        </span>
    );
}

export function ProductComparison({ comparison }: TProductComparisonProps) {
    return (
        <section className="w-full py-12 md:py-20 lg:py-28 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/60 via-orange-50/40 to-transparent" />
            <div className="absolute top-20 left-0 w-72 md:w-96 h-72 md:h-96 bg-[var(--primary)]/8 rounded-full blur-3xl -translate-x-1/2" />
            <div className="absolute bottom-20 right-0 w-72 md:w-96 h-72 md:h-96 bg-emerald-400/8 rounded-full blur-3xl translate-x-1/2" />
            
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Mobile First */}
                <div className="text-center mb-8 md:mb-14">
                    <div className="flex items-center justify-center gap-1 mb-4">
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" />
                        <Star className="w-5 h-5 md:w-6 md:h-6 text-amber-500" fill="currentColor" />
                        <Star className="w-4 h-4 md:w-5 md:h-5 text-amber-400" fill="currentColor" />
                    </div>
                    
                    <span className="inline-flex items-center gap-2 px-4 py-2 mb-4 md:mb-5 text-[10px] md:text-xs font-bold tracking-widest text-[var(--primary)] bg-white/90 backdrop-blur-sm rounded-full border border-[var(--primary)]/20 shadow-sm uppercase">
                        <Award className="w-3.5 h-3.5 md:w-4 md:h-4" />
                        Industry Leading
                    </span>
                    
                    <h2 className="text-xl md:text-3xl lg:text-4xl font-extrabold text-[var(--foreground)] mb-2 md:mb-3 tracking-tight">
                        {comparison.sectionTitle}
                    </h2>
                    <p className="text-[var(--muted-foreground)] text-sm md:text-base max-w-xl mx-auto">
                        {comparison.sectionSubtitle}
                    </p>
                </div>

                {/* Comparison Table - Mobile First */}
                <div className="max-w-3xl mx-auto">
                    {/* Table Header */}
                    <div className="grid grid-cols-[1fr_1fr_1fr] gap-1 md:gap-2">
                        {/* Empty Corner */}
                        <div className="p-2 md:p-4"></div>
                        
                        {/* Our Brand Column Header */}
                        <div className="relative">
                            {/* Winner Badge */}
                            <div className="absolute -top-3 md:-top-4 left-1/2 -translate-x-1/2 z-10">
                                <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-500 text-white text-[9px] md:text-xs font-bold px-2.5 md:px-4 py-1 md:py-1.5 rounded-full flex items-center gap-1 shadow-lg shadow-amber-500/25">
                                    <Trophy className="w-3 h-3 md:w-3.5 md:h-3.5" />
                                    <span>WINNER</span>
                                </div>
                            </div>
                            
                            <div className="pt-5 md:pt-7 pb-3 md:pb-4 px-2 md:px-4 text-center bg-gradient-to-b from-[var(--primary)]/15 via-[var(--primary)]/10 to-[var(--primary)]/5 rounded-t-xl md:rounded-t-2xl border-2 border-[var(--primary)]/20">
                                {/* Brand Icon */}
                                <div className="relative inline-block mb-2">
                                    <div className="absolute inset-0 bg-[var(--primary)]/20 rounded-xl blur-lg" />
                                    <div className="relative inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/80 shadow-xl shadow-[var(--primary)]/25">
                                        <Zap className="w-5 h-5 md:w-7 md:h-7 text-white" fill="currentColor" />
                                    </div>
                                </div>
                                
                                <h3 className="font-bold text-xs md:text-base text-[var(--foreground)] leading-tight">
                                    {comparison.ourBrandName}
                                </h3>
                                
                                <div className="inline-flex items-center gap-1 mt-1.5 px-2 py-0.5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full">
                                    <Sparkles className="w-2.5 h-2.5 md:w-3 md:h-3 text-white" />
                                    <span className="text-[9px] md:text-xs font-bold text-white">
                                        Best Choice
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        {/* Competitor Column Header */}
                        <div className="pt-5 md:pt-7 pb-3 md:pb-4 px-2 md:px-4 text-center bg-gradient-to-b from-gray-100/80 to-gray-50/50 rounded-t-xl md:rounded-t-2xl border border-gray-200/50">
                            <div className="inline-flex items-center justify-center w-11 h-11 md:w-14 md:h-14 mb-2 rounded-xl bg-gray-100 border border-gray-200/60">
                                <span className="text-lg md:text-2xl grayscale opacity-70">🏷️</span>
                            </div>
                            
                            <h3 className="font-semibold text-xs md:text-base text-gray-400 leading-tight">
                                {comparison.competitorName}
                            </h3>
                            
                            <span className="inline-block mt-1.5 text-[9px] md:text-xs text-gray-400">
                                Average Competitor
                            </span>
                        </div>
                    </div>

                    {/* Feature Rows */}
                    <div className="space-y-0">
                        {comparison.features.map((feature, index) => {
                            const isOurValueBetter = feature.ourValue === true && feature.competitorValue !== true;
                            const isLast = index === comparison.features.length - 1;
                            
                            return (
                                <div
                                    key={index}
                                    className="grid grid-cols-[1fr_1fr_1fr] gap-1 md:gap-2"
                                >
                                    {/* Feature Label */}
                                    <div className="p-2.5 md:p-4 flex items-center">
                                        <span className="text-[11px] md:text-sm font-semibold text-[var(--foreground)] leading-tight">
                                            {feature.label}
                                        </span>
                                    </div>
                                    
                                    {/* Our Value */}
                                    <div className={`p-2.5 md:p-4 flex items-center justify-center bg-gradient-to-b from-[var(--primary)]/10 to-[var(--primary)]/5 border-x-2 border-[var(--primary)]/20 ${isLast ? 'rounded-b-xl md:rounded-b-2xl border-b-2' : ''}`}>
                                        <OurValueDisplay value={feature.ourValue} isHighlight={isOurValueBetter} />
                                    </div>
                                    
                                    {/* Competitor Value */}
                                    <div className={`p-2.5 md:p-4 flex items-center justify-center bg-gray-50/60 border-x border-gray-200/50 ${isLast ? 'rounded-b-xl md:rounded-b-2xl border-b' : ''}`}>
                                        <CompetitorValueDisplay value={feature.competitorValue} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Winner Footer */}
                    <div className="grid grid-cols-[1fr_1fr_1fr] gap-1 md:gap-2 mt-4 md:mt-6 pt-4 md:pt-5 border-t-2 border-dashed border-gray-200">
                        <div className="p-2 md:p-3 flex items-center">
                            <span className="text-[11px] md:text-sm font-bold text-[var(--foreground)] flex items-center gap-1.5">
                                <Trophy className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-500" />
                                Winner
                            </span>
                        </div>
                        
                        <div className="p-2 md:p-3 flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-[var(--primary)]/20 rounded-full blur-md" />
                                <div className="relative inline-flex items-center gap-1 md:gap-1.5 px-3 md:px-5 py-1.5 md:py-2.5 bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/90 rounded-full shadow-lg shadow-[var(--primary)]/30">
                                    <Crown className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-300" />
                                    <span className="text-[11px] md:text-sm font-bold text-white">
                                        #1 Choice
                                    </span>
                                </div>
                            </div>
                        </div>
                        
                        <div className="p-2 md:p-3 flex items-center justify-center">
                            <span className="text-gray-300">—</span>
                        </div>
                    </div>

                    {/* Trust Badges - Mobile First */}
                    <div className="mt-8 md:mt-12 flex flex-wrap items-center justify-center gap-2 md:gap-3">
                        {[
                            { icon: Check, text: "Based on Market Research", color: "emerald" },
                            { icon: Star, text: "10,000+ Happy Customers", color: "amber" },
                            { icon: Shield, text: "Quality Guaranteed", color: "blue" },
                        ].map((badge, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-1.5 md:gap-2 px-2.5 md:px-4 py-1.5 md:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-gray-200/60 shadow-sm"
                            >
                                <badge.icon 
                                    className={`w-3 h-3 md:w-3.5 md:h-3.5 ${
                                        badge.color === 'emerald' ? 'text-emerald-500' :
                                        badge.color === 'amber' ? 'text-amber-500' : 'text-blue-500'
                                    }`} 
                                    fill={badge.color === 'amber' ? 'currentColor' : 'none'} 
                                />
                                <span className="text-[10px] md:text-xs font-medium text-gray-600">
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
