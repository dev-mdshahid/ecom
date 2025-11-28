import { Shield, Heart, Star, Users } from "lucide-react";

export function CoreValues() {
    const values = [
        {
            icon: Shield,
            title: "Safety First",
            description:
                "Every product is rigorously tested to meet the highest safety standards. Your baby's wellbeing is our top priority.",
            gradient: "from-[var(--primary)] to-[var(--primary)]/70",
        },
        {
            icon: Heart,
            title: "Gentle Care",
            description:
                "Designed specifically for delicate baby skin and comfort. Soft, gentle, and stress-free for both baby and parent.",
            gradient: "from-[var(--secondary)] to-pink-300",
        },
        {
            icon: Star,
            title: "Premium Quality",
            description:
                "We never compromise on quality. Only the best materials and craftsmanship for your precious little one.",
            gradient: "from-amber-400 to-orange-300",
        },
        {
            icon: Users,
            title: "Parent Trust",
            description:
                "Built by parents, for parents. We understand your concerns because we share them. Your trust is everything to us.",
            gradient: "from-[var(--primary)] to-purple-400",
        },
    ];

    return (
        <section className="bg-gradient-to-b from-[var(--background)] to-[var(--muted)]/30 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Section Header */}
                <div className="mb-10 text-center sm:mb-14">
                    <h2 className="mb-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                        Our Core Values
                    </h2>
                    <p className="mx-auto max-w-2xl text-base text-[var(--muted-foreground)] sm:text-lg">
                        These principles guide everything we do, from product selection to
                        customer service.
                    </p>
                </div>

                {/* Values Grid - 1 column on mobile, 2 columns on larger screens */}
                <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
                    {values.map((value, index) => {
                        const Icon = value.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-2xl bg-[var(--card)] p-6 shadow-sm transition-all duration-300 hover:shadow-xl sm:p-8"
                            >
                                {/* Gradient Background on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/0 to-[var(--secondary)]/0 opacity-0 transition-opacity duration-300 group-hover:opacity-5" />

                                <div className="relative">
                                    {/* Icon */}
                                    <div
                                        className={`mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${value.gradient} shadow-md`}
                                    >
                                        <Icon className="h-7 w-7 text-white" />
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-2 text-xl font-bold text-[var(--foreground)] sm:text-2xl">
                                        {value.title}
                                    </h3>
                                    <p className="text-sm leading-relaxed text-[var(--muted-foreground)] sm:text-base">
                                        {value.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
