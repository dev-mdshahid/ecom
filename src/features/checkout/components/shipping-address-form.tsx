"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, User, Mail, Phone, Home, Building2 } from "lucide-react";
import { TShippingAddress, COUNTRIES, US_STATES } from "../types";

type TShippingAddressFormProps = {
    address: TShippingAddress;
    onChange: (address: TShippingAddress) => void;
    errors?: Partial<Record<keyof TShippingAddress, string>>;
};

export function ShippingAddressForm({
    address,
    onChange,
    errors = {},
}: TShippingAddressFormProps) {
    const handleChange = (field: keyof TShippingAddress, value: string) => {
        onChange({ ...address, [field]: value });
    };

    return (
        <Card className="border-[var(--border)] shadow-sm">
            <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-lg">
                    <div className="w-8 h-8 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center">
                        <MapPin className="w-4 h-4 text-[var(--primary)]" />
                    </div>
                    Shipping Address
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
                {/* Name Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label
                            htmlFor="firstName"
                            className="text-sm font-medium"
                        >
                            <User className="w-3.5 h-3.5 inline mr-1.5 text-[var(--muted-foreground)]" />
                            First Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="firstName"
                            placeholder="John"
                            value={address.firstName}
                            onChange={(e) =>
                                handleChange("firstName", e.target.value)
                            }
                            className={
                                errors.firstName
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }
                        />
                        {errors.firstName && (
                            <p className="text-xs text-red-500">
                                {errors.firstName}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label
                            htmlFor="lastName"
                            className="text-sm font-medium"
                        >
                            Last Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="lastName"
                            placeholder="Doe"
                            value={address.lastName}
                            onChange={(e) =>
                                handleChange("lastName", e.target.value)
                            }
                            className={
                                errors.lastName
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }
                        />
                        {errors.lastName && (
                            <p className="text-xs text-red-500">
                                {errors.lastName}
                            </p>
                        )}
                    </div>
                </div>

                {/* Contact Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium">
                            <Mail className="w-3.5 h-3.5 inline mr-1.5 text-[var(--muted-foreground)]" />
                            Email <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="john@example.com"
                            value={address.email}
                            onChange={(e) =>
                                handleChange("email", e.target.value)
                            }
                            className={
                                errors.email
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }
                        />
                        {errors.email && (
                            <p className="text-xs text-red-500">
                                {errors.email}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium">
                            <Phone className="w-3.5 h-3.5 inline mr-1.5 text-[var(--muted-foreground)]" />
                            Phone Number <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={address.phone}
                            onChange={(e) =>
                                handleChange("phone", e.target.value)
                            }
                            className={
                                errors.phone
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }
                        />
                        {errors.phone && (
                            <p className="text-xs text-red-500">
                                {errors.phone}
                            </p>
                        )}
                    </div>
                </div>

                {/* Address Field */}
                <div className="space-y-2">
                    <Label htmlFor="address" className="text-sm font-medium">
                        <Home className="w-3.5 h-3.5 inline mr-1.5 text-[var(--muted-foreground)]" />
                        Street Address <span className="text-red-500">*</span>
                    </Label>
                    <Input
                        id="address"
                        placeholder="123 Main Street, Apt 4B"
                        value={address.address}
                        onChange={(e) =>
                            handleChange("address", e.target.value)
                        }
                        className={
                            errors.address
                                ? "border-red-500 focus-visible:ring-red-500/50"
                                : ""
                        }
                    />
                    {errors.address && (
                        <p className="text-xs text-red-500">{errors.address}</p>
                    )}
                </div>

                {/* City, State, Zip */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="city" className="text-sm font-medium">
                            <Building2 className="w-3.5 h-3.5 inline mr-1.5 text-[var(--muted-foreground)]" />
                            City <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="city"
                            placeholder="New York"
                            value={address.city}
                            onChange={(e) =>
                                handleChange("city", e.target.value)
                            }
                            className={
                                errors.city
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }
                        />
                        {errors.city && (
                            <p className="text-xs text-red-500">{errors.city}</p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="state" className="text-sm font-medium">
                            State <span className="text-red-500">*</span>
                        </Label>
                        <Select
                            value={address.state}
                            onValueChange={(value) =>
                                handleChange("state", value)
                            }
                        >
                            <SelectTrigger
                                className={`w-full ${
                                    errors.state
                                        ? "border-red-500 focus-visible:ring-red-500/50"
                                        : ""
                                }`}
                            >
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                            <SelectContent>
                                {US_STATES.map((state) => (
                                    <SelectItem key={state} value={state}>
                                        {state}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        {errors.state && (
                            <p className="text-xs text-red-500">
                                {errors.state}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2 col-span-2 sm:col-span-1">
                        <Label htmlFor="zipCode" className="text-sm font-medium">
                            ZIP Code <span className="text-red-500">*</span>
                        </Label>
                        <Input
                            id="zipCode"
                            placeholder="10001"
                            value={address.zipCode}
                            onChange={(e) =>
                                handleChange("zipCode", e.target.value)
                            }
                            className={
                                errors.zipCode
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }
                        />
                        {errors.zipCode && (
                            <p className="text-xs text-red-500">
                                {errors.zipCode}
                            </p>
                        )}
                    </div>
                </div>

                {/* Country */}
                <div className="space-y-2">
                    <Label htmlFor="country" className="text-sm font-medium">
                        Country <span className="text-red-500">*</span>
                    </Label>
                    <Select
                        value={address.country}
                        onValueChange={(value) => handleChange("country", value)}
                    >
                        <SelectTrigger
                            className={`w-full ${
                                errors.country
                                    ? "border-red-500 focus-visible:ring-red-500/50"
                                    : ""
                            }`}
                        >
                            <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent>
                            {COUNTRIES.map((country) => (
                                <SelectItem
                                    key={country.code}
                                    value={country.code}
                                >
                                    {country.name}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.country && (
                        <p className="text-xs text-red-500">{errors.country}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
