import { Metadata } from "next";
import { notFound } from "next/navigation";
import { products } from "@/features/landing/data";
import {
    ProductImageGallery,
    ProductInfo,
    BundleSelector,
    AddToCartSection,
    ProductAccordions,
    StickyAddToCart,
    ProductFeaturesSpotlight,
    ProductComparison,
    TrustBar,
    ProductHowToUse,
} from "@/features/product/components";

type TProductPageProps = {
    params: Promise<{ id: string }>;
};

export async function generateMetadata({
    params,
}: TProductPageProps): Promise<Metadata> {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        return {
            title: "Product Not Found | BabyNest",
        };
    }

    return {
        title: `${product.name} - ${product.tagline} | BabyNest`,
        description: product.description,
        openGraph: {
            title: `${product.name} | BabyNest`,
            description: product.tagline,
            images: [{ url: product.image }],
        },
    };
}

export default async function ProductPage({ params }: TProductPageProps) {
    const { id } = await params;
    const product = products.find((p) => p.id === id);

    if (!product) {
        notFound();
    }

    return (
        <>
            <div className="min-h-screen bg-[var(--background)]">
                <div className="container mx-auto px-4 py-6">
                    {/* Desktop: Two Column Layout, Mobile: Single Column */}
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                            {/* Left Column - Image Gallery (Sticky on Desktop) */}
                            <div className="lg:sticky lg:top-6 lg:self-start">
                                <ProductImageGallery images={product.images} productName={product.name} />
                            </div>

                            {/* Right Column - Product Info & Actions */}
                            <div className="space-y-6">
                                {/* Product Info Section */}
                                <ProductInfo
                                    name={product.name}
                                    rating={product.rating}
                                    reviewCount={product.reviewCount}
                                    inStock={product.inStock}
                                    tagline={product.tagline}
                                    price={product.price}
                                    originalPrice={product.originalPrice}
                                    badge={product.badge}
                                    features={product.features}
                                />

                                {/* Bundle Selector */}
                                <BundleSelector bundles={product.bundles} />

                                {/* Add to Cart Section */}
                                <AddToCartSection
                                    productId={product.id}
                                    productName={product.name}
                                    productImage={product.image}
                                    selectedBundle={product.bundles[0]}
                                    shippingCountry={product.shippingCountry}
                                    paymentMethods={product.paymentMethods}
                                    trustBadges={product.trustBadges}
                                />

                                {/* Product Accordions */}
                                <ProductAccordions
                                    howItWorks={product.howItWorks}
                                    featureDetails={product.featureDetails}
                                    guaranteeInfo={product.guaranteeInfo}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Product Features Spotlight - Full Width Section */}
                <div className="bg-gradient-to-b from-[var(--background)] via-white to-[var(--background)]">
                    <ProductFeaturesSpotlight
                        features={product.spotlightFeatures}
                        productName={product.name}
                    />
                </div>

                {/* Product Comparison Section */}
                {product.comparison && (
                    <div className="bg-gradient-to-b from-[var(--background)] via-[var(--secondary)]/5 to-[var(--background)]">
                        <ProductComparison comparison={product.comparison} />
                    </div>
                )}

                {/* Trust Bar - Scrolling Banner */}
                {product.trustBar && (
                    <TrustBar trustBar={product.trustBar} />
                )}

                {/* How To Use Section */}
                {product.howToUseSection && (
                    <div className="bg-gradient-to-b from-[var(--background)] via-[var(--secondary)]/5 to-[var(--background)]">
                        <ProductHowToUse
                            howToUse={product.howToUseSection}
                            productName={product.name}
                        />
                    </div>
                )}


                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto">
                        {/* Bottom Spacing for sticky bar */}
                        <div className="h-20 lg:h-8"></div>
                    </div>
                </div>
            </div>

            {/* Sticky Add to Cart (Mobile Only) */}
            <StickyAddToCart
                productId={product.id}
                productName={product.name}
                price={product.bundles[0].discountedPrice}
                image={product.image}
                bundleId={product.bundles[0].id}
                bundleLabel={product.bundles[0].label}
            />
        </>
    );
}
