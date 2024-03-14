import { OrderStatus, Product } from '@prisma/client';
import { NextResponse } from 'next/server';

import { db } from '@/lib/db';

import { AddOrderType } from '@/types/index';

export async function POST(req: Request) {
	try {
		const { house, apartment, entrance, cart, ...data } =
			(await req.json()) as AddOrderType & { cart: Product[] };

		const order = await db.order.create({
			data: {
				...data,
				house: Number(house),
				apartment: Number(apartment),
				entrance: Number(entrance),
				status: OrderStatus.PROCESSING,
				products: {
					connect: cart.map((item) => ({ id: item.id })) || []
				}
			}
		});

		return NextResponse.json({
			orderId: order.id
		});
	} catch (error) {
		console.log('[FILTERS_GET]', error);
		return new NextResponse('Внутренняя ошибка сервера', { status: 500 });
	}
}
