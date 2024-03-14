import { DeliveryType, PaymentType, ProductType } from '@prisma/client';
import { z } from 'zod';

type ReduxStatusLoading = 'pending' | 'succeeded' | 'failed';

export type Product = {
	id: string | null | undefined;
	title: string;
	description: string;
	type: ProductType;
	price: string;
	details: {
		[key: string]: string;
	};
	compound: string[];
	image: string;
	popularity: number;
};

export type ReduxProductState = {
	goods?: Product[] | null;
	slickGoods?: Product[] | null;
	cart?: Product[] | null;
	loading: ReduxStatusLoading;
	isFilters: boolean;
};

export type ProductFilters = {
	sort: string | null;
	productType: string | null;
	searchValue: string;
};

export const GoodsType: { [key: string]: string } = {
	SETS: 'Сеты',
	PIZZA: 'Пицца',
	WOK: 'WOK',
	ROLS: 'Роллы',
	SUSHI: 'Суши',
	BEVERAGES: 'Напитки'
};

export const AddOrderSchema = z.object({
	name: z.string().min(1, {
		message: 'Обязательное поле'
	}),
	delivery: z.nativeEnum(DeliveryType, {
		required_error: 'Обязательное поле',
		invalid_type_error: 'Обязательное поле'
	}),
	payment: z.nativeEnum(PaymentType, {
		required_error: 'Обязательное поле',
		invalid_type_error: 'Обязательное поле'
	}),
	phone: z
		.string({
			required_error: 'Обязательное поле'
		})
		.min(18, {
			message: 'Неверный формат телефона'
		}),
	comments: z.string(),
	street: z.string().min(1, {
		message: 'Обязательное поле'
	}),
	house: z.string().min(1, {
		message: 'Обязательное поле'
	}),
	is_private_house: z.boolean(),
	apartment: z.string().optional(),
	entrance: z.string().optional()
});

export type AddOrderType = z.infer<typeof AddOrderSchema>;
