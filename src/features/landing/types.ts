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

export type TProductReview = {
    id: string;
    name: string;
    age: string;
    location: string;
    rating: number;
    content: string;
    date: string;
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
    howItWorks: string[];
    guaranteeInfo: string[];
    reviews: TProductReview[];
    paymentMethods: string[];
    trustBadges: { icon: string; text: string }[];
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
