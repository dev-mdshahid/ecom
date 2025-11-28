import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        shop: [
            { name: "All Products", href: "#products" },
            { name: "Hair Trimmer", href: "/products/1" },
            { name: "Nasal Aspirator", href: "/products/2" },
            { name: "Nail Grinder", href: "/products/3" },
        ],
        company: [
            { name: "About Us", href: "/about" },
            { name: "Contact", href: "/contact" },
            { name: "FAQ", href: "#faq" },
            { name: "Blog", href: "/blog" },
        ],
        support: [
            { name: "Shipping & Delivery", href: "/shipping" },
            { name: "Return & Refund", href: "/return-policy" },
            { name: "Privacy Policy", href: "/privacy-policy" },
            { name: "Terms of Service", href: "/terms-of-service" },
        ],
    };

    const socialLinks = [
        { icon: Facebook, href: "#", label: "Facebook" },
        { icon: Instagram, href: "#", label: "Instagram" },
        { icon: Twitter, href: "#", label: "Twitter" },
        { icon: Mail, href: "mailto:hello@babynest.com", label: "Email" },
    ];

    return (
        <footer className="bg-[var(--card)] border-t border-[var(--border)]">
            <div className="container mx-auto px-4 py-16">
                {/* Top Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <Link href="/" className="flex items-center space-x-2 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)] flex items-center justify-center shadow-md">
                                <span className="text-white font-bold text-xl">B</span>
                            </div>
                            <span className="text-xl font-bold text-[var(--foreground)]">
                                BabyNest
                            </span>
                        </Link>
                        <p className="text-sm text-[var(--muted-foreground)] mb-6 max-w-xs">
                            Premium baby care products designed with love and certified for
                            safety. Because your little one deserves the best.
                        </p>
                        {/* Social Links */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    className="w-9 h-9 rounded-full bg-[var(--muted)] hover:bg-[var(--primary)] flex items-center justify-center transition-colors duration-300 group"
                                >
                                    <social.icon className="w-4 h-4 text-[var(--muted-foreground)] group-hover:text-white transition-colors" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Shop Links */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">
                            Shop
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.shop.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">
                            Company
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.company.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support Links */}
                    <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            {footerLinks.support.map((link) => (
                                <li key={link.name}>
                                    <Link
                                        href={link.href}
                                        className="text-sm text-[var(--muted-foreground)] hover:text-[var(--primary)] transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <Separator className="mb-8" />

                {/* Bottom Section */}
                <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--muted-foreground)]">
                    <p>© {currentYear} BabyNest. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">
                        Made with <span className="text-red-500">❤️</span> for parents
                    </p>
                </div>
            </div>
        </footer>
    );
}
