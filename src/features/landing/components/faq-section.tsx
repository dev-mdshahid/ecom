"use client";

import { faqs } from "../data";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQSection() {
    return (
        <section className="py-20 md:py-28 bg-[var(--background)]">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Have questions? We've got answers. Can't find what you're looking
                        for? Contact us anytime.
                    </p>
                </div>

                {/* FAQ Accordion */}
                <div className="max-w-3xl mx-auto">
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem
                                key={faq.id}
                                value={faq.id}
                                className="bg-[var(--card)] border border-[var(--border)] rounded-xl px-6 shadow-sm hover:shadow-md transition-shadow duration-300"
                                style={{
                                    animationDelay: `${index * 100}ms`,
                                }}
                            >
                                <AccordionTrigger className="text-left font-semibold text-[var(--foreground)] hover:text-[var(--primary)] transition-colors py-5">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-[var(--muted-foreground)] leading-relaxed pb-5">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </div>
        </section>
    );
}
