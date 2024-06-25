import axios from 'axios';
import { create } from 'zustand';

import { IProduct } from '@rootTypes/products';

type SliderStoreType = {
	sliderItems: IProduct[] | null;
	getSloderItems: () => void;
};

export const useSliderStore = create<SliderStoreType>((set) => ({
	sliderItems: null,
	getSloderItems: async () => {
		const { data } = (await axios.get(
			'/api/products/get-slider?take=5&order-by=asc'
		)) as {
			data: IProduct[];
		};

		set({ sliderItems: data });
	}
}));
