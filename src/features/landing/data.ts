import { TProduct, TTestimonial, TFeature, TFAQ, TStat, TTrustBar } from "./types";

// Global trust bar data that can be used across products
export const defaultTrustBar: TTrustBar = {
    items: [
        { icon: "FlaskConical", text: "SCIENCE-BACKED & NON-INVASIVE" },
        { icon: "Award", text: "PATENTED & INNOVATIVE TECHNOLOGIES" },
        { icon: "Trophy", text: "27x AWARD-WINNING PRODUCTS" },
        { icon: "ShieldCheck", text: "CLINICALLY TESTED & CERTIFIED" },
        { icon: "Heart", text: "LOVED BY 50,000+ PARENTS" },
        { icon: "Sparkles", text: "PREMIUM QUALITY MATERIALS" },
    ],
};

export const products: TProduct[] = [
    {
        id: "1",
        name: "The Relief Koala™",
        tagline: "For relaxation, calmness, and improved rest",
        description:
            "Professional-grade trimmer designed specifically for delicate baby hair. Ultra-quiet motor and rounded ceramic blades ensure perfect safety.",
        price: 39.99,
        originalPrice: 79.98,
        image: "/products/koala-main.jpg",
        images: [
            "/products/koala-main.jpg",
            "/products/koala-alt-1.jpg",
            "/products/koala-alt-2.jpg",
            "/products/koala-alt-3.jpg",
            "/products/koala-alt-4.jpg",
        ],
        badge: "SALE ENDS JULY 15TH",
        inStock: true,
        rating: 4.76,
        reviewCount: 1475,
        saleEndDate: "2025-07-15",
        shippingCountry: "Bangladesh",
        features: [
            "Feel more relief",
            "Through simple breathing patterns & heartbeat sounds",
            "Supports healthy sleep",
            "Build healthy routines to feel your best",
            "VIP Prime Day Sale",
            "50% Off Sitewide + FREE Shipping",
        ],
        bundles: [
            {
                id: "bundle-3",
                quantity: 3,
                label: "3x Koala's",
                originalPrice: 119.97,
                discountedPrice: 95.98,
                discount: "20%",
                badge: "MOST SAVINGS",
            },
            {
                id: "bundle-2",
                quantity: 2,
                label: "2x Koala's",
                originalPrice: 79.98,
                discountedPrice: 71.99,
                discount: "10%",
                badge: "POPULAR",
            },
            {
                id: "bundle-1",
                quantity: 1,
                label: "1x Koala",
                originalPrice: 79.98,
                discountedPrice: 39.99,
                discount: "50%",
            },
        ],
        featureDetails: [
            {
                icon: "💆",
                title: "Feel more relief",
                description: "Through simple breathing patterns & heartbeat sounds",
            },
            {
                icon: "😴",
                title: "Supports healthy sleep",
                description: "Build healthy routines to feel your best",
            },
            {
                icon: "🏆",
                title: "VIP Prime Day Sale",
                description: "50% Off Sitewide + FREE Shipping",
            },
        ],
        spotlightFeatures: [
            {
                icon: "RefreshCw",
                title: "180° Adjustable Pivot",
                description: "Tilt and position the Koala forwards or backwards for the perfect cuddling angle and comfort.",
                highlight: "Ergonomic Design",
            },
            {
                icon: "Volume2",
                title: "Soothing Sound System",
                description: "Built-in speaker plays calming heartbeat sounds and white noise to help you drift off peacefully.",
            },
            {
                icon: "BatteryCharging",
                title: "Long-Lasting Battery",
                description: "Up to 8 hours of continuous use on a single charge, with convenient USB-C fast charging.",
                highlight: "All-Night Comfort",
            },
            {
                icon: "Mic",
                title: "Breathing Sensor",
                description: "Advanced sensor mimics natural breathing patterns, syncing with your body for deeper relaxation.",
            },
        ],
        howItWorks: [
            "Reduces tension. The Relief Koala helps you relax and feel better, like a big, warm hug. Its soft, cuddly body and soothing breathing motion will make your tension melt away.",
            "Instant calmness. Its comforting presence and soft, huggable body will give you the emotional support you need.",
            "Emotional comfort when you need it. Its comforting presence and soft, huggable body will give you the emotional support you need.",
            "Restful & Anxiety Free Sleep. The soft nightlight and soothing sounds will create the perfect environment for a peaceful night's sleep.",
        ],
        guaranteeInfo: [
            "30-day money back guarantee - no questions asked",
            "2-year warranty coverage on all defects",
            "Free replacement if you're not satisfied",
        ],
        reviews: [
            {
                id: "r1",
                name: "Jess F.",
                age: "18 Year Old",
                location: "New York",
                rating: 5,
                content:
                    "My koala has been amazing at helping me get to sleep! Used to take me ages, as I'm generally an anxious person, but this makes it so much easier!!",
                date: "2024-11-15",
            },
        ],
        paymentMethods: ["amex", "diners", "discover", "googlepay", "jcb", "mastercard", "visa"],
        trustBadges: [
            { icon: "⏰", text: "2 Year Warranty" },
            { icon: "🚚", text: "Free Fast Shipping" },
            { icon: "↩️", text: "Free & Easy returns" },
        ],
        comparison: {
            sectionTitle: "Why Choose Relief Koala™",
            sectionSubtitle: "More Comfort. More Features. More Value.",
            ourBrandName: "Relief Koala™",
            competitorName: "Other Brands",
            features: [
                { label: "Price", ourValue: "$39.99", competitorValue: "$60-$120" },
                { label: "Breathing Simulation", ourValue: true, competitorValue: false },
                { label: "Heartbeat Sounds", ourValue: true, competitorValue: "Some" },
                { label: "White Noise", ourValue: true, competitorValue: true },
                { label: "Soft Night Light", ourValue: true, competitorValue: false },
                { label: "Battery Life", ourValue: "8 hours", competitorValue: "3-5 hours" },
                { label: "USB-C Charging", ourValue: true, competitorValue: false },
                { label: "Material", ourValue: "Premium Plush", competitorValue: "Standard" },
                { label: "180° Adjustable", ourValue: true, competitorValue: false },
                { label: "Money Back Guarantee", ourValue: "60 days", competitorValue: "30 days" },
            ],
        },
        trustBar: defaultTrustBar,
    },
    {
        id: "2",
        name: "Nasal Aspirator",
        tagline: "Hospital-Grade Suction",
        description:
            "Clear your baby's stuffy nose safely and effectively. Gentle suction with easy-clean design makes congestion relief stress-free.",
        price: 24.99,
        originalPrice: 34.99,
        image: "/products/nose-sucker.jpg",
        images: ["/products/nose-sucker.jpg"],
        badge: "Top Rated",
        inStock: true,
        rating: 4.8,
        reviewCount: 892,
        shippingCountry: "Bangladesh",
        features: [
            "Safe gentle suction",
            "Easy to clean",
            "BPA-free materials",
            "3 silicone tips",
        ],
        bundles: [
            {
                id: "bundle-1",
                quantity: 1,
                label: "1x Aspirator",
                originalPrice: 34.99,
                discountedPrice: 24.99,
                discount: "30%",
            },
        ],
        featureDetails: [
            {
                icon: "🛡️",
                title: "Safe gentle suction",
                description: "Hospital-grade suction power that's gentle on baby",
            },
        ],
        spotlightFeatures: [
            {
                icon: "Shield",
                title: "Medical-Grade Safety",
                description: "BPA-free silicone tips designed by pediatricians for the safest suction experience.",
                highlight: "Doctor Approved",
            },
            {
                icon: "Wind",
                title: "Adjustable Suction Power",
                description: "Three suction levels let you customize the strength for gentle and effective congestion relief.",
            },
            {
                icon: "Droplets",
                title: "Easy Clean Design",
                description: "Fully disassembles for thorough cleaning and sanitizing after each use.",
                highlight: "Hygienic",
            },
            {
                icon: "Baby",
                title: "Newborn Safe",
                description: "Specially designed soft tips for delicate newborn nostrils, safe from day one.",
            },
        ],
        howItWorks: [
            "Place soft tip at nostril entrance",
            "Gently suction to clear congestion",
            "Clean thoroughly after each use",
        ],
        guaranteeInfo: ["30-day money back guarantee"],
        reviews: [],
        paymentMethods: ["visa", "mastercard"],
        trustBadges: [
            { icon: "🚚", text: "Free Shipping" },
            { icon: "↩️", text: "Easy returns" },
        ],
        comparison: {
            sectionTitle: "Why Choose Our Nasal Aspirator",
            sectionSubtitle: "Safer. Gentler. More Effective.",
            ourBrandName: "BabyNest™",
            competitorName: "Other Brands",
            features: [
                { label: "Price", ourValue: "$24.99", competitorValue: "$30-$50" },
                { label: "Medical-Grade Suction", ourValue: true, competitorValue: "Some" },
                { label: "Adjustable Power", ourValue: "3 Levels", competitorValue: "1-2 Levels" },
                { label: "BPA-Free Materials", ourValue: true, competitorValue: true },
                { label: "Silicone Tips Included", ourValue: "3 Tips", competitorValue: "1-2 Tips" },
                { label: "Easy Clean Design", ourValue: true, competitorValue: false },
                { label: "Quiet Operation", ourValue: true, competitorValue: false },
                { label: "Pediatrician Approved", ourValue: true, competitorValue: "Some" },
                { label: "Newborn Safe", ourValue: true, competitorValue: true },
                { label: "Money Back Guarantee", ourValue: "30 days", competitorValue: "14 days" },
            ],
        },
        trustBar: defaultTrustBar,
    },
    {
        id: "3",
        name: "Electric Nail Grinder",
        tagline: "Safe & Stress-Free",
        description:
            "Trim tiny nails safely without clippers. Gentle rotating file with LED light makes nail care quick and worry-free.",
        price: 29.99,
        originalPrice: 49.99,
        image: "/products/nail-grinder.jpg",
        images: ["/products/nail-grinder.jpg"],
        badge: "New",
        inStock: true,
        rating: 4.9,
        reviewCount: 1203,
        shippingCountry: "Bangladesh",
        features: [
            "6 grinding pads",
            "Built-in LED light",
            "Quiet motor",
            "Suitable 0-12 months",
        ],
        bundles: [
            {
                id: "bundle-1",
                quantity: 1,
                label: "1x Nail Grinder",
                originalPrice: 49.99,
                discountedPrice: 29.99,
                discount: "40%",
            },
        ],
        featureDetails: [
            {
                icon: "💡",
                title: "Built-in LED light",
                description: "See clearly even in low light conditions",
            },
        ],
        spotlightFeatures: [
            {
                icon: "Lightbulb",
                title: "Built-in LED Light",
                description: "Illuminate tiny nails perfectly even in low light, making nighttime nail care a breeze.",
                highlight: "See Clearly",
            },
            {
                icon: "Volume",
                title: "Whisper-Quiet Motor",
                description: "Ultra-quiet operation won't disturb sleeping babies—trim nails while they snooze peacefully.",
            },
            {
                icon: "Settings",
                title: "6 Grinding Pads",
                description: "Age-appropriate pads for newborns to toddlers, ensuring the perfect gentle file every time.",
                highlight: "All Ages",
            },
            {
                icon: "Zap",
                title: "USB Rechargeable",
                description: "Convenient USB charging means no batteries needed—always ready when you need it.",
            },
        ],
        howItWorks: [
            "Choose appropriate grinding pad",
            "Turn on LED light",
            "Gently file baby's nails while they sleep",
        ],
        guaranteeInfo: ["30-day money back guarantee"],
        reviews: [],
        paymentMethods: ["visa", "mastercard"],
        trustBadges: [
            { icon: "🚚", text: "Free Shipping" },
            { icon: "↩️", text: "Easy returns" },
        ],
        comparison: {
            sectionTitle: "Why Choose Our Nail Grinder",
            sectionSubtitle: "Safer. Quieter. Better for Baby.",
            ourBrandName: "BabyNest™",
            competitorName: "Other Brands",
            features: [
                { label: "Price", ourValue: "$29.99", competitorValue: "$35-$60" },
                { label: "Grinding Pads", ourValue: "6 Included", competitorValue: "2-4 Pads" },
                { label: "Built-in LED Light", ourValue: true, competitorValue: "Some" },
                { label: "Whisper-Quiet Motor", ourValue: true, competitorValue: false },
                { label: "USB Rechargeable", ourValue: true, competitorValue: false },
                { label: "Age Range", ourValue: "0-12 months", competitorValue: "3+ months" },
                { label: "Speed Settings", ourValue: "2 Speeds", competitorValue: "1 Speed" },
                { label: "Safe Grinding Angle", ourValue: true, competitorValue: "Some" },
                { label: "Compact & Portable", ourValue: true, competitorValue: true },
                { label: "Money Back Guarantee", ourValue: "30 days", competitorValue: "14 days" },
            ],
        },
        trustBar: defaultTrustBar,
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
