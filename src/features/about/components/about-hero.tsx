import { Heart, Sparkles, Shield, Star } from "lucide-react";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 sm:py-28 lg:px-8">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--background)] to-[var(--secondary)]/15" />

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Large Gradient Blobs */}
        <div className="absolute -top-48 -right-48 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 blur-3xl animate-pulse" />
        <div className="absolute -bottom-48 -left-48 h-96 w-96 rounded-full bg-gradient-to-br from-[var(--secondary)]/20 to-pink-200/10 blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />

        {/* Floating Icons */}
        <div className="absolute top-20 right-8 opacity-10 sm:right-20">
          <Sparkles className="h-8 w-8 text-[var(--primary)] sm:h-12 sm:w-12" />
        </div>
        <div className="absolute bottom-32 left-8 opacity-10 sm:left-24">
          <Shield className="h-10 w-10 text-[var(--primary)] sm:h-14 sm:w-14" />
        </div>
        <div className="absolute top-32 left-12 opacity-10 sm:left-32">
          <Star className="h-6 w-6 text-[var(--secondary)] sm:h-10 sm:w-10" />
        </div>
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Decorative Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--card)] px-4 py-2 shadow-sm backdrop-blur-sm">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[var(--primary)] sm:text-xs">
            Trusted by 10,000+ Parents
          </span>
        </div>

        {/* Icon Badge with Glow */}
        <div className="relative mx-auto mb-8 h-20 w-20 sm:h-24 sm:w-24">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 opacity-20 blur-xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 shadow-xl">
            <Heart className="h-10 w-10 text-white sm:h-12 sm:w-12" fill="white" />
          </div>
        </div>

        {/* Main Heading with Enhanced Typography */}
        <h1 className="mb-6 text-[2.25rem] font-extrabold leading-[1.15] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
          <span className="text-[#2a2a2a]">Caring for Your</span>{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-[#2a2a2a]">Little Ones</span>
            <span className="absolute bottom-1 left-0 h-3 w-full bg-gradient-to-r from-[var(--secondary)]/50 to-[var(--secondary)]/30 sm:h-4" />
          </span>
          ,<br />
          <span className="bg-gradient-to-r from-[var(--primary)] via-[#8585cc] to-[var(--primary)] bg-clip-text text-transparent">
            One Product at a Time
          </span>
        </h1>

        {/* Enhanced Subtitle */}
        <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl">
          <span className="text-[#555555]">Every parent deserves peace of mind. We're here to provide</span>{" "}
          <span className="font-bold text-[#2a2a2a]">safe, gentle, and reliable</span>{" "}
          <span className="text-[#555555]">baby care essentials that you can trust.</span>
        </p>

        {/* Trust Badges */}
        <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-[var(--primary)]" />
            <span className="text-sm font-semibold text-[#2a2a2a]">Safety Certified</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 text-amber-500" fill="currentColor" />
            <span className="text-sm font-semibold text-[#2a2a2a]">4.9/5 Rating</span>
          </div>
          <div className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-pink-500" fill="currentColor" />
            <span className="text-sm font-semibold text-[#2a2a2a]">Parent Approved</span>
          </div>
        </div>
      </div>
    </section>
  );
}
