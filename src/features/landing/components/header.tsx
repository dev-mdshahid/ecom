"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import { useState } from "react";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
} from "@/components/ui/sheet";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "#products" },
        { name: "How It Works", href: "#how-it-works" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
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
                        <Button
                            asChild
                            variant="ghost"
                            size="icon"
                            className="relative hover:bg-[var(--muted)]"
                        >
                            <Link href="/cart">
                                <ShoppingCart className="w-5 h-5" />
                                <span className="sr-only">Shopping Cart</span>
                            </Link>
                        </Button>

                        {/* Mobile Menu */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="md:hidden">
                                <Button variant="ghost" size="icon">
                                    <Menu className="w-5 h-5" />
                                    <span className="sr-only">Toggle menu</span>
                                </Button>
                            </SheetTrigger>
                            <SheetContent side="right" className="w-64">
                                <SheetHeader>
                                    <SheetTitle>Menu</SheetTitle>
                                </SheetHeader>
                                <nav className="flex flex-col space-y-4 mt-8">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="text-base font-medium text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </nav>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>
            </div>
        </header>
    );
}
