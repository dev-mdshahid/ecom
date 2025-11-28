// Cart Feature Types

export type TCartItem = {
    productId: string;
    productName: string;
    bundleId: string;
    bundleLabel: string;
    price: number;
    quantity: number;
    image: string;
};

export type TCartStore = {
    items: TCartItem[];
    isOpen: boolean;

    // Actions
    addItem: (item: Omit<TCartItem, 'quantity'>, quantity?: number) => void;
    removeItem: (productId: string, bundleId: string) => void;
    updateQuantity: (productId: string, bundleId: string, quantity: number) => void;
    clearCart: () => void;
    toggleDrawer: () => void;
    openDrawer: () => void;
    closeDrawer: () => void;

    // Computed values
    totalItems: () => number;
    subtotal: () => number;
};
