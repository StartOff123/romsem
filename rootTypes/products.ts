import { ProductType } from '@prisma/client';

export interface IProduct {
	id: string;
	title: string;
	description: string;
	type: ProductType;
	price: number;
	details: Record<string, string>;
	compound: string[];
	image: string;
	popularity: number;
}
