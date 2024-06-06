import axios from 'axios';
import { create } from 'zustand';

import { IProduct } from '@rootTypes/products';

export type HomeProductStoreType = {
	products: IProduct[] | null;
	getProductsWithParam: (param: 'new' | 'popular') => void;
};

export const useHomeProductStore = create<HomeProductStoreType>((set) => ({
	products: null,
	getProductsWithParam: async (param) => {
		set({ products: null });

		const { data } = (await axios.get(`/api/products/get-home/${param}`)) as {
			data: IProduct[];
		};

		set({ products: data });
	}
}));
