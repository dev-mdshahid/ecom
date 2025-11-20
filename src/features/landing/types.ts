// Landing Page Types

export type TProduct = {
    id: string;
    name: string;
    tagline: string;
    description: string;
    price: number;
    image: string;
    badge?: string;
    features: string[];
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
