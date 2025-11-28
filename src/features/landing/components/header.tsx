"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu, Home, Package, Info, Mail, Sparkles } from "lucide-react";
import { useState } from "react";
import { useCart } from "@/features/cart/store";
import { CartDrawer } from "@/features/cart/components/cart-drawer";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";

function CartButton() {
    const { openDrawer, totalItems } = useCart();
    const itemCount = totalItems();

    return (
        <Button
            variant="ghost"
            size="icon"
            className="relative hover:bg-[var(--muted)]"
            onClick={openDrawer}
        >
            <ShoppingCart className="w-5 h-5" />
            {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[var(--primary)] text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {itemCount > 9 ? "9+" : itemCount}
                </span>
            )}
            <span className="sr-only">Shopping Cart</span>
        </Button>
    );
}

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/", icon: Home },
        { name: "Shop", href: "#products", icon: Package },
        { name: "How It Works", href: "#how-it-works", icon: Sparkles },
        { name: "About", href: "/about", icon: Info },
        { name: "Contact", href: "/contact", icon: Mail },
    ];

    return (
        <header className="sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[var(--card)]/95 backdrop-blur supports-[backdrop-filter]:bg-[var(--card)]/80">
            <div className="container mx-auto px-4">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)] flex items-center justify-center shadow-md">
                            <span className="text-white font-bold text-xl">B</span>
                        </div>
                        <span className="text-xl font-bold text-[var(--foreground)]">
                            BabyNest
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-sm font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right Side Actions */}
                    <div className="flex items-center space-x-4">
                        <CartButton />
                        <CartDrawer />

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-5 h-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-80 p-0 flex flex-col">
                                {/* Header with gradient */}
                                <div className="bg-gradient-to-br from-[var(--primary)] to-[var(--accent-foreground)] p-6 pb-8">
                                    <SheetHeader>
                                        <div className="flex items-center space-x-3 mb-2">
                                            <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-lg">
                                                <span className="text-white font-bold text-2xl">B</span>
                                            </div>
                                            <div>
                                                <SheetTitle className="text-white text-xl font-bold">BabyNest</SheetTitle>
                                                <SheetDescription className="text-white/80 text-sm">
                                                    Safe & Trusted Baby Care
                                                </SheetDescription>
                                            </div>
                                        </div>
                                    </SheetHeader>
                                </div>

                                {/* Navigation Links */}
                                <nav className="flex-1 px-4 py-6 overflow-y-auto">
                                    <div className="space-y-2">
                                        {navigation.map((item, index) => {
                                            const Icon = item.icon;
                                            return (
                                                <div key={item.name}>
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className="flex items-center space-x-4 px-4 py-3.5 rounded-lg text-[var(--foreground)] hover:bg-[var(--muted)] hover:text-[var(--primary)] transition-all duration-200 group"
                                                    >
                                                        <div className="w-10 h-10 rounded-lg bg-[var(--muted)] flex items-center justify-center group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-200">
                                                            <Icon className="w-5 h-5" />
                                                        </div>
                                                        <span className="text-base font-medium">{item.name}</span>
                                                    </Link>
                                                    {index < navigation.length - 1 && (
                                                        <Separator className="my-2" />
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </nav>

                                {/* Footer Section */}
                                <div className="border-t border-[var(--border)] p-6 bg-[var(--muted)]/30">
                                    <p className="text-xs text-center text-[var(--muted-foreground)]">
                                        Trusted by thousands of parents
                                    </p>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
