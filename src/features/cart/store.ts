import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { TCartStore, TCartItem } from './types';

export const useCart = create<TCartStore>()(
    persist(
        (set, get) => ({
            items: [],
            isOpen: false,

            addItem: (item, quantity = 1) => {
                set((state) => {
                    const existingItemIndex = state.items.findIndex(
                        (i) => i.productId === item.productId && i.bundleId === item.bundleId
                    );

                    if (existingItemIndex > -1) {
                        // Item already exists, update quantity
                        const updatedItems = [...state.items];
                        updatedItems[existingItemIndex].quantity += quantity;
                        return { items: updatedItems };
                    } else {
                        // New item, add to cart
                        return {
                            items: [...state.items, { ...item, quantity }],
                        };
                    }
                });
            },

            removeItem: (productId, bundleId) => {
                set((state) => ({
                    items: state.items.filter(
                        (item) => !(item.productId === productId && item.bundleId === bundleId)
                    ),
                }));
            },

            updateQuantity: (productId, bundleId, quantity) => {
                if (quantity <= 0) {
                    get().removeItem(productId, bundleId);
                    return;
                }

                set((state) => ({
                    items: state.items.map((item) =>
                        item.productId === productId && item.bundleId === bundleId
                            ? { ...item, quantity }
                            : item
                    ),
                }));
            },

            clearCart: () => {
                set({ items: [] });
            },

            toggleDrawer: () => {
                set((state) => ({ isOpen: !state.isOpen }));
            },

            openDrawer: () => {
                set({ isOpen: true });
            },

            closeDrawer: () => {
                set({ isOpen: false });
            },

            totalItems: () => {
                return get().items.reduce((total, item) => total + item.quantity, 0);
            },

            subtotal: () => {
                return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
            },
        }),
        {
            name: 'cart-storage',
        }
    )
);
