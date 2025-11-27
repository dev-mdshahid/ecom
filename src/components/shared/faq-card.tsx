"use client";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

type TFaqItem = {
    number: number;
    title: string;
    description: string;
};

type TFaqCardProps = {
    title: string;
    items: TFaqItem[];
    defaultOpen?: boolean;
};

export function FaqCard({ title, items, defaultOpen = false }: TFaqCardProps) {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full"
            defaultValue={defaultOpen ? "faq-content" : undefined}
        >
            <AccordionItem
                value="faq-content"
                className="border border-[var(--border)] rounded-lg bg-white shadow-sm"
            >
                <AccordionTrigger className="text-[var(--foreground)] font-semibold hover:no-underline px-6 py-4 text-left">
                    {title}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                    <div className="space-y-4 pt-2">
                        {items.map((item) => (
                            <div key={item.number} className="flex items-start gap-4">
                                {/* Numbered Badge */}
                                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#f5e6e0] flex items-center justify-center">
                                    <span className="text-[var(--foreground)] font-semibold text-sm">
                                        {item.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="flex-1 pt-1">
                                    <h4 className="font-semibold text-[var(--foreground)] text-sm mb-1">
                                        {item.title}
                                    </h4>
                                    <p className="text-[var(--muted-foreground)] text-sm leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}
