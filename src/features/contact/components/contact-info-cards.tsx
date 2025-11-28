import { Mail, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import Link from "next/link";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "Send us an email anytime",
    value: "support@babynest.com",
    href: "mailto:support@babynest.com",
    color: "bg-blue-500",
  },
  {
    icon: Phone,
    title: "Call Us",
    description: "Mon-Fri, 9AM-6PM",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "bg-green-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick chat support",
    value: "+1 (555) 123-4567",
    href: "https://wa.me/15551234567?text=Hi%20BabyNest%2C%20I%20have%20a%20question%20about%20your%20products.",
    color: "bg-emerald-500",
  },
];

const additionalInfo = [
  {
    icon: Clock,
    title: "Business Hours",
    lines: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 10:00 AM - 4:00 PM", "Sunday: Closed"],
  },
  {
    icon: MapPin,
    title: "Our Location",
    lines: ["BabyNest Headquarters", "123 Baby Care Lane", "San Francisco, CA 94102"],
  },
];

export function ContactInfoCards() {
  return (
    <section className="px-4 pb-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Contact Methods - Compact Grid */}
        <div className="mb-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {contactMethods.map((method) => (
            <Link
              key={method.title}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel={method.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group"
            >
              <div className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4 transition-all duration-200 hover:border-[var(--primary)]/40 hover:shadow-md">
                <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${method.color} transition-transform duration-200 group-hover:scale-105`}>
                  <method.icon className="h-5 w-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-[var(--foreground)]">
                    {method.title}
                  </h3>
                  <p className="truncate text-xs text-[var(--muted-foreground)]">
                    {method.description}
                  </p>
                  <p className="truncate text-sm font-medium text-[var(--primary)]">
                    {method.value}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Additional Info - Inline Style */}
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          {additionalInfo.map((info) => (
            <div
              key={info.title}
              className="flex items-start gap-3 rounded-xl border border-[var(--border)] bg-[var(--card)] p-4"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                <info.icon className="h-4 w-4 text-[var(--primary)]" />
              </div>
              <div className="min-w-0">
                <h3 className="mb-1 text-sm font-semibold text-[var(--foreground)]">
                  {info.title}
                </h3>
                <div className="space-y-0.5">
                  {info.lines.map((line, index) => (
                    <p key={index} className="text-xs text-[var(--muted-foreground)]">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
