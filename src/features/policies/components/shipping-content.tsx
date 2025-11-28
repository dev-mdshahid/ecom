import { 
  Truck, 
  Zap, 
  Globe, 
  Package, 
  Clock, 
  MapPin,
  DollarSign,
  CheckCircle2,
  AlertTriangle,
  Mail,
  Search
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const shippingOptions = [
  {
    icon: Truck,
    name: "Standard Shipping",
    delivery: "5-7 Business Days",
    cost: "$4.99",
    freeOver: "$50",
    color: "from-blue-500 to-blue-600",
    description: "Perfect for non-urgent orders. Reliable and cost-effective.",
  },
  {
    icon: Zap,
    name: "Express Shipping",
    delivery: "2-3 Business Days",
    cost: "$9.99",
    freeOver: "$100",
    color: "from-amber-500 to-orange-500",
    description: "When you need it fast. Ideal for last-minute baby essentials.",
  },
  {
    icon: Clock,
    name: "Priority Overnight",
    delivery: "Next Business Day",
    cost: "$19.99",
    freeOver: null,
    color: "from-purple-500 to-purple-600",
    description: "Fastest option available. Order by 2 PM for next-day delivery.",
  },
];

const processingSteps = [
  {
    step: 1,
    title: "Order Placed",
    description: "You'll receive an order confirmation email immediately",
  },
  {
    step: 2,
    title: "Processing",
    description: "We carefully pack your items within 1-2 business days",
  },
  {
    step: 3,
    title: "Shipped",
    description: "Your order is on its way! Tracking info will be emailed",
  },
  {
    step: 4,
    title: "Delivered",
    description: "Your baby essentials arrive safe and sound!",
  },
];

const deliveryZones = [
  { zone: "Continental US", standard: "5-7 days", express: "2-3 days" },
  { zone: "Alaska & Hawaii", standard: "7-10 days", express: "3-5 days" },
  { zone: "US Territories", standard: "10-14 days", express: "5-7 days" },
  { zone: "Canada", standard: "7-14 days", express: "5-7 days" },
];

const importantNotes = [
  "Orders placed after 2 PM EST will be processed the next business day",
  "We do not ship on weekends or federal holidays",
  "P.O. Box addresses may experience additional delivery time",
  "Signature may be required for orders over $150",
  "Some remote areas may have extended delivery times",
];

export function ShippingContent() {
  return (
    <section className="px-4 pb-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl space-y-12">
        {/* Free Shipping Banner */}
        <Card className="border-green-200 bg-gradient-to-r from-green-50 to-emerald-50">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-green-100">
              <DollarSign className="h-7 w-7 text-green-600" />
            </div>
            <div className="flex-1">
              <h2 className="mb-1 text-xl font-bold text-green-800">
                Free Standard Shipping on Orders Over $50!
              </h2>
              <p className="text-green-700">
                Stock up on baby essentials and save on shipping. Automatically applied at checkout.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Shipping Options */}
        <div>
          <h2 className="mb-6 text-center text-2xl font-bold text-[var(--foreground)]">
            Shipping Options
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {shippingOptions.map((option) => (
              <Card key={option.name} className="relative overflow-hidden border-[var(--border)]">
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${option.color}`} />
                <CardContent className="pt-6">
                  <div className="mb-4 flex items-center gap-3">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${option.color} shadow-lg`}>
                      <option.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)]">{option.name}</h3>
                      <p className="text-sm text-[var(--muted-foreground)]">{option.delivery}</p>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-[var(--muted-foreground)]">{option.description}</p>
                  <div className="flex items-center justify-between border-t border-[var(--border)] pt-4">
                    <span className="text-lg font-bold text-[var(--foreground)]">{option.cost}</span>
                    {option.freeOver && (
                      <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
                        Free over {option.freeOver}
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Processing Timeline */}
        <div>
          <h2 className="mb-6 text-center text-2xl font-bold text-[var(--foreground)]">
            Order Processing
          </h2>
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[27px] top-10 hidden h-[calc(100%-80px)] w-0.5 bg-[var(--border)] sm:block lg:hidden" />
            <div className="hidden lg:absolute lg:left-0 lg:right-0 lg:top-[34px] lg:block lg:h-0.5 lg:bg-[var(--border)]" />
            
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {processingSteps.map((step) => (
                <Card key={step.step} className="relative border-[var(--border)]">
                  <CardContent className="p-5">
                    <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--primary)] text-lg font-bold text-white shadow-lg">
                      {step.step}
                    </div>
                    <h3 className="mb-1 font-semibold text-[var(--foreground)]">{step.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">{step.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Delivery Zones Table */}
        <Card className="border-[var(--border)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[var(--foreground)]">
              <Globe className="h-5 w-5 text-[var(--primary)]" />
              Delivery Times by Region
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="p-3 text-left text-sm font-semibold text-[var(--foreground)]">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        Region
                      </div>
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-[var(--foreground)]">
                      <div className="flex items-center gap-2">
                        <Truck className="h-4 w-4" />
                        Standard
                      </div>
                    </th>
                    <th className="p-3 text-left text-sm font-semibold text-[var(--foreground)]">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4" />
                        Express
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {deliveryZones.map((zone, index) => (
                    <tr 
                      key={zone.zone} 
                      className={index !== deliveryZones.length - 1 ? "border-b border-[var(--border)]" : ""}
                    >
                      <td className="p-3 text-sm font-medium text-[var(--foreground)]">{zone.zone}</td>
                      <td className="p-3 text-sm text-[var(--muted-foreground)]">{zone.standard}</td>
                      <td className="p-3 text-sm text-[var(--muted-foreground)]">{zone.express}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Order Tracking */}
        <Card className="border-[var(--primary)]/30 bg-gradient-to-br from-[var(--primary)]/5 to-[var(--secondary)]/10">
          <CardContent className="flex flex-col items-center gap-4 p-6 text-center sm:flex-row sm:text-left">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[var(--primary)]">
              <Search className="h-7 w-7 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="mb-1 text-lg font-bold text-[var(--foreground)]">
                Track Your Order
              </h3>
              <p className="text-[var(--muted-foreground)]">
                Once your order ships, you&apos;ll receive an email with a tracking number. You can track
                your package directly through the carrier&apos;s website or right here on BabyNest.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Important Notes */}
        <Card className="border-[var(--border)]">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-[var(--foreground)]">
              <CheckCircle2 className="h-5 w-5 text-[var(--primary)]" />
              Good to Know
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {importantNotes.map((note, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-[var(--muted-foreground)]">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-green-500" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        {/* International Shipping Notice */}
        <Card className="border-amber-200 bg-amber-50/30">
          <CardContent className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-amber-100">
              <AlertTriangle className="h-5 w-5 text-amber-600" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-amber-800">International Shipping</h3>
              <p className="text-sm text-amber-700 leading-relaxed">
                We currently ship to the Continental US, Alaska, Hawaii, US Territories, and Canada.
                International shipping to other countries is coming soon! Sign up for our newsletter
                to be notified when we expand our shipping zones.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Contact Card */}
        <Card className="border-[var(--primary)]/30 bg-[var(--primary)]/5">
          <CardContent className="flex items-start gap-4 p-6">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[var(--primary)]">
              <Mail className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="mb-1 font-semibold text-[var(--foreground)]">Questions About Shipping?</h3>
              <p className="text-sm text-[var(--muted-foreground)]">
                If you have any questions about shipping or need to update your delivery address, please contact us at{" "}
                <Link href="mailto:shipping@babynest.com" className="text-[var(--primary)] font-medium hover:underline">
                  shipping@babynest.com
                </Link>
                {" "}or via our{" "}
                <Link href="/contact" className="text-[var(--primary)] font-medium hover:underline">
                  Contact Page
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
