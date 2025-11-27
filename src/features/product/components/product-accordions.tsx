"use client";

import { FaqCard } from "@/components/shared/faq-card";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type TProductAccordionsProps = {
    howItWorks: string[];
    featureDetails: { icon: string; title: string; description: string }[];
    guaranteeInfo: string[];
};

export function ProductAccordions({
    howItWorks,
    featureDetails,
    guaranteeInfo,
}: TProductAccordionsProps) {
    // Transform howItWorks data to match FaqCard format
    const howItWorksItems = howItWorks.map((step, index) => ({
        number: index + 1,
        title: step.split('.')[0] || `Step ${index + 1}`,
        description: step.includes('.') ? step.split('.').slice(1).join('.').trim() : step,
    }));

    return (
        <div className="w-full space-y-3">
            {/* How does it work? - Using FaqCard */}
            <FaqCard
                title="How does it work?"
                items={howItWorksItems}
                defaultOpen={false}
            />

            {/* Features */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                    value="features"
                    className="border border-[var(--border)] rounded-lg bg-white shadow-sm"
                >
                    <AccordionTrigger className="text-[var(--foreground)] font-semibold hover:no-underline px-6 py-4">
                        Features
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                        <div className="space-y-4 pt-2">
                            {featureDetails.map((feature, index) => (
                                <div key={index} className="flex items-start gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f5e6e0] flex items-center justify-center text-xl">
                                        {feature.icon}
                                    </div>
                                    <div className="flex-1 pt-1">
                                        <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1">
                                            {feature.title}
                                        </h4>
                                        <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            {/* 30 Day Money Back Guarantee */}
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem
                    value="guarantee"
                    className="border border-[var(--border)] rounded-lg bg-white shadow-sm"
                >
                    <AccordionTrigger className="text-[var(--foreground)] font-semibold hover:no-underline px-6 py-4">
                        30 Day Money Back Guarantee
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-6">
                        <ul className="space-y-3 pt-2">
                            {guaranteeInfo.map((info, index) => (
                                <li key={index} className="text-sm flex items-start gap-3">
                                    <span className="text-green-500 mt-0.5 flex-shrink-0 text-base">✓</span>
                                    <span className="text-[var(--muted-foreground)] leading-relaxed">{info}</span>
                                </li>
                            ))}
                        </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}
