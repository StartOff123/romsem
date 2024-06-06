import axios from 'axios';
import { create } from 'zustand';

import { IProduct } from '@rootTypes/products';

type CartStoreType = {
	products: IProduct[] | null;
	isOpenCart: boolean;
	toggleCart: (state?: boolean) => void;
	addProduct: (product: IProduct) => void;
	removeProducts: (productIds: string[]) => void;
	getAllCart: (productIds: string[] | null) => void;
	resetCart: () => void;
};

export const useCartStore = create<CartStoreType>((set) => ({
	products: null,
	isOpenCart: false,
	toggleCart: (state) => {
		if (typeof state === 'undefined') {
			return set((state) => ({ isOpenCart: !state.isOpenCart }));
		}

		set({
			isOpenCart: state
		});
	},
	addProduct: (product) => {
		const localCartJson = window.localStorage.getItem('local-cart');

		if (!localCartJson) {
			window.localStorage.setItem('local-cart', JSON.stringify([product.id]));
		} else {
			const cartItems = JSON.parse(localCartJson) as string[];

			cartItems.push(product.id);

			window.localStorage.removeItem('local-cart');
			window.localStorage.setItem('local-cart', JSON.stringify(cartItems));
		}

		set((state) => {
			if (state.products) {
				return {
					products: [...state.products, product]
				};
			}

			return {
				products: [product]
			};
		});
	},
	removeProducts: (productIds) => {
		const localCartJson = window.localStorage.getItem('local-cart') as string;
		const cartItems = JSON.parse(localCartJson) as string[];

		let ids: string[] = cartItems;

		productIds?.forEach((id) => {
			ids = ids.filter((item) => item !== id);
		});

		window.localStorage.removeItem('local-cart');
		window.localStorage.setItem('local-cart', JSON.stringify(ids));

		set((state) => {
			let products: IProduct[] = state.products as IProduct[];

			productIds?.forEach((id) => {
				products = products.filter((item) => item.id !== id);
			});

			return { products };
		});
	},
	getAllCart: async (productIds) => {
		if (!productIds) return set({ products: [] });

		const { data } = (await axios.post(
			'/api/products/get-all-with-ids',
			productIds
		)) as { data: IProduct[] };

		set({ products: data });
	},
	resetCart: () => set({ products: [] })
}));
