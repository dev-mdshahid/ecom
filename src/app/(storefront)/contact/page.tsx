import type { Metadata } from "next";
import { ContactHero, ContactInfoCards, ContactForm } from "@/features/contact/components";

export const metadata: Metadata = {
  title: "Contact Us | BabyNest - We're Here to Help",
  description:
    "Get in touch with BabyNest. We're here to answer your questions about our baby care products, orders, or any concerns. Reach us via email, phone, or WhatsApp.",
  openGraph: {
    title: "Contact Us | BabyNest",
    description: "Have questions? Our friendly team is ready to help you with anything you need.",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <ContactInfoCards />
      <ContactForm />
    </main>
  );
}
