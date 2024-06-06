import { IProduct } from '@rootTypes/products';

export const calcTotalPrice = (products: IProduct[] | null): number => {
	if (!products) return 0;

	return products.reduce((sum, currentItem) => {
		return sum + currentItem.price;
	}, 0);
};
