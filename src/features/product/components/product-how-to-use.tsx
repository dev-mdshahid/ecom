"use client";

import { THowToUseSection } from "@/features/landing/types";
import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import Image from "next/image";

type TProductHowToUseProps = {
    howToUse: THowToUseSection;
    productName: string;
};

// Type-safe Lucide icon names
type IconName = keyof typeof LucideIcons;

// Dynamic Lucide icon component resolver
function DynamicIcon({ name, className }: { name: string; className?: string }) {
    const IconComponent = LucideIcons[name as IconName] as LucideIcon | undefined;
    if (!IconComponent || typeof IconComponent !== "function") {
        const FallbackIcon = LucideIcons.CheckCircle2;
        return <FallbackIcon className={className} />;
    }
    return <IconComponent className={className} />;
}

export function ProductHowToUse({ howToUse }: TProductHowToUseProps) {
    const { sectionTitle, sectionSubtitle, tagline, steps } = howToUse;

    return (
        <section className="w-full py-10 md:py-16 lg:py-20 overflow-hidden relative">
            {/* Background Decorations - Subtle */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <div className="absolute -top-24 -right-24 w-64 h-64 bg-gradient-to-br from-[var(--secondary)]/15 to-transparent rounded-full blur-3xl"></div>
                <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-gradient-to-tl from-[var(--primary)]/10 to-transparent rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header - Compact for Mobile */}
                <div className="text-center mb-8 md:mb-12 lg:mb-14">
                    {/* Tagline Badge */}
                    {tagline && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1.5 mb-3 bg-gradient-to-r from-[var(--primary)]/10 via-[var(--secondary)]/15 to-[var(--primary)]/10 rounded-full border border-[var(--primary)]/15">
                            <LucideIcons.Sparkles className="w-3.5 h-3.5 text-[var(--primary)]" />
                            <span className="text-[10px] md:text-xs font-semibold tracking-wider text-[var(--primary)] uppercase">
                                {tagline}
                            </span>
                        </div>
                    )}
                    
                    {/* Main Title */}
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-2 md:mb-3">
                        {sectionTitle}
                    </h2>
                    
                    {/* Subtitle */}
                    <p className="text-[var(--muted-foreground)] text-xs sm:text-sm md:text-base max-w-xl mx-auto leading-relaxed px-2">
                        {sectionSubtitle}
                    </p>
                    
                    {/* Decorative line */}
                    <div className="flex items-center justify-center gap-1.5 mt-4">
                        <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--primary)]/30"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-[var(--primary)]/30"></div>
                        <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--primary)]/30"></div>
                    </div>
                </div>

                {/* Steps Container */}
                <div className="max-w-5xl mx-auto">
                    {/* Mobile Layout - Compact Horizontal Cards */}
                    <div className="lg:hidden space-y-4">
                        {steps.map((step, index) => (
                            <div
                                key={step.stepNumber}
                                className="group relative animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Step Card - Horizontal Layout for Mobile */}
                                <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--border)] shadow-md">
                                    <div className="flex">
                                        {/* Left Side - Icon/Image Area */}
                                        <div className="relative w-28 sm:w-36 flex-shrink-0 bg-gradient-to-br from-[#f8f0f5] via-[#fdf8fb] to-[#f5e8f0]">
                                            {/* Step Number - Top Left Corner */}
                                            <div className="absolute top-2 left-2 z-20">
                                                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-br from-[var(--primary)] to-[#5557a0] flex items-center justify-center shadow-md border-2 border-white">
                                                    <span className="text-white font-bold text-xs sm:text-sm">{step.stepNumber}</span>
                                                </div>
                                            </div>
                                            
                                            {/* Decorative background */}
                                            <div className="absolute inset-0">
                                                <div className="absolute top-2 right-2 w-12 h-12 bg-[var(--secondary)]/20 rounded-full blur-xl"></div>
                                                <div className="absolute bottom-2 left-2 w-10 h-10 bg-[var(--primary)]/15 rounded-full blur-lg"></div>
                                            </div>
                                            
                                            {/* Icon/Image Center */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                {step.image ? (
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={step.image}
                                                            alt={step.title}
                                                            fill
                                                            className="object-cover"
                                                        />
                                                    </div>
                                                ) : step.icon ? (
                                                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/50">
                                                        <DynamicIcon
                                                            name={step.icon}
                                                            className="w-7 h-7 sm:w-8 sm:h-8 text-[var(--primary)]"
                                                        />
                                                    </div>
                                                ) : (
                                                    <div className="text-4xl">✨</div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Right Side - Content */}
                                        <div className="flex-1 p-3 sm:p-4 flex flex-col justify-center min-h-[100px] sm:min-h-[120px]">
                                            {/* Highlight Badge - Inline */}
                                            {step.highlight && (
                                                <span className="inline-flex items-center gap-1 self-start px-2 py-0.5 mb-1.5 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/15 rounded-full text-[10px] font-semibold text-[var(--primary)] border border-[var(--primary)]/15">
                                                    <LucideIcons.Star className="w-2.5 h-2.5 fill-[var(--primary)]" />
                                                    {step.highlight}
                                                </span>
                                            )}
                                            
                                            {/* Title */}
                                            <h3 className="text-sm sm:text-base font-bold text-[var(--foreground)] mb-1 leading-tight">
                                                {step.title}
                                            </h3>
                                            
                                            {/* Description */}
                                            <p className="text-[var(--muted-foreground)] text-xs sm:text-sm leading-relaxed line-clamp-3">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Connector - Small Arrow */}
                                {index < steps.length - 1 && (
                                    <div className="flex justify-center py-2">
                                        <LucideIcons.ChevronDown className="w-4 h-4 text-[var(--primary)]/40" />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Desktop Layout - Cards with Arrow Connectors */}
                    <div className="hidden lg:block">
                        <div className="flex items-stretch justify-center gap-4">
                            {steps.map((step, index) => (
                                <div
                                    key={step.stepNumber}
                                    className="group relative animate-fade-in flex items-stretch"
                                    style={{ animationDelay: `${index * 150}ms` }}
                                >
                                    {/* Card - Equal Height with flex */}
                                    <div className="relative overflow-hidden rounded-2xl bg-white border border-[var(--border)] shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-400 flex flex-col w-[280px]">
                                        {/* Image Container - Fixed Height */}
                                        <div className="relative w-full h-44 bg-gradient-to-br from-[#f8f0f5] via-[#fdf8fb] to-[#f5e8f0] overflow-hidden flex-shrink-0">
                                            {/* Background decorations */}
                                            <div className="absolute inset-0">
                                                <div className="absolute top-4 right-4 w-20 h-20 bg-[var(--secondary)]/25 rounded-full blur-2xl group-hover:scale-110 transition-transform duration-500"></div>
                                                <div className="absolute bottom-4 left-4 w-16 h-16 bg-[var(--primary)]/15 rounded-full blur-xl group-hover:scale-110 transition-transform duration-500"></div>
                                            </div>
                                            
                                            {/* Highlight badge - Top Right */}
                                            {step.highlight && (
                                                <div className="absolute top-3 right-3 z-20">
                                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 bg-white/90 backdrop-blur-sm rounded-full text-[11px] font-semibold text-[var(--primary)] border border-[var(--primary)]/15 shadow-sm">
                                                        <LucideIcons.Star className="w-3 h-3 fill-[var(--primary)]" />
                                                        {step.highlight}
                                                    </span>
                                                </div>
                                            )}
                                            
                                            {/* Icon Center */}
                                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                                {step.image ? (
                                                    <div className="relative w-full h-full">
                                                        <Image
                                                            src={step.image}
                                                            alt={step.title}
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                    </div>
                                                ) : step.icon ? (
                                                    <div className="relative">
                                                        <div className="absolute inset-0 bg-[var(--primary)]/15 rounded-full blur-2xl scale-150"></div>
                                                        <div className="relative w-20 h-20 rounded-2xl bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg border border-white/50 group-hover:scale-105 transition-transform duration-300">
                                                            <DynamicIcon
                                                                name={step.icon}
                                                                className="w-10 h-10 text-[var(--primary)]"
                                                            />
                                                        </div>
                                                    </div>
                                                ) : (
                                                    <div className="text-6xl group-hover:scale-105 transition-transform duration-300">✨</div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        {/* Content - Flex grow to fill remaining space */}
                                        <div className="p-5 pt-8 text-center relative flex-grow flex flex-col">
                                            {/* Step Number - Centered above content */}
                                            <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
                                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-[#5557a0] flex items-center justify-center shadow-lg border-4 border-white group-hover:scale-110 transition-transform duration-300">
                                                    <span className="text-white font-bold text-sm">{step.stepNumber}</span>
                                                </div>
                                            </div>
                                            
                                            <h3 className="text-lg font-bold text-[var(--foreground)] mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                                                {step.title}
                                            </h3>
                                            <p className="text-[var(--muted-foreground)] text-sm leading-relaxed flex-grow">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>
                                    
                                    {/* Arrow Connector - Simple Arrow Between Cards */}
                                    {index < steps.length - 1 && (
                                        <div className="flex items-center justify-center px-2 self-center">
                                            <LucideIcons.ArrowRight className="w-6 h-6 text-[var(--primary)]/50" />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom Trust Indicator - Compact */}
                <div className="mt-8 md:mt-12 text-center">
                    <div className="inline-flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 py-3 bg-gradient-to-r from-[var(--primary)]/5 via-[var(--secondary)]/8 to-[var(--primary)]/5 rounded-xl border border-[var(--primary)]/10">
                        {/* Time indicator */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/20 flex items-center justify-center">
                                <LucideIcons.Clock className="w-4 h-4 text-[var(--primary)]" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-[var(--muted-foreground)]">Setup Time</p>
                                <p className="text-xs font-semibold text-[var(--foreground)]">Under 2 Min</p>
                            </div>
                        </div>
                        
                        {/* Divider */}
                        <div className="w-px h-8 bg-[var(--border)]"></div>
                        
                        {/* Results indicator */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/20 flex items-center justify-center">
                                <LucideIcons.Heart className="w-4 h-4 text-[var(--primary)]" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-[var(--muted-foreground)]">Feel Results</p>
                                <p className="text-xs font-semibold text-[var(--foreground)]">Day One</p>
                            </div>
                        </div>
                        
                        {/* Divider */}
                        <div className="w-px h-8 bg-[var(--border)]"></div>
                        
                        {/* Guarantee */}
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[var(--primary)]/15 to-[var(--secondary)]/20 flex items-center justify-center">
                                <LucideIcons.ShieldCheck className="w-4 h-4 text-[var(--primary)]" />
                            </div>
                            <div className="text-left">
                                <p className="text-[10px] text-[var(--muted-foreground)]">Guarantee</p>
                                <p className="text-xs font-semibold text-[var(--foreground)]">60 Days</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
