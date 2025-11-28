import { Quote } from "lucide-react";

export function FounderStory() {
    return (
        <section className="bg-gradient-to-b from-[var(--background)] to-[var(--muted)]/20 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
            <div className="mx-auto max-w-4xl">
                {/* Section Header */}
                <div className="mb-8 text-center sm:mb-12">
                    <h2 className="mb-3 text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
                        A Message from Our Founder
                    </h2>
                    <div className="mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)]" />
                </div>

                {/* Founder Card */}
                <div className="relative overflow-hidden rounded-2xl bg-[var(--card)] p-6 shadow-lg sm:p-10">
                    {/* Decorative Quote Icon */}
                    <div className="absolute -right-4 -top-4 opacity-5">
                        <Quote className="h-32 w-32 text-[var(--primary)] sm:h-40 sm:w-40" />
                    </div>

                    <div className="relative">
                        {/* Quote Content */}
                        <div className="mb-6 space-y-4 text-base leading-relaxed text-[var(--muted-foreground)] sm:text-lg">
                            <p>
                                <span className="text-lg font-semibold text-[var(--foreground)]">
                                    Dear Fellow Parents,
                                </span>
                            </p>
                            <p>
                                I remember the first time I tried to trim my daughter&apos;s
                                tiny nails. My hands were shaking, my heart was racing, and I
                                was absolutely terrified of hurting her. That moment stayed with
                                me, and I knew there had to be a better way.
                            </p>
                            <p>
                                When my wife and I couldn&apos;t find baby care products that
                                gave us complete peace of mind, we decided to create them
                                ourselves. Not just for our family, but for every parent who
                                loses sleep worrying about whether they&apos;re using the right
                                products for their little ones.
                            </p>
                            <p>
                                Every product you see here has been tested on our own children
                                first. If we wouldn&apos;t use it with them, we won&apos;t sell
                                it to you. That&apos;s our promise.
                            </p>
                            <p className="text-[var(--foreground)]">
                                <strong>
                                    Thank you for trusting us with your most precious treasure.
                                </strong>
                            </p>
                        </div>

                        {/* Founder Info */}
                        <div className="flex flex-col items-start gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">
                            <div>
                                <div className="text-lg font-bold text-[var(--foreground)] sm:text-xl">
                                    Sarah & Michael Anderson
                                </div>
                                <div className="text-sm text-[var(--muted-foreground)] sm:text-base">
                                    Co-Founders & Parents
                                </div>
                            </div>

                            <div className="flex items-center gap-2">
                                <div className="rounded-full bg-gradient-to-r from-[var(--primary)] to-[var(--primary)]/70 px-4 py-1.5 text-xs font-semibold text-white sm:text-sm">
                                    Parents of 2
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-8 text-center">
                    <p className="text-sm italic text-[var(--muted-foreground)] sm:text-base">
                        &quot;We&apos;re not just running a business—we&apos;re raising our
                        kids alongside you, one safe product at a time.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
