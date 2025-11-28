import { CheckCircle2, XCircle, Clock, Package, CreditCard, AlertTriangle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const eligibleItems = [
  "Unused products in original packaging",
  "Products with manufacturing defects",
  "Damaged items upon delivery (report within 48 hours)",
  "Wrong product shipped",
  "Items that don't match the description",
];

const nonEligibleItems = [
  "Products used or removed from original packaging",
  "Items damaged due to misuse",
  "Products without proof of purchase",
  "Items returned after 30 days",
  "Hygiene products (opened)",
];

const returnSteps = [
  {
    step: 1,
    title: "Initiate Return",
    description: "Contact us via email or WhatsApp with your order number and reason for return.",
  },
  {
    step: 2,
    title: "Get Approval",
    description: "We'll review your request and send a return authorization within 24 hours.",
  },
  {
    step: 3,
    title: "Ship Item",
    description: "Pack the item securely and ship it to our return address. We provide a prepaid label for defective items.",
  },
  {
    step: 4,
    title: "Receive Refund",
    description: "Once we receive and inspect the item, your refund will be processed within 5-7 business days.",
  },
];

export function RefundPolicyContent() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-12">
        {/* Overview Card */}
        <Card className="border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--muted)]/20">
          <CardContent className="p-6 sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[var(--primary)] shadow-lg">
                <Package className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="mb-2 text-xl font-bold text-[var(--foreground)]">
                  Our Promise to You
                </h2>
                <p className="text-[var(--muted-foreground)] leading-relaxed">
                  At BabyNest, we believe every parent deserves peace of mind when shopping for their little ones.
                  If you&apos;re not completely satisfied with your purchase, we&apos;re here to help.
                  Our 30-day return policy ensures you can shop with confidence.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Eligibility Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Eligible */}
          <Card className="border-green-200 bg-green-50/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-green-700">
                <CheckCircle2 className="h-5 w-5" />
                Eligible for Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {eligibleItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-green-800">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-600" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Not Eligible */}
          <Card className="border-red-200 bg-red-50/30">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-red-700">
                <XCircle className="h-5 w-5" />
                Not Eligible for Return
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {nonEligibleItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-red-800">
                    <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-red-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Return Process */}
        <div>
          <h2 className="mb-6 text-center text-2xl font-bold text-[var(--foreground)]">
            How to Return an Item
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {returnSteps.map((step) => (
              <Card key={step.step} className="relative border-[var(--border)] text-center">
                <CardContent className="pt-8 pb-6">
                  <div className="absolute -top-4 left-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-bold text-white shadow-lg">
                    {step.step}
                  </div>
                  <h3 className="mb-2 font-semibold text-[var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {step.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Refund Timeline */}
        <Card className="border-[var(--border)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[var(--foreground)]">
              <Clock className="h-5 w-5 text-[var(--primary)]" />
              Refund Timeline
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                <CreditCard className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)]">Credit/Debit Card</h4>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Refunds will be credited back to your original payment method within 5-7 business days after we receive the returned item.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--muted)]">
                <Package className="h-5 w-5 text-[var(--primary)]" />
              </div>
              <div>
                <h4 className="font-semibold text-[var(--foreground)]">Store Credit</h4>
                <p className="text-sm text-[var(--muted-foreground)]">
                  If you prefer, we can issue store credit immediately upon return approval, which can be used on any future purchase.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Important Note */}
        <Card className="border-amber-200 bg-amber-50/30">
          <CardContent className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-amber-800">Important Note</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                For damaged items received upon delivery, please take photos of the damage and packaging,
                and report within 48 hours of delivery. This helps us process your claim faster and improve
                our shipping practices.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Last Updated */}
        <p className="text-center text-sm text-[var(--muted-foreground)]">
          Last updated: November 2025
        </p>
      </div>
    </section>
  );
}
