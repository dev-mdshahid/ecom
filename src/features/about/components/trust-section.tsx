import { CheckCircle2, Award, Package, Lock } from "lucide-react";

export function TrustSection() {
    const trustIndicators = [
        {
            icon: CheckCircle2,
            label: "100% Authentic",
            description: "Guaranteed genuine products",
        },
        {
            icon: Award,
            label: "Safety Certified",
            description: "Meets international standards",
        },
        {
            icon: Package,
            label: "Quality Guarantee",
            description: "30-day money-back promise",
        },
        {
            icon: Lock,
            label: "Secure Shopping",
            description: "Your data is protected",
        },
    ];

    const stats = [
        { number: "10,000+", label: "Happy Parents" },
        { number: "99.8%", label: "Satisfaction Rate" },
        { number: "5-Star", label: "Average Rating" },
    ];

    return (
        <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-6xl">
                {/* Trust Indicators */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="mb-8 text-center text-2xl font-bold text-[var(--foreground)] sm:text-3xl">
                        Why Parents Trust Us
                    </h2>

                    {/* Grid - 2 columns on mobile, 4 on larger screens */}
                    <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
                        {trustIndicators.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <div
                                    key={index}
                                    className="flex flex-col items-center rounded-xl bg-[var(--card)] p-4 text-center shadow-sm sm:p-6"
                                >
                                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 sm:h-14 sm:w-14">
                                        <Icon className="h-6 w-6 text-white sm:h-7 sm:w-7" />
                                    </div>
                                    <h3 className="mb-1 text-sm font-bold text-[var(--foreground)] sm:text-base">
                                        {item.label}
                                    </h3>
                                    <p className="text-xs text-[var(--muted-foreground)] sm:text-sm">
                                        {item.description}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Stats Section */}
                <div className="rounded-2xl bg-gradient-to-br from-[var(--primary)]/10 via-[var(--secondary)]/5 to-[var(--primary)]/5 p-6 sm:p-10">
                    <h3 className="mb-6 text-center text-xl font-bold text-[var(--foreground)] sm:mb-8 sm:text-2xl">
                        Trusted by Thousands of Families
                    </h3>

                    <div className="grid grid-cols-3 gap-4 sm:gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="mb-1 text-2xl font-bold text-[var(--primary)] sm:mb-2 sm:text-4xl">
                                    {stat.number}
                                </div>
                                <div className="text-xs text-[var(--muted-foreground)] sm:text-base">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Money-Back Guarantee Badge */}
                    <div className="mt-8 border-t border-[var(--border)] pt-6 text-center">
                        <div className="mx-auto inline-flex items-center gap-2 rounded-full bg-[var(--card)] px-4 py-2 text-sm font-semibold text-[var(--foreground)] shadow-sm sm:px-6 sm:py-3 sm:text-base">
                            <CheckCircle2 className="h-5 w-5 text-green-500 sm:h-6 sm:w-6" />
                            30-Day Money-Back Guarantee
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
