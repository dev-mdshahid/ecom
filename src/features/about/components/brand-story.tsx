import { Lightbulb, Target, Sparkles } from "lucide-react";

export function BrandStory() {
    const storySteps = [
        {
            number: "01",
            icon: Lightbulb,
            title: "It started with a simple realization",
            content:
                "Every parent wants the absolute best for their baby, but finding truly safe, reliable baby care products shouldn't be so difficult.",
            detail:
                "As first-time parents ourselves, we experienced the overwhelming anxiety of choosing the right products for our little one. The market was flooded with options, but which ones were genuinely safe? Which ones actually worked? We spent countless sleepless nights researching, reading reviews, and worrying.",
            cardBg: "bg-white",
            borderColor: "border-[var(--primary)]/20",
            numberBg: "from-[var(--primary)] to-[var(--primary)]/80",
            accentColor: "var(--primary)",
        },
        {
            number: "02",
            icon: Target,
            title: "That's when we decided to make a change",
            content:
                "We set out to create a brand that parents could trust completely—a place where safety isn't just a promise, it's a guarantee.",
            detail:
                "Every product we offer has been carefully selected and rigorously tested. We only stock items that we would confidently use with our own children. From gentle nail grinders to safe nose cleaners and quiet hair trimmers, each product is designed with your baby's delicate needs in mind.",
            cardBg: "bg-gradient-to-br from-[var(--secondary)]/20 to-pink-50/50",
            borderColor: "border-[var(--secondary)]/30",
            numberBg: "from-[var(--secondary)] to-pink-300",
            accentColor: "var(--secondary)",
        },
        {
            number: "03",
            icon: Sparkles,
            title: "Today, we're proud to serve thousands of families",
            content:
                "Who trust us with their most precious treasures. We're not just selling products—we're building a community of parents who refuse to compromise on quality and safety.",
            detail:
                "Every review, every smile, every 'thank you' reminds us why we started this journey. We're committed to being the trusted partner you deserve in your parenting journey.",
            cardBg: "bg-gradient-to-br from-amber-50 to-orange-50/60",
            borderColor: "border-amber-200/50",
            numberBg: "from-amber-400 to-orange-400",
            accentColor: "rgb(251, 146, 60)",
        },
    ];

    return (
        <section className="relative px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-5xl">
                {/* Section Header */}
                <div className="mb-12 text-center sm:mb-16">
                    <h2 className="mb-4 text-[2rem] font-extrabold text-[#2a2a2a] sm:text-[2.5rem] md:text-5xl">
                        Our Story
                    </h2>
                    <div className="mx-auto mb-3 h-1 w-20 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
                    <p className="mx-auto max-w-2xl text-base text-[#666666] sm:text-lg">
                        A journey that started with one family and grew into a mission to serve thousands
                    </p>
                </div>

                {/* Timeline Story */}
                <div className="relative space-y-8 sm:space-y-12">
                    {/* Vertical Timeline Line - Hidden on mobile */}
                    <div className="absolute left-8 top-12 hidden h-[calc(100%-6rem)] w-0.5 bg-gradient-to-b from-[var(--primary)]/30 via-[var(--secondary)]/30 to-amber-300/30 sm:block" />

                    {storySteps.map((step, index) => {
                        const Icon = step.icon;
                        return (
                            <div key={index} className="relative">
                                {/* Mobile: Simple Card Layout */}
                                <div className="sm:hidden">
                                    <div className={`overflow-hidden rounded-2xl border ${step.borderColor} ${step.cardBg} p-6 shadow-md`}>
                                        {/* Number Badge */}
                                        <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${step.numberBg} shadow-md`}>
                                            <span className="text-lg font-bold text-white">{step.number}</span>
                                        </div>

                                        {/* Content */}
                                        <h3 className="mb-3 text-xl font-extrabold leading-tight text-[#2a2a2a]">
                                            {step.title}
                                        </h3>
                                        <p className="mb-3 text-[15px] font-semibold leading-relaxed text-[#333333]">
                                            {step.content}
                                        </p>
                                        <p className="text-sm leading-relaxed text-[#666666]">
                                            {step.detail}
                                        </p>
                                    </div>
                                </div>

                                {/* Desktop: Timeline Layout */}
                                <div className="hidden sm:flex sm:gap-8">
                                    {/* Timeline Icon */}
                                    <div className="relative flex-shrink-0">
                                        <div
                                            className="flex h-16 w-16 items-center justify-center rounded-full shadow-lg"
                                            style={{
                                                background: `linear-gradient(135deg, ${step.accentColor}, ${step.accentColor}dd)`,
                                            }}
                                        >
                                            <Icon className="h-8 w-8 text-white" />
                                        </div>
                                    </div>

                                    {/* Content Card */}
                                    <div className="flex-1 pb-8">
                                        {/* Number Badge */}
                                        <div className="mb-4 inline-flex items-center gap-3">
                                            <div className={`inline-flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br ${step.numberBg} shadow-lg`}>
                                                <span className="text-2xl font-bold text-white">{step.number}</span>
                                            </div>
                                        </div>

                                        <div className={`relative overflow-hidden rounded-2xl border ${step.borderColor} ${step.cardBg} p-8 shadow-lg transition-all duration-300 hover:shadow-xl`}>
                                            <h3 className="mb-4 text-2xl font-extrabold leading-tight text-[#2a2a2a]">
                                                {step.title}
                                            </h3>
                                            <p className="mb-4 text-lg font-semibold leading-relaxed text-[#333333]">
                                                {step.content}
                                            </p>
                                            <p className="text-base leading-relaxed text-[#666666]">
                                                {step.detail}
                                            </p>

                                            {/* Decorative Corner Accent */}
                                            <div
                                                className="absolute -right-4 -top-4 h-24 w-24 rounded-full opacity-10 blur-2xl"
                                                style={{ backgroundColor: step.accentColor }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Closing Statement */}
                <div className="mt-12 text-center">
                    <div className="mx-auto max-w-3xl rounded-2xl border-2 border-dashed border-[var(--primary)]/30 bg-gradient-to-r from-[var(--primary)]/10 to-[var(--secondary)]/10 p-6 shadow-sm sm:p-8">
                        <p className="text-base italic leading-relaxed text-[#555555] sm:text-lg">
                            &quot;We believe every parent deserves to feel confident in the
                            products they choose for their baby. That&apos;s not just our
                            mission—it&apos;s our promise to you.&quot;
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
