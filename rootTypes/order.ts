import { z } from 'zod';

import { DeliveryEnum, OrderStatusEnum, PaymentEnum } from './common';

export interface IActiveOrder {
	id: string | number;
	createdAt: string;
	status: OrderStatusEnum;
}

export const OrderSchema = z.object({
	phone: z
		.string({
			message: 'Обязательное поле'
		})
		.min(18, {
			message: 'Неверный формат телефона'
		}),
	name: z.string().min(1, {
		message: 'Обязательное поле'
	}),
	email: z.string().email({
		message: 'Неправельный формать email'
	}).optional(),
	payment: z.nativeEnum(PaymentEnum).default(PaymentEnum.CASH),
	comments: z.string().optional(),
	delivery: z.nativeEnum(DeliveryEnum).default(DeliveryEnum.BYCOURIER),
	street: z.string({
		message: 'Обязательное поле'
	}),
	house: z.string({
		message: 'Обязательное поле'
	}),
	apartment: z.string().optional(),
	entrance: z.string().optional()
});

export type OrderType = z.infer<typeof OrderSchema>;

export type CreateOrderDto = OrderType & {
	productsIds: string[];
};
