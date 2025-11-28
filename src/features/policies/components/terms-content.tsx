import { 
  Users, 
  ShoppingCart, 
  CreditCard, 
  AlertTriangle, 
  Scale,
  FileText,
  Ban,
  Globe,
  Mail,
  Gavel,
  Shield
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type TTermsSection = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
};

const termsSections: TTermsSection[] = [
  {
    icon: Users,
    title: "1. Acceptance of Terms",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          By accessing and using the BabyNest website (&quot;Site&quot;), you accept and agree to be bound by these
          Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use our Site.
        </p>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          We reserve the right to update or modify these Terms at any time without prior notice. Your continued
          use of the Site following any changes constitutes acceptance of those changes.
        </p>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "2. Eligibility",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          To use our services, you must:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>Be at least 18 years old or the age of majority in your jurisdiction</li>
          <li>Have the legal capacity to enter into a binding contract</li>
          <li>Provide accurate and complete information during registration and checkout</li>
          <li>Maintain the security of your account credentials</li>
        </ul>
      </div>
    ),
  },
  {
    icon: ShoppingCart,
    title: "3. Products & Orders",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 font-semibold text-[var(--foreground)]">Product Information</h4>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            We strive to display our products as accurately as possible. However, colors and details may vary
            slightly due to monitor settings and photography. Product descriptions are for informational purposes
            and should not be considered professional advice.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-[var(--foreground)]">Order Acceptance</h4>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            Your order is an offer to purchase. We reserve the right to accept or decline any order. Order
            confirmation does not guarantee product availability. If a product is unavailable, we will notify
            you and offer a refund or alternative.
          </p>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-[var(--foreground)]">Pricing</h4>
          <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
            All prices are in USD and subject to change without notice. We are not responsible for pricing
            errors. If we discover an error, we will notify you and give you the option to proceed at the
            correct price or cancel your order.
          </p>
        </div>
      </div>
    ),
  },
  {
    icon: CreditCard,
    title: "4. Payment Terms",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          By providing payment information, you represent that:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>You are authorized to use the payment method</li>
          <li>The billing information provided is accurate and complete</li>
          <li>You authorize us to charge the payment method for your order total</li>
        </ul>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          We use secure third-party payment processors. We do not store your full payment card details
          on our servers. All transactions are subject to verification and fraud checks.
        </p>
      </div>
    ),
  },
  {
    icon: FileText,
    title: "5. Intellectual Property",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          All content on this Site, including text, graphics, logos, images, product descriptions, and
          software, is the property of BabyNest or its content suppliers and is protected by intellectual
          property laws.
        </p>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          You may not:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>Reproduce, distribute, or modify any content without written permission</li>
          <li>Use our trademarks or branding without authorization</li>
          <li>Scrape, copy, or harvest content from our Site</li>
          <li>Use our content for commercial purposes without consent</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Ban,
    title: "6. Prohibited Activities",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          When using our Site, you agree not to:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>Violate any applicable laws or regulations</li>
          <li>Infringe on the rights of others</li>
          <li>Provide false or misleading information</li>
          <li>Engage in fraudulent activities</li>
          <li>Attempt to gain unauthorized access to our systems</li>
          <li>Interfere with the proper functioning of the Site</li>
          <li>Use bots, scrapers, or automated tools without permission</li>
          <li>Engage in any activity that could harm our reputation</li>
        </ul>
      </div>
    ),
  },
  {
    icon: AlertTriangle,
    title: "7. Disclaimers & Limitations",
    content: (
      <div className="space-y-4">
        <div className="rounded-lg border border-amber-200 bg-amber-50/30 p-4">
          <h4 className="mb-2 font-semibold text-amber-800">Important Safety Notice</h4>
          <p className="text-sm text-amber-700 leading-relaxed">
            Our baby care products should be used according to provided instructions. Always supervise children
            during use. BabyNest is not liable for injuries resulting from product misuse or failure to follow
            safety guidelines.
          </p>
        </div>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          THE SITE AND PRODUCTS ARE PROVIDED &quot;AS IS&quot; WITHOUT WARRANTIES OF ANY KIND. TO THE FULLEST EXTENT
          PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND
          FITNESS FOR A PARTICULAR PURPOSE.
        </p>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          Our liability is limited to the purchase price of the products. We are not liable for indirect,
          incidental, or consequential damages.
        </p>
      </div>
    ),
  },
  {
    icon: Scale,
    title: "8. Indemnification",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          You agree to indemnify, defend, and hold harmless BabyNest, its officers, directors, employees,
          and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>Your use of the Site</li>
          <li>Your violation of these Terms</li>
          <li>Your violation of any rights of third parties</li>
          <li>Any content you submit or transmit through the Site</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Globe,
    title: "9. Governing Law",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          These Terms shall be governed by and construed in accordance with the laws of the State of California,
          United States, without regard to its conflict of law provisions.
        </p>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          Any disputes arising under these Terms shall be resolved exclusively in the state or federal courts
          located in San Francisco County, California. You consent to the jurisdiction of such courts.
        </p>
      </div>
    ),
  },
  {
    icon: Gavel,
    title: "10. Dispute Resolution",
    content: (
      <div className="space-y-3">
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          Before initiating legal proceedings, you agree to attempt to resolve any dispute informally by
          contacting us. We will work in good faith to resolve the issue within 30 days.
        </p>
        <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
          If informal resolution fails, you agree that any dispute shall be resolved through binding
          arbitration administered by the American Arbitration Association, rather than in court.
        </p>
      </div>
    ),
  },
];

export function TermsContent() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Intro Card */}
        <Card className="border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--muted)]/20">
          <CardContent className="p-6 sm:p-8">
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              Welcome to BabyNest! These Terms of Service govern your use of our website and the purchase
              of products from our store. We&apos;ve written these terms in clear language to help you
              understand your rights and responsibilities when shopping with us.
            </p>
          </CardContent>
        </Card>

        {/* Terms Sections */}
        <div className="space-y-6">
          {termsSections.map((section, index) => (
            <Card key={index} className="border-[var(--border)]">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]/10">
                    <section.icon className="h-5 w-5 text-[var(--primary)]" />
                  </div>
                  <span className="text-lg text-[var(--foreground)]">{section.title}</span>
                </CardTitle>
              </CardHeader>
              <CardContent>{section.content}</CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Card */}
        <Card className="border-[var(--primary)]/30 bg-[var(--primary)]/5">
          <CardContent className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-[var(--foreground)]">Questions About These Terms?</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                If you have any questions about these Terms of Service, please contact us at{" "}
                <Link href="mailto:legal@babynest.com" className="text-[var(--primary)] font-medium hover:underline">
                  legal@babynest.com
                </Link>
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
