"use client";

import * as LucideIcons from "lucide-react";
import { LucideIcon } from "lucide-react";
import { TTrustBar } from "@/features/landing/types";

type TTrustBarProps = {
    trustBar: TTrustBar;
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

export function TrustBar({ trustBar }: TTrustBarProps) {
    // Duplicate items for seamless infinite scroll
    const items = [...trustBar.items, ...trustBar.items];

    return (
        <section className="w-full overflow-hidden bg-[var(--primary)] relative">
            {/* Premium overlay gradients */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/10 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-black/5 pointer-events-none" />
            
            {/* Subtle shine effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[100%] -left-[50%] w-[200%] h-[200%] bg-gradient-to-br from-white/10 via-transparent to-transparent rotate-12 animate-shine" />
            </div>

            {/* Main content container */}
            <div className="relative py-3.5 md:py-4">
                {/* Marquee container */}
                <div className="flex animate-marquee">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className="flex items-center gap-2.5 md:gap-3 px-6 md:px-10 flex-shrink-0"
                        >
                            {/* Icon with subtle glow */}
                            <div className="relative flex-shrink-0">
                                <div className="absolute inset-0 bg-white/20 rounded-full blur-sm scale-150" />
                                <DynamicIcon
                                    name={item.icon}
                                    className="relative w-4 h-4 md:w-5 md:h-5 text-white/90"
                                />
                            </div>
                            
                            {/* Text */}
                            <span className="text-[11px] md:text-sm font-semibold tracking-wider text-white/95 whitespace-nowrap uppercase">
                                {item.text}
                            </span>
                            
                            {/* Separator diamond */}
                            <div className="flex items-center gap-2 ml-4 md:ml-6">
                                <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-white/40 rounded-full" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Edge fade effects for premium look */}
            <div className="absolute left-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-[var(--primary)] to-transparent pointer-events-none z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-[var(--primary)] to-transparent pointer-events-none z-10" />
        </section>
    );
}
