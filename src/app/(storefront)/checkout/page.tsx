"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/store";
import {
    CheckoutProgress,
    ShippingAddressForm,
    ShippingMethodSelector,
    PaymentMethodSelector,
    OrderSummaryCard,
    OrderConfirmation,
} from "@/features/checkout/components";
import {
    TShippingAddress,
    TPaymentMethod,
    TCreditCardInfo,
    TCheckoutStep,
    TOrderSummary,
    SHIPPING_METHODS,
} from "@/features/checkout/types";
import {
    ArrowLeft,
    ArrowRight,
    ShieldCheck,
    Lock,
    Truck,
    RotateCcw,
} from "lucide-react";
import Link from "next/link";

// Initial states
const initialShippingAddress: TShippingAddress = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
};

const initialCreditCardInfo: TCreditCardInfo = {
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
};

export default function CheckoutPage() {
    const router = useRouter();
    const { items, subtotal, updateQuantity, removeItem, clearCart } = useCart();
    
    // States
    const [currentStep, setCurrentStep] = useState<TCheckoutStep>("shipping");
    const [shippingAddress, setShippingAddress] = useState<TShippingAddress>(
        initialShippingAddress
    );
    const [selectedShippingMethod, setSelectedShippingMethod] = useState("free");
    const [paymentMethod, setPaymentMethod] =
        useState<TPaymentMethod>("credit_card");
    const [creditCardInfo, setCreditCardInfo] =
        useState<TCreditCardInfo>(initialCreditCardInfo);
    const [promoCode, setPromoCode] = useState("");
    const [promoApplied, setPromoApplied] = useState(false);
    const [promoError, setPromoError] = useState("");
    const [orderId, setOrderId] = useState("");
    const [isProcessing, setIsProcessing] = useState(false);
    
    // Validation errors
    const [shippingErrors, setShippingErrors] = useState<
        Partial<Record<keyof TShippingAddress, string>>
    >({});
    const [cardErrors, setCardErrors] = useState<
        Partial<Record<keyof TCreditCardInfo, string>>
    >({});

    // Check if cart is empty and redirect
    useEffect(() => {
        if (items.length === 0 && currentStep !== "confirmation") {
            router.push("/");
        }
    }, [items.length, currentStep, router]);

    // Calculate order summary
    const calculateSummary = (): TOrderSummary => {
        const cartSubtotal = subtotal();
        const shippingMethod = SHIPPING_METHODS.find(
            (m) => m.id === selectedShippingMethod
        );
        const shipping = shippingMethod?.price || 0;
        const taxRate = 0.08; // 8% tax
        const tax = cartSubtotal * taxRate;
        const discount = promoApplied ? cartSubtotal * 0.1 : 0; // 10% discount
        const total = cartSubtotal + shipping + tax - discount;

        return {
            subtotal: cartSubtotal,
            shipping,
            tax,
            discount,
            total,
        };
    };

    const summary = calculateSummary();

    // Validation functions
    const validateShippingAddress = (): boolean => {
        const errors: Partial<Record<keyof TShippingAddress, string>> = {};

        if (!shippingAddress.firstName.trim())
            errors.firstName = "First name is required";
        if (!shippingAddress.lastName.trim())
            errors.lastName = "Last name is required";
        if (!shippingAddress.email.trim()) {
            errors.email = "Email is required";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(shippingAddress.email)) {
            errors.email = "Please enter a valid email";
        }
        if (!shippingAddress.phone.trim())
            errors.phone = "Phone number is required";
        if (!shippingAddress.address.trim())
            errors.address = "Address is required";
        if (!shippingAddress.city.trim()) errors.city = "City is required";
        if (!shippingAddress.state) errors.state = "State is required";
        if (!shippingAddress.zipCode.trim())
            errors.zipCode = "ZIP code is required";
        if (!shippingAddress.country) errors.country = "Country is required";

        setShippingErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const validatePayment = (): boolean => {
        if (paymentMethod !== "credit_card") return true;

        const errors: Partial<Record<keyof TCreditCardInfo, string>> = {};

        if (!creditCardInfo.cardNumber.trim()) {
            errors.cardNumber = "Card number is required";
        } else if (creditCardInfo.cardNumber.replace(/\D/g, "").length < 16) {
            errors.cardNumber = "Please enter a valid card number";
        }

        if (!creditCardInfo.expiryDate.trim()) {
            errors.expiryDate = "Expiry date is required";
        } else if (creditCardInfo.expiryDate.length < 4) {
            errors.expiryDate = "Please enter a valid expiry date";
        }

        if (!creditCardInfo.cvv.trim()) {
            errors.cvv = "CVV is required";
        } else if (creditCardInfo.cvv.length < 3) {
            errors.cvv = "Please enter a valid CVV";
        }

        if (!creditCardInfo.cardholderName.trim()) {
            errors.cardholderName = "Cardholder name is required";
        }

        setCardErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle promo code
    const handleApplyPromoCode = async () => {
        setPromoError("");
        
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 500));

        // For demo purposes, accept "SAVE10" as valid code
        if (promoCode.toUpperCase() === "SAVE10") {
            setPromoApplied(true);
        } else {
            setPromoError("Invalid promo code");
        }
    };

    // Navigation
    const handleContinue = async () => {
        if (currentStep === "shipping") {
            if (validateShippingAddress()) {
                setCurrentStep("payment");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        } else if (currentStep === "payment") {
            if (validatePayment()) {
                setIsProcessing(true);
                
                // Simulate payment processing
                await new Promise((resolve) => setTimeout(resolve, 2000));
                
                // Generate order ID
                const newOrderId = `BN-${Date.now()}-${Math.random()
                    .toString(36)
                    .substring(2, 7)
                    .toUpperCase()}`;
                setOrderId(newOrderId);
                
                // Clear cart after successful order
                clearCart();
                
                setIsProcessing(false);
                setCurrentStep("confirmation");
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        }
    };

    const handleBack = () => {
        if (currentStep === "payment") {
            setCurrentStep("shipping");
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    // Render empty cart state
    if (items.length === 0 && currentStep !== "confirmation") {
        return (
            <main className="min-h-screen bg-[var(--background)]">
                <div className="container mx-auto px-4 py-16 text-center">
                    <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
                    <p className="text-[var(--muted-foreground)] mb-8">
                        Add some products to your cart to checkout
                    </p>
                    <Link href="/">
                        <Button>Continue Shopping</Button>
                    </Link>
                </div>
            </main>
        );
    }

    return (
        <main className="min-h-screen bg-[var(--background)]">
            {/* Progress Bar */}
            <div className="bg-[var(--card)] border-b border-[var(--border)]">
                <div className="container mx-auto">
                    <CheckoutProgress currentStep={currentStep} />
                </div>
            </div>

            <div className="container mx-auto px-4 py-8">
                {currentStep === "confirmation" ? (
                    <OrderConfirmation
                        orderId={orderId}
                        shippingAddress={shippingAddress}
                        shippingMethodId={selectedShippingMethod}
                        paymentMethod={paymentMethod}
                        items={items.length > 0 ? items : []}
                        summary={summary}
                    />
                ) : (
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content - Left Side */}
                        <div className="lg:col-span-2 space-y-6">
                            {/* Back button on mobile */}
                            {currentStep === "payment" && (
                                <button
                                    onClick={handleBack}
                                    className="flex items-center gap-2 text-sm text-[var(--muted-foreground)] hover:text-[var(--foreground)] transition-colors lg:hidden"
                                >
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Shipping
                                </button>
                            )}

                            {/* Step Content */}
                            {currentStep === "shipping" && (
                                <>
                                    <ShippingAddressForm
                                        address={shippingAddress}
                                        onChange={setShippingAddress}
                                        errors={shippingErrors}
                                    />
                                    <ShippingMethodSelector
                                        selectedMethod={selectedShippingMethod}
                                        onChange={setSelectedShippingMethod}
                                    />
                                </>
                            )}

                            {currentStep === "payment" && (
                                <PaymentMethodSelector
                                    selectedMethod={paymentMethod}
                                    onChange={setPaymentMethod}
                                    creditCardInfo={creditCardInfo}
                                    onCreditCardChange={setCreditCardInfo}
                                    errors={cardErrors}
                                />
                            )}

                            {/* Navigation Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4 pt-4">
                                {currentStep === "payment" && (
                                    <Button
                                        variant="outline"
                                        onClick={handleBack}
                                        className="hidden lg:flex items-center gap-2 h-12 px-6"
                                    >
                                        <ArrowLeft className="w-4 h-4" />
                                        Back to Shipping
                                    </Button>
                                )}

                                <Button
                                    onClick={handleContinue}
                                    disabled={isProcessing}
                                    className="flex-1 sm:flex-none h-12 px-8 bg-[var(--primary)] hover:bg-[var(--primary)]/90 text-white font-semibold text-base gap-2"
                                >
                                    {isProcessing ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                            Processing...
                                        </>
                                    ) : currentStep === "shipping" ? (
                                        <>
                                            Continue to Payment
                                            <ArrowRight className="w-4 h-4" />
                                        </>
                                    ) : (
                                        <>
                                            <Lock className="w-4 h-4" />
                                            Pay ${summary.total.toFixed(2)}
                                        </>
                                    )}
                                </Button>
                            </div>

                            {/* Trust Indicators */}
                            <div className="flex flex-wrap items-center justify-center gap-6 py-6 text-sm text-[var(--muted-foreground)]">
                                <div className="flex items-center gap-2">
                                    <ShieldCheck className="w-5 h-5 text-emerald-500" />
                                    <span>Secure Checkout</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Lock className="w-5 h-5 text-[var(--primary)]" />
                                    <span>256-bit SSL Encryption</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Truck className="w-5 h-5 text-[var(--primary)]" />
                                    <span>Fast Delivery</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <RotateCcw className="w-5 h-5 text-[var(--primary)]" />
                                    <span>Easy Returns</span>
                                </div>
                            </div>
                        </div>

                        {/* Order Summary - Right Side */}
                        <div className="lg:col-span-1">
                            <OrderSummaryCard
                                items={items}
                                summary={summary}
                                selectedShippingMethod={selectedShippingMethod}
                                promoCode={promoCode}
                                onPromoCodeChange={setPromoCode}
                                onApplyPromoCode={handleApplyPromoCode}
                                promoApplied={promoApplied}
                                promoError={promoError}
                                onUpdateQuantity={updateQuantity}
                                onRemoveItem={removeItem}
                            />
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}
