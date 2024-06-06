import axios from 'axios';
import { create } from 'zustand';

import { IProduct } from '@rootTypes/products';

type ProductStoreType = {
	product: IProduct | null;
	nextProductId: string | null;
	prevProductId: string | null;
	getProduct: (id: string) => void;
};

export const useProductStore = create<ProductStoreType>((set) => ({
	product: null,
	nextProductId: null,
	prevProductId: null,
	getProduct: async (id) => {
		set({ product: null, nextProductId: null, prevProductId: null });

		const { data } = (await axios.get(`/api/products/get-one/${id}`)) as {
			data: {
				product: IProduct;
				nextProductId: string;
				prevProductId: string;
			};
		};

		set({
			product: data.product,
			nextProductId: data.nextProductId,
			prevProductId: data.prevProductId
		});
	}
}));
