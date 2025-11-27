"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

type TProductImageGalleryProps = {
    images: string[];
    productName: string;
};

export function ProductImageGallery({
    images,
    productName,
}: TProductImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="space-y-3">
            {/* Main Image */}
            <div className="relative aspect-square bg-gradient-to-br from-[#f5e6f0] to-[#e8d4e8] rounded-2xl overflow-hidden">
                <div className="relative w-full h-full flex items-center justify-center p-4">
                    {/* Placeholder koala emoji - replace with actual images */}
                    <div className="text-8xl">🐨</div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md"
                            onClick={goToPrevious}
                        >
                            <ChevronLeft className="w-5 h-5 text-[var(--foreground)]" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="icon"
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full shadow-md"
                            onClick={goToNext}
                        >
                            <ChevronRight className="w-5 h-5 text-[var(--foreground)]" />
                        </Button>
                    </>
                )}
            </div>

            {/* Thumbnail Navigation */}
            {images.length > 1 && (
                <div className="flex gap-2 overflow-x-auto pb-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`flex-shrink-0 w-16 h-16 rounded-lg border-2 transition-all ${
                                currentIndex === index
                                    ? "border-[var(--primary)] shadow-md"
                                    : "border-[var(--border)] opacity-60 hover:opacity-100"
                            } bg-gradient-to-br from-[#f5e6f0] to-[#e8d4e8] flex items-center justify-center`}
                        >
                            <span className="text-2xl">🐨</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
