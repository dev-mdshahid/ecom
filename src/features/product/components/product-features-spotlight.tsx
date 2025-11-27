"use client";

import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";

export type TSpotlightFeature = {
    icon: string;
    title: string;
    description: string;
    highlight?: string;
};

type TProductFeaturesSpotlightProps = {
    features: TSpotlightFeature[];
    productName: string;
    productImage?: string;
};

// Type-safe Lucide icon names
type IconName = keyof typeof LucideIcons;

// Dynamic Lucide icon component resolver
function DynamicIcon({ name, className }: { name: string; className?: string }) {
    const IconComponent = LucideIcons[name as IconName] as LucideIcon | undefined;
    if (!IconComponent || typeof IconComponent !== "function") {
        const FallbackIcon = LucideIcons.Star;
        return <FallbackIcon className={className} />;
    }
    return <IconComponent className={className} />;
}

export function ProductFeaturesSpotlight({
    features,
    productName,
}: TProductFeaturesSpotlightProps) {
    // Split features into left and right columns for desktop
    const leftFeatures = features.filter((_, i) => i % 2 === 0);
    const rightFeatures = features.filter((_, i) => i % 2 === 1);

    return (
        <section className="w-full pt-12 md:pt-16 lg:pt-20 overflow-hidden">
            <div className="container mx-auto px-4">
                {/* Section Header - Enhanced for Mobile */}
                <div className="text-center mb-8 md:mb-14 animate-fade-in relative">
                    {/* Decorative background elements for mobile */}
                    <div className="lg:hidden absolute -top-6 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-br from-[var(--primary)]/10 to-[var(--secondary)]/20 rounded-full blur-3xl"></div>
                    
                    <div className="relative">
                        <span className="lg:hidden inline-block px-4 py-1.5 mb-4 text-xs font-semibold tracking-wider text-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/10 via-[var(--secondary)]/20 to-[var(--primary)]/10 rounded-full border border-[var(--primary)]/20 uppercase">
                            ✨ Premium Features
                        </span>
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[var(--foreground)] mb-3">
                            Up Close & Personal
                        </h2>
                        <p className="text-[var(--muted-foreground)] text-sm md:text-base max-w-xl mx-auto">
                            Discover what makes the {productName} special with features designed for your comfort and peace of mind.
                        </p>
                    </div>
                </div>

                {/* Mobile Layout - Premium Redesign */}
                <div className="lg:hidden">
                    {/* Central Product Visual for Mobile */}
                    <div className="relative flex items-center justify-center mb-8">
                        {/* Animated Glow Background */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-48 h-48 bg-gradient-to-br from-[var(--secondary)]/30 via-[var(--primary)]/20 to-[var(--secondary)]/30 rounded-full blur-3xl animate-pulse"></div>
                        </div>
                        
                        {/* Product Container */}
                        <div className="relative z-10 w-40 h-40 rounded-3xl bg-gradient-to-br from-[#f5e6f0] via-white to-[#e8d4e8] shadow-2xl flex items-center justify-center border border-white/50 overflow-hidden">
                            {/* Inner glow ring */}
                            <div className="absolute inset-2 rounded-2xl border border-[var(--primary)]/10"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-[var(--primary)]/5 to-transparent"></div>
                            
                            {/* Product Emoji */}
                            <div className="text-6xl relative z-10">🐨</div>
                        </div>
                        
                        {/* Floating decorative dots */}
                        <div className="absolute top-2 right-1/4 w-3 h-3 bg-[var(--primary)]/40 rounded-full animate-pulse"></div>
                        <div className="absolute bottom-4 left-1/4 w-2 h-2 bg-[var(--secondary)] rounded-full animate-pulse animation-delay-200"></div>
                        <div className="absolute top-1/3 left-8 w-2 h-2 bg-[var(--primary)]/30 rounded-full animate-pulse animation-delay-400"></div>
                    </div>

                    {/* Feature Cards - Premium Grid Layout */}
                    <div className="grid grid-cols-1 gap-4">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="group relative animate-fade-in-up"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Card with premium styling */}
                                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white via-white to-[var(--secondary)]/5 border border-[var(--border)] shadow-lg hover:shadow-xl transition-all duration-500">
                                    {/* Top accent gradient line */}
                                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[var(--primary)]/50 to-transparent"></div>
                                    
                                    {/* Subtle corner glow */}
                                    <div className="absolute -top-12 -right-12 w-24 h-24 bg-[var(--primary)]/10 rounded-full blur-2xl group-hover:bg-[var(--primary)]/20 transition-colors duration-500"></div>
                                    
                                    <div className="relative p-5">
                                        <div className="flex items-start gap-4">
                                            {/* Enhanced Icon Container */}
                                            <div className="relative flex-shrink-0">
                                                {/* Outer glow ring */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/30 rounded-2xl blur-md scale-110 group-hover:scale-125 transition-transform duration-500"></div>
                                                
                                                {/* Icon box */}
                                                <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 via-white to-[var(--secondary)]/20 flex items-center justify-center border border-[var(--primary)]/20 group-hover:border-[var(--primary)]/40 transition-all duration-300 shadow-sm">
                                                    <DynamicIcon
                                                        name={feature.icon}
                                                        className="w-7 h-7 text-[var(--primary)] group-hover:scale-110 transition-transform duration-300"
                                                    />
                                                </div>
                                                
                                                {/* Small decorative dot */}
                                                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </div>
                                            
                                            {/* Content */}
                                            <div className="flex-1 min-w-0 pt-1">
                                                <h3 className="font-bold text-[var(--foreground)] text-base mb-2 group-hover:text-[var(--primary)] transition-colors duration-300">
                                                    {feature.title}
                                                </h3>
                                                <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                                    {feature.description}
                                                </p>
                                                
                                                {/* Highlight badge */}
                                                {feature.highlight && (
                                                    <div className="mt-3">
                                                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/20 px-3 py-1.5 rounded-full border border-[var(--primary)]/20">
                                                            <LucideIcons.Sparkles className="w-3 h-3" />
                                                            {feature.highlight}
                                                        </span>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Bottom accent line */}
                                    <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-[var(--border)] to-transparent"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Trust Badges - Premium Style */}
                    <div className="mt-10 relative">
                        {/* Background decoration */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/5 to-transparent rounded-2xl"></div>
                        
                        <div className="relative py-6 px-4">
                            <div className="flex items-center justify-center gap-2 mb-4">
                                <div className="h-px w-8 bg-gradient-to-r from-transparent to-[var(--primary)]/30"></div>
                                <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">Trusted by Parents</span>
                                <div className="h-px w-8 bg-gradient-to-l from-transparent to-[var(--primary)]/30"></div>
                            </div>
                            
                            <div className="flex flex-wrap items-center justify-center gap-4">
                                {[
                                    { icon: LucideIcons.Shield, text: "Safety Certified" },
                                    { icon: LucideIcons.Award, text: "Premium Quality" },
                                    { icon: LucideIcons.Heart, text: "Made with Love" },
                                ].map((badge, index) => (
                                    <div
                                        key={index}
                                        className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-[var(--border)] shadow-sm"
                                    >
                                        <badge.icon className="w-4 h-4 text-[var(--primary)]" />
                                        <span className="text-xs font-medium text-[var(--foreground)]">{badge.text}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Layout - Center Image with Features on Sides */}
                <div className="hidden lg:grid lg:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">
                    {/* Left Features */}
                    <div className="space-y-8">
                        {leftFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group text-right animate-fade-in"
                                style={{ animationDelay: `${index * 150}ms` }}
                            >
                                <div className="flex items-start gap-4 justify-end">
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                        {feature.highlight && (
                                            <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/20 px-3 py-1.5 rounded-full border border-[var(--primary)]/20">
                                                <LucideIcons.Sparkles className="w-3 h-3" />
                                                {feature.highlight}
                                            </span>
                                        )}
                                    </div>
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/20 to-[var(--primary)]/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-[var(--border)]">
                                        <DynamicIcon
                                            name={feature.icon}
                                            className="w-7 h-7 text-[var(--primary)]"
                                        />
                                    </div>
                                </div>
                                {/* Connector Line */}
                                <div className="flex justify-end mt-3">
                                    <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[var(--primary)]/20 to-[var(--primary)]/40 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Center Product Visual */}
                    <div className="relative flex items-center justify-center">
                        {/* Background Glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[var(--secondary)]/20 via-[var(--primary)]/10 to-[var(--secondary)]/20 rounded-full blur-3xl opacity-60"></div>
                        
                        {/* Product Image Container */}
                        <div className="relative z-10 w-full aspect-square max-w-[320px] rounded-3xl bg-gradient-to-br from-[#f5e6f0] via-white to-[#e8d4e8] shadow-xl flex items-center justify-center border border-[var(--border)]/50 overflow-hidden">
                            {/* Decorative Rings */}
                            <div className="absolute inset-4 rounded-2xl border border-[var(--primary)]/10"></div>
                            <div className="absolute inset-8 rounded-xl border border-[var(--primary)]/5"></div>
                            
                            {/* Product Emoji Placeholder */}
                            <div className="text-8xl animate-pulse">🐨</div>
                        </div>

                        {/* Floating Decorative Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-[var(--secondary)] rounded-full opacity-40 animate-pulse"></div>
                        <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-[var(--primary)]/20 rounded-full opacity-30 animate-pulse animation-delay-200"></div>
                    </div>

                    {/* Right Features */}
                    <div className="space-y-8">
                        {rightFeatures.map((feature, index) => (
                            <div
                                key={index}
                                className="group text-left animate-fade-in"
                                style={{ animationDelay: `${(index + leftFeatures.length) * 150}ms` }}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/20 to-[var(--primary)]/5 flex items-center justify-center group-hover:scale-110 group-hover:shadow-lg transition-all duration-300 border border-[var(--border)]">
                                        <DynamicIcon
                                            name={feature.icon}
                                            className="w-7 h-7 text-[var(--primary)]"
                                        />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-[var(--foreground)] text-lg mb-2 group-hover:text-[var(--primary)] transition-colors">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                        {feature.highlight && (
                                            <span className="inline-flex items-center gap-1.5 mt-2 text-xs font-semibold text-[var(--primary)] bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/20 px-3 py-1.5 rounded-full border border-[var(--primary)]/20">
                                                <LucideIcons.Sparkles className="w-3 h-3" />
                                                {feature.highlight}
                                            </span>
                                        )}
                                    </div>
                                </div>
                                {/* Connector Line */}
                                <div className="flex justify-start mt-3">
                                    <div className="w-16 h-[2px] bg-gradient-to-l from-transparent via-[var(--primary)]/20 to-[var(--primary)]/40 rounded-full"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Desktop Trust Indicator */}
                <div className="hidden lg:block mt-16 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--primary)]/5 to-transparent rounded-2xl"></div>
                    
                    <div className="relative py-6 px-4">
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <div className="h-px w-12 bg-gradient-to-r from-transparent to-[var(--primary)]/30"></div>
                            <span className="text-xs font-semibold text-[var(--muted-foreground)] uppercase tracking-wider">Trusted by 10,000+ Parents</span>
                            <div className="h-px w-12 bg-gradient-to-l from-transparent to-[var(--primary)]/30"></div>
                        </div>
                        
                        <div className="flex flex-wrap items-center justify-center gap-6">
                            {[
                                { icon: LucideIcons.Shield, text: "Safety Certified" },
                                { icon: LucideIcons.Award, text: "Premium Quality" },
                                { icon: LucideIcons.Heart, text: "Made with Love" },
                            ].map((badge, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-2 px-5 py-2.5 bg-white rounded-full border border-[var(--border)] shadow-sm hover:shadow-md hover:border-[var(--primary)]/30 transition-all duration-300"
                                >
                                    <badge.icon className="w-5 h-5 text-[var(--primary)]" />
                                    <span className="text-sm font-medium text-[var(--foreground)]">{badge.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
