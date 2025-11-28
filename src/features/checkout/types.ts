// Checkout Feature Types

export type TShippingAddress = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
};

export type TShippingMethod = {
    id: string;
    name: string;
    description: string;
    price: number;
    estimatedDays: string;
};

export type TPaymentMethod = 'credit_card' | 'paypal' | 'buy_now_pay_later' | 'cash_on_delivery';

export type TCreditCardInfo = {
    cardNumber: string;
    expiryDate: string;
    cvv: string;
    cardholderName: string;
};

export type TCheckoutStep = 'shipping' | 'payment' | 'confirmation';

export type TPromoCode = {
    code: string;
    discount: number;
    type: 'percentage' | 'fixed';
};

export type TOrderSummary = {
    subtotal: number;
    shipping: number;
    tax: number;
    discount: number;
    total: number;
};

export const SHIPPING_METHODS: TShippingMethod[] = [
    {
        id: 'free',
        name: 'Free Shipping',
        description: 'Standard delivery',
        price: 0,
        estimatedDays: '7-10 business days',
    },
    {
        id: 'express',
        name: 'Express Shipping',
        description: 'Fast delivery',
        price: 9.99,
        estimatedDays: '2-3 business days',
    },
    {
        id: 'overnight',
        name: 'Overnight Shipping',
        description: 'Next day delivery',
        price: 19.99,
        estimatedDays: '1 business day',
    },
];

export const COUNTRIES = [
    { code: 'US', name: 'United States' },
    { code: 'CA', name: 'Canada' },
    { code: 'GB', name: 'United Kingdom' },
    { code: 'AU', name: 'Australia' },
    { code: 'DE', name: 'Germany' },
    { code: 'FR', name: 'France' },
];

export const US_STATES = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut',
    'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa',
    'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan',
    'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire',
    'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio',
    'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota',
    'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia',
    'Wisconsin', 'Wyoming'
];
