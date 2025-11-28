import { Lock, Shield, Eye } from "lucide-react";

export function PrivacyPolicyHero() {
  return (
    <section className="relative overflow-hidden px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)]/10 via-[var(--background)] to-[var(--secondary)]/15" />

      {/* Decorative Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--primary)]/20 to-[var(--primary)]/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-64 w-64 rounded-full bg-gradient-to-br from-[var(--secondary)]/20 to-pink-200/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--primary)]/30 bg-[var(--card)] px-4 py-2 shadow-sm">
          <Eye className="h-4 w-4 text-[var(--primary)]" />
          <span className="text-xs font-bold uppercase tracking-widest text-[var(--primary)]">
            Transparency First
          </span>
        </div>

        {/* Icon */}
        <div className="relative mx-auto mb-6 h-16 w-16 sm:h-20 sm:w-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 opacity-20 blur-xl" />
          <div className="relative flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-[var(--primary)] to-[var(--primary)]/70 shadow-xl">
            <Lock className="h-8 w-8 text-white sm:h-10 sm:w-10" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-4xl md:text-5xl">
          <span className="text-[#2a2a2a]">Privacy </span>
          <span className="bg-gradient-to-r from-[var(--primary)] via-[#8585cc] to-[var(--primary)] bg-clip-text text-transparent">
            Policy
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-xl text-base leading-relaxed text-[#555555] sm:text-lg">
          Your privacy is important to us. This policy explains how we collect, use,
          and protect your personal information.
        </p>

        {/* Trust Badge */}
        <div className="mt-6 flex items-center justify-center gap-2">
          <Shield className="h-4 w-4 text-[var(--primary)]" />
          <span className="text-sm font-medium text-[#555555]">
            Your data is secure with us
          </span>
        </div>
      </div>
    </section>
  );
}
