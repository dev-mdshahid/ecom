"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
    CreditCard,
    Wallet,
    Banknote,
    Clock,
    Lock,
    ShieldCheck,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { TPaymentMethod, TCreditCardInfo } from "../types";

type TPaymentMethodSelectorProps = {
    selectedMethod: TPaymentMethod;
    onChange: (method: TPaymentMethod) => void;
    creditCardInfo: TCreditCardInfo;
    onCreditCardChange: (info: TCreditCardInfo) => void;
    errors?: Partial<Record<keyof TCreditCardInfo, string>>;
};

const paymentMethods: {
    id: TPaymentMethod;
    name: string;
    icon: React.ReactNode;
    description: string;
    brandIcons?: string[];
}[] = [
    {
        id: "credit_card",
        name: "Credit Card",
        icon: <CreditCard className="w-5 h-5" />,
        description: "Pay securely with your card",
        brandIcons: ["VISA", "MC", "AMEX"],
    },
    {
        id: "paypal",
        name: "PayPal",
        icon: <Wallet className="w-5 h-5" />,
        description: "Fast and secure checkout",
    },
    {
        id: "buy_now_pay_later",
        name: "Buy Now, Pay Later",
        icon: <Clock className="w-5 h-5" />,
        description: "Split into 4 interest-free payments",
    },
    {
        id: "cash_on_delivery",
        name: "Cash on Delivery",
        icon: <Banknote className="w-5 h-5" />,
        description: "Pay when you receive your order",
    },
];

export function PaymentMethodSelector({
    selectedMethod,
    onChange,
    creditCardInfo,
    onCreditCardChange,
    errors = {},
}: TPaymentMethodSelectorProps) {
    const handleCardChange = (field: keyof TCreditCardInfo, value: string) => {
        onCreditCardChange({ ...creditCardInfo, [field]: value });
    };

    // Format card number with spaces
    const formatCardNumber = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        const groups = cleaned.match(/.{1,4}/g);
        return groups ? groups.join(" ").substring(0, 19) : cleaned;
    };

    // Format expiry date
    const formatExpiryDate = (value: string) => {
        const cleaned = value.replace(/\D/g, "");
        if (cleaned.length >= 2) {
            return `${cleaned.slice(0, 2)}/${cleaned.slice(2, 4)}`;
        }
        return cleaned;
    };

    return (
        <Card className="border-[var(--border)] shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                        <CreditCard className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    Select Payment Method
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <RadioGroup
                    value={selectedMethod}
                    onValueChange={(value) => onChange(value as TPaymentMethod)}
                    className="space-y-3"
                >
                    {paymentMethods.map((method) => (
                        <div key={method.id}>
                            <Label
                                htmlFor={method.id}
                                className={cn(
                                    "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-200",
                                    selectedMethod === method.id
                                        ? "border-[var(--primary)] bg-[var(--primary)]/5"
                                        : "border-[var(--border)] hover:border-[var(--primary)]/50 hover:bg-[var(--muted)]/50"
                                )}
                            >
                                <RadioGroupItem
                                    value={method.id}
                                    id={method.id}
                                    className="sr-only"
                                />

                                {/* Custom Radio Indicator */}
                                <div
                                    className={cn(
                                        "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all flex-shrink-0",
                                        selectedMethod === method.id
                                            ? "border-[var(--primary)] bg-[var(--primary)]"
                                            : "border-[var(--muted-foreground)]/50"
                                    )}
                                >
                                    {selectedMethod === method.id && (
                                        <div className="w-2 h-2 rounded-full bg-white" />
                                    )}
                                </div>

                                {/* Icon */}
                                <div
                                    className={cn(
                                        "w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                                        selectedMethod === method.id
                                            ? "bg-[var(--primary)] text-white"
                                            : "bg-[var(--muted)] text-[var(--muted-foreground)]"
                                    )}
                                >
                                    {method.icon}
                                </div>

                                {/* Details */}
                                <div className="flex-1 min-w-0">
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-[var(--foreground)]">
                                            {method.name}
                                        </span>
                                    </div>
                                    <p className="text-sm text-[var(--muted-foreground)]">
                                        {method.description}
                                    </p>
                                </div>

                                {/* Brand Icons */}
                                {method.brandIcons && (
                                    <div className="hidden sm:flex items-center gap-1">
                                        {method.brandIcons.map((brand) => (
                                            <span
                                                key={brand}
                                                className="px-1.5 py-0.5 text-[10px] font-bold bg-[var(--muted)] text-[var(--muted-foreground)] rounded"
                                            >
                                                {brand}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </Label>

                            {/* Credit Card Form */}
                            {method.id === "credit_card" &&
                                selectedMethod === "credit_card" && (
                                    <div className="mt-4 ml-9 p-4 bg-[var(--muted)]/30 rounded-xl border border-[var(--border)] space-y-4">
                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="cardNumber"
                                                className="text-sm"
                                            >
                                                Card Number
                                            </Label>
                                            <div className="relative">
                                                <Input
                                                    id="cardNumber"
                                                    placeholder="0000 0000 0000 0000"
                                                    value={formatCardNumber(
                                                        creditCardInfo.cardNumber
                                                    )}
                                                    onChange={(e) =>
                                                        handleCardChange(
                                                            "cardNumber",
                                                            e.target.value.replace(
                                                                /\s/g,
                                                                ""
                                                            )
                                                        )
                                                    }
                                                    maxLength={19}
                                                    className={cn(
                                                        "pr-10",
                                                        errors.cardNumber &&
                                                            "border-red-500"
                                                    )}
                                                />
                                                <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                                            </div>
                                            {errors.cardNumber && (
                                                <p className="text-xs text-red-500">
                                                    {errors.cardNumber}
                                                </p>
                                            )}
                                        </div>

                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="expiryDate"
                                                    className="text-sm"
                                                >
                                                    Expiry Date
                                                </Label>
                                                <Input
                                                    id="expiryDate"
                                                    placeholder="MM/YY"
                                                    value={formatExpiryDate(
                                                        creditCardInfo.expiryDate
                                                    )}
                                                    onChange={(e) =>
                                                        handleCardChange(
                                                            "expiryDate",
                                                            e.target.value.replace(
                                                                /\D/g,
                                                                ""
                                                            )
                                                        )
                                                    }
                                                    maxLength={5}
                                                    className={
                                                        errors.expiryDate
                                                            ? "border-red-500"
                                                            : ""
                                                    }
                                                />
                                                {errors.expiryDate && (
                                                    <p className="text-xs text-red-500">
                                                        {errors.expiryDate}
                                                    </p>
                                                )}
                                            </div>

                                            <div className="space-y-2">
                                                <Label
                                                    htmlFor="cvv"
                                                    className="text-sm"
                                                >
                                                    CVV/CVC
                                                </Label>
                                                <div className="relative">
                                                    <Input
                                                        id="cvv"
                                                        type="password"
                                                        placeholder="•••"
                                                        value={
                                                            creditCardInfo.cvv
                                                        }
                                                        onChange={(e) =>
                                                            handleCardChange(
                                                                "cvv",
                                                                e.target.value.replace(
                                                                    /\D/g,
                                                                    ""
                                                                )
                                                            )
                                                        }
                                                        maxLength={4}
                                                        className={cn(
                                                            "pr-10",
                                                            errors.cvv &&
                                                                "border-red-500"
                                                        )}
                                                    />
                                                    <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--muted-foreground)]" />
                                                </div>
                                                {errors.cvv && (
                                                    <p className="text-xs text-red-500">
                                                        {errors.cvv}
                                                    </p>
                                                )}
                                            </div>
                                        </div>

                                        <div className="space-y-2">
                                            <Label
                                                htmlFor="cardholderName"
                                                className="text-sm"
                                            >
                                                Cardholder Name
                                            </Label>
                                            <Input
                                                id="cardholderName"
                                                placeholder="John Doe"
                                                value={
                                                    creditCardInfo.cardholderName
                                                }
                                                onChange={(e) =>
                                                    handleCardChange(
                                                        "cardholderName",
                                                        e.target.value
                                                    )
                                                }
                                                className={
                                                    errors.cardholderName
                                                        ? "border-red-500"
                                                        : ""
                                                }
                                            />
                                            {errors.cardholderName && (
                                                <p className="text-xs text-red-500">
                                                    {errors.cardholderName}
                                                </p>
                                            )}
                                        </div>

                                        {/* Security Badge */}
                                        <div className="flex items-center gap-2 pt-2 text-sm text-[var(--muted-foreground)]">
                                            <ShieldCheck className="w-4 h-4 text-emerald-500" />
                                            <span>
                                                Your payment information is
                                                encrypted and secure
                                            </span>
                                        </div>
                                    </div>
                                )}
                        </div>
                    ))}
                </RadioGroup>
            </CardContent>
        </Card>
    );
}
