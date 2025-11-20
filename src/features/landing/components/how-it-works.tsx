"use client";

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            title: "Browse Our Collection",
            description:
                "Explore our carefully curated selection of hospital-grade baby care products.",
        },
        {
            number: "02",
            title: "Add to Cart & Checkout",
            description:
                "Secure checkout with multiple payment options. Free shipping on orders over $50.",
        },
        {
            number: "03",
            title: "Enjoy Safe Parenting",
            description:
                "Receive your products within 3-5 days and enjoy stress-free baby care.",
        },
    ];

    return (
        <section
            id="how-it-works"
            className="py-20 md:py-28 bg-gradient-to-br from-[var(--background)] via-[var(--muted)] to-[var(--background)] relative overflow-hidden"
        >
            {/* Decorative Elements */}
            <div className="absolute top-1/2 left-0 w-72 h-72 bg-[var(--secondary)] opacity-20 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2" />
            <div className="absolute top-1/2 right-0 w-72 h-72 bg-[var(--primary)] opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold text-[var(--foreground)] mb-4">
                        How It Works
                    </h2>
                    <p className="text-lg text-[var(--muted-foreground)] max-w-2xl mx-auto">
                        Getting started with BabyNest is simple and straightforward
                    </p>
                </div>

                {/* Steps */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {steps.map((step, index) => (
                        <div
                            key={step.number}
                            className="relative group"
                            style={{
                                animationDelay: `${index * 150}ms`,
                            }}
                        >
                            {/* Connector Line (hidden on mobile, visible on md+) */}
                            {index < steps.length - 1 && (
                                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-[2px] bg-gradient-to-r from-[var(--primary)] to-transparent opacity-30" />
                            )}

                            <div className="bg-[var(--card)] rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[var(--border)] hover:-translate-y-1 relative z-10">
                                {/* Step Number */}
                                <div className="mb-6">
                                    <span className="text-6xl font-bold bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)] bg-clip-text text-transparent opacity-50">
                                        {step.number}
                                    </span>
                                </div>

                                {/* Content */}
                                <h3 className="text-2xl font-bold text-[var(--foreground)] mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-[var(--muted-foreground)] leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
