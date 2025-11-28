import { 
  Database, 
  Cookie, 
  CreditCard, 
  Users, 
  Shield, 
  Mail,
  Server,
  Trash2,
  Bell,
  Baby
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

type TPolicySection = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  content: React.ReactNode;
};

const policySections: TPolicySection[] = [
  {
    icon: Database,
    title: "Information We Collect",
    content: (
      <div className="space-y-4">
        <div>
          <h4 className="mb-2 font-semibold text-[var(--foreground)]">Personal Information</h4>
          <p className="text-sm text-[var(--muted-foreground)]">
            When you make a purchase or create an account, we collect:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--muted-foreground)]">
            <li>Name and email address</li>
            <li>Shipping and billing address</li>
            <li>Phone number</li>
            <li>Payment information (processed securely by our payment provider)</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-2 font-semibold text-[var(--foreground)]">Automatically Collected Information</h4>
          <p className="text-sm text-[var(--muted-foreground)]">
            We automatically collect certain information when you visit our website:
          </p>
          <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-[var(--muted-foreground)]">
            <li>Browser type and version</li>
            <li>Operating system</li>
            <li>Pages visited and time spent</li>
            <li>Referring website</li>
            <li>IP address (anonymized)</li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    icon: Users,
    title: "How We Use Your Information",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          We use your information to:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>Process and fulfill your orders</li>
          <li>Send order confirmations and shipping updates</li>
          <li>Respond to your inquiries and provide customer support</li>
          <li>Improve our website and services</li>
          <li>Send promotional emails (only with your consent)</li>
          <li>Prevent fraud and enhance security</li>
          <li>Comply with legal obligations</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Cookie,
    title: "Cookies & Tracking",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          We use cookies and similar technologies to enhance your browsing experience:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
            <h5 className="mb-1 font-semibold text-[var(--foreground)]">Essential Cookies</h5>
            <p className="text-sm text-[var(--muted-foreground)]">
              Required for the website to function properly (shopping cart, user sessions).
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
            <h5 className="mb-1 font-semibold text-[var(--foreground)]">Analytics Cookies</h5>
            <p className="text-sm text-[var(--muted-foreground)]">
              Help us understand how visitors interact with our website to improve user experience.
            </p>
          </div>
          <div className="rounded-lg border border-[var(--border)] bg-[var(--muted)]/30 p-4">
            <h5 className="mb-1 font-semibold text-[var(--foreground)]">Marketing Cookies</h5>
            <p className="text-sm text-[var(--muted-foreground)]">
              Used to show relevant ads and measure ad campaign effectiveness. You can opt out anytime.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    icon: CreditCard,
    title: "Payment Security",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          Your payment information is processed securely:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>We use industry-standard SSL/TLS encryption</li>
          <li>Payment details are processed by PCI-DSS compliant payment providers</li>
          <li>We never store your full credit card number on our servers</li>
          <li>All transactions are monitored for fraud prevention</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Server,
    title: "Data Storage & Protection",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          We take data protection seriously:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>Data is stored on secure servers with encryption at rest</li>
          <li>Regular security audits and vulnerability assessments</li>
          <li>Access to personal data is restricted to authorized personnel only</li>
          <li>We maintain backups to prevent data loss</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Shield,
    title: "Third-Party Sharing",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          We only share your information with trusted third parties when necessary:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li><strong>Shipping carriers:</strong> To deliver your orders</li>
          <li><strong>Payment processors:</strong> To process transactions securely</li>
          <li><strong>Analytics providers:</strong> To improve our services (anonymized data)</li>
          <li><strong>Legal authorities:</strong> When required by law</li>
        </ul>
        <p className="text-sm font-medium text-[var(--foreground)]">
          We never sell your personal information to third parties.
        </p>
      </div>
    ),
  },
  {
    icon: Trash2,
    title: "Your Rights",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          You have the following rights regarding your personal data:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Correct inaccurate information</li>
          <li><strong>Erasure:</strong> Request deletion of your data</li>
          <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
          <li><strong>Objection:</strong> Opt out of marketing communications</li>
          <li><strong>Restriction:</strong> Limit how we process your data</li>
        </ul>
        <p className="text-sm text-[var(--muted-foreground)]">
          To exercise these rights, contact us at{" "}
          <Link href="mailto:privacy@babynest.com" className="text-[var(--primary)] hover:underline">
            privacy@babynest.com
          </Link>
        </p>
      </div>
    ),
  },
  {
    icon: Baby,
    title: "Children's Privacy",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          Although we sell baby products, our website is intended for adults:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>We do not knowingly collect personal information from children under 13</li>
          <li>If you believe a child has provided us with personal information, please contact us immediately</li>
          <li>We will promptly delete any such information from our records</li>
        </ul>
      </div>
    ),
  },
  {
    icon: Bell,
    title: "Policy Updates",
    content: (
      <div className="space-y-4">
        <p className="text-sm text-[var(--muted-foreground)]">
          We may update this Privacy Policy from time to time. When we do:
        </p>
        <ul className="list-inside list-disc space-y-2 text-sm text-[var(--muted-foreground)]">
          <li>We will update the &quot;Last Updated&quot; date at the bottom of this page</li>
          <li>For significant changes, we will notify you via email</li>
          <li>Continued use of our website after changes constitutes acceptance of the updated policy</li>
        </ul>
      </div>
    ),
  },
];

export function PrivacyPolicyContent() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Intro Card */}
        <Card className="border-[var(--border)] bg-gradient-to-br from-[var(--card)] to-[var(--muted)]/20">
          <CardContent className="p-6 sm:p-8">
            <p className="text-[var(--muted-foreground)] leading-relaxed">
              At BabyNest, we understand that trusting us with your personal information is a big
              responsibility - just like caring for your little one. This Privacy Policy explains
              how we collect, use, and protect your data when you shop with us. We&apos;re committed
              to being transparent and keeping your information safe.
            </p>
          </CardContent>
        </Card>

        {/* Policy Sections */}
        <div className="space-y-6">
          {policySections.map((section, index) => (
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
              <h3 className="mb-1 font-semibold text-[var(--foreground)]">Questions About Your Privacy?</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                If you have any questions or concerns about this Privacy Policy or how we handle your data,
                please contact our Privacy Team at{" "}
                <Link href="mailto:privacy@babynest.com" className="text-[var(--primary)] font-medium hover:underline">
                  privacy@babynest.com
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
