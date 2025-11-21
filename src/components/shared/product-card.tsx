import { TProduct } from "@/features/landing/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Link from "next/link";

type TProductCardProps = {
    product: TProduct;
    index?: number;
};

export function ProductCard({ product, index = 0 }: TProductCardProps) {
    return (
        <Card
            className="group relative overflow-hidden bg-[var(--card)] border-[var(--border)] hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            style={{
                animationDelay: `${index * 150}ms`,
            }}
        >
            {/* Badge */}
            {product.badge && (
                <div className="absolute top-3 right-3 z-10">
                    <Badge className="bg-[var(--primary)] text-white border-none px-2.5 py-0.5 text-xs">
                        {product.badge}
                    </Badge>
                </div>
            )}

            {/* Product Image */}
            <div className="relative h-40 md:h-48 bg-gradient-to-br from-[var(--muted)] to-[var(--background)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-[var(--secondary)] opacity-30 blur-2xl" />
                </div>
                <div className="relative z-10 h-full flex items-center justify-center p-4 md:p-6">
                    {/* Placeholder - Replace with actual images */}
                    <div className="w-full h-full flex items-center justify-center text-4xl md:text-5xl opacity-50">
                        {product.id === "1" && "✂️"}
                        {product.id === "2" && "👃"}
                        {product.id === "3" && "💅"}
                    </div>
                </div>
            </div>

            <CardHeader className="pb-3 px-4 pt-4">
                <CardTitle className="text-lg md:text-xl font-bold text-[var(--foreground)]">
                    {product.name}
                </CardTitle>
                <p className="text-xs md:text-sm text-[var(--primary)] font-medium">
                    {product.tagline}
                </p>
            </CardHeader>

            <CardContent className="space-y-4 px-4 pb-4">
                <p className="text-[var(--muted-foreground)] text-xs md:text-sm leading-relaxed line-clamp-2">
                    {product.description}
                </p>

                {/* Features - Hidden on Mobile to save space */}
                <ul className="space-y-1.5 hidden md:block">
                    {product.features.slice(0, 3).map((feature, i) => (
                        <li
                            key={i}
                            className="flex items-start gap-1.5 text-xs text-[var(--foreground)]"
                        >
                            <Check className="w-3.5 h-3.5 text-[var(--primary)] mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                        </li>
                    ))}
                </ul>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-3 border-t border-[var(--border)]">
                    <div>
                        <span className="text-xl md:text-2xl font-bold text-[var(--foreground)]">
                            ${product.price}
                        </span>
                    </div>
                    <Button
                        asChild
                        size="sm"
                        className="bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white rounded-full text-xs md:text-sm px-3 md:px-4"
                    >
                        <Link href={`/products/${product.id}`}>View</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
