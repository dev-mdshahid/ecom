// Landing Page Types

export type TProductBundle = {
    id: string;
    quantity: number;
    label: string;
    originalPrice: number;
    discountedPrice: number;
    discount: string;
    badge?: string;
};

export type TProductFeatureDetail = {
    icon: string;
    title: string;
    description: string;
};

export type TSpotlightFeature = {
    icon: string; // Lucide icon name (PascalCase, e.g., "RefreshCw", "Volume2")
    title: string;
    description: string;
    highlight?: string;
};

export type TProductReview = {
    id: string;
    name: string;
    age: string;
    location: string;
    rating: number;
    content: string;
    date: string;
};

export type TComparisonFeature = {
    label: string;
    ourValue: string | boolean;
    competitorValue: string | boolean;
};

export type TProductComparison = {
    sectionTitle: string;
    sectionSubtitle: string;
    ourBrandName: string;
    ourBrandImage?: string;
    competitorName: string;
    competitorImage?: string;
    features: TComparisonFeature[];
};

export type TTrustBarItem = {
    icon: string; // Lucide icon name (PascalCase)
    text: string;
};

export type TTrustBar = {
    items: TTrustBarItem[];
};

export type TProduct = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    originalPrice?: number;
    image: string;
    images: string[];
    badge?: string;
    features: string[];
    inStock: boolean;
    rating: number;
    reviewCount: number;
    saleEndDate?: string;
    shippingCountry: string;
    bundles: TProductBundle[];
    featureDetails: TProductFeatureDetail[];
    spotlightFeatures: TSpotlightFeature[];
    howItWorks: string[];
    guaranteeInfo: string[];
    reviews: TProductReview[];
    paymentMethods: string[];
    trustBadges: { icon: string; text: string }[];
    comparison?: TProductComparison;
    trustBar?: TTrustBar;
};

export type TTestimonial = {
    id: string;
    name: string;
    role: string;
    content: string;
    rating: number;
    avatar: string;
};

export type TFeature = {
    id: string;
    icon: string;
    title: string;
    description: string;
};

export type TFAQ = {
    id: string;
    question: string;
    answer: string;
};

export type TStat = {
    id: string;
    value: string;
    label: string;
    icon: string;
};
