import axios from 'axios';
import { create } from 'zustand';

import { ProductsEnum } from '@rootTypes/common';
import { IProduct } from '@rootTypes/products';

type ProductsStoreType = {
	products: IProduct[] | null;
	getProductsWithFilters: (
		type: ProductsEnum | undefined,
		sort: 'asc' | 'desc' | ''
	) => void;
};

export const useProductsStore = create<ProductsStoreType>((set) => ({
	products: null,
	getProductsWithFilters: async (type, sort) => {
		set({ products: null });

		const { data } = (await axios.get(
			`/api/products/get-all?type=${type?.toUpperCase()}&sort=${sort}`
		)) as {
			data: IProduct[];
		};

		set({ products: data });
	}
}));
