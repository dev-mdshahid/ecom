import { TProduct, TTestimonial, TFeature, TFAQ, TStat } from "./types";

export const products: TProduct[] = [
    {
        id: "1",
        name: "Baby Hair Trimmer",
        tagline: "Gentle & Whisper-Quiet",
        description:
            "Professional-grade trimmer designed specifically for delicate baby hair. Ultra-quiet motor and rounded ceramic blades ensure perfect safety.",
        price: 39.99,
        image: "/products/hair-trimmer.jpg",
        badge: "Bestseller",
        features: [
            "Whisper-quiet operation",
            "Ceramic safety blades",
            "Rechargeable battery",
            "4 comb attachments",
        ],
    },
    {
        id: "2",
        name: "Nasal Aspirator",
        tagline: "Hospital-Grade Suction",
        description:
            "Clear your baby's stuffy nose safely and effectively. Gentle suction with easy-clean design makes congestion relief stress-free.",
        price: 24.99,
        image: "/products/nose-sucker.jpg",
        badge: "Top Rated",
        features: [
            "Safe gentle suction",
            "Easy to clean",
            "BPA-free materials",
            "3 silicone tips",
        ],
    },
    {
        id: "3",
        name: "Electric Nail Grinder",
        tagline: "Safe & Stress-Free",
        description:
            "Trim tiny nails safely without clippers. Gentle rotating file with LED light makes nail care quick and worry-free.",
        price: 29.99,
        image: "/products/nail-grinder.jpg",
        badge: "New",
        features: [
            "6 grinding pads",
            "Built-in LED light",
            "Quiet motor",
            "Suitable 0-12 months",
        ],
    },
];

export const testimonials: TTestimonial[] = [
    {
        id: "1",
        name: "Sarah Mitchell",
        role: "Mom of 2",
        content:
            "The hair trimmer is a lifesaver! My son used to cry during haircuts, but this is so quiet he barely notices. Highly recommend!",
        rating: 5,
        avatar: "SM",
    },
    {
        id: "2",
        name: "James Rodriguez",
        role: "First-Time Dad",
        content:
            "I was terrified of trimming my daughter's nails until I found this nail grinder. It's incredibly safe and works like magic.",
        rating: 5,
        avatar: "JR",
    },
    {
        id: "3",
        name: "Emily Chen",
        role: "Pediatric Nurse & Mom",
        content:
            "As a nurse, I'm very picky about baby products. BabyNest's quality is exceptional—hospital-grade and parent-friendly.",
        rating: 5,
        avatar: "EC",
    },
];

export const features: TFeature[] = [
    {
        id: "1",
        icon: "shield-check",
        title: "Hospital-Grade Safety",
        description:
            "Every product is rigorously tested and certified to meet the highest safety standards for newborns and infants.",
    },
    {
        id: "2",
        icon: "heart-pulse",
        title: "Pediatrician Approved",
        description:
            "Developed in consultation with pediatricians and recommended by healthcare professionals worldwide.",
    },
    {
        id: "3",
        icon: "truck",
        title: "Free Shipping",
        description:
            "Enjoy free express shipping on all orders over $50. Fast delivery to your doorstep in 3-5 business days.",
    },
    {
        id: "4",
        icon: "calendar-check",
        title: "30-Day Guarantee",
        description:
            "Not satisfied? Return any product within 30 days for a full refund—no questions asked.",
    },
];

export const faqs: TFAQ[] = [
    {
        id: "1",
        question: "Are your products safe for newborns?",
        answer:
            "Absolutely! All our products are specifically designed for newborns and infants. They meet strict safety certifications and are made with BPA-free, non-toxic materials. Our nail grinder is suitable from 0-12 months, and the hair trimmer features rounded ceramic blades.",
    },
    {
        id: "2",
        question: "What is your return policy?",
        answer:
            "We offer a hassle-free 30-day money-back guarantee. If you're not completely satisfied with your purchase, simply return it within 30 days for a full refund. No questions asked.",
    },
    {
        id: "3",
        question: "How long does shipping take?",
        answer:
            "We offer free express shipping on orders over $50. Most orders are delivered within 3-5 business days. You'll receive a tracking number as soon as your order ships.",
    },
    {
        id: "4",
        question: "Do the products come with a warranty?",
        answer:
            "Yes! All our products come with a 1-year manufacturer warranty covering defects in materials and workmanship. We also provide lifetime customer support.",
    },
    {
        id: "5",
        question: "Are replacement parts available?",
        answer:
            "Yes, we sell replacement parts separately. This includes grinding pads for the nail grinder, silicone tips for the nasal aspirator, and comb attachments for the hair trimmer.",
    },
];

export const stats: TStat[] = [
    {
        id: "1",
        value: "10,000+",
        label: "Happy Parents",
        icon: "users",
    },
    {
        id: "2",
        value: "50,000+",
        label: "Products Sold",
        icon: "package",
    },
    {
        id: "3",
        value: "4.9/5",
        label: "Average Rating",
        icon: "star",
    },
    {
        id: "4",
        value: "100%",
        label: "Safety Certified",
        icon: "shield-check",
    },
];
