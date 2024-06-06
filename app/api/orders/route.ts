import { NextRequest, NextResponse } from 'next/server';

import { CreateOrderDto } from '@rootTypes/order';

import { db } from '@lib/db';

export async function POST(req: NextRequest) {
	try {
		const data = (await req.json()) as CreateOrderDto;

		const order = await db.order.create({
			data: {
				name: data.name,
				phone: data.phone,
				email: data.email,
				delivery: data.delivery,
				payment: data.payment,
				house: Number(data.house),
				street: data.street,
				apartment: Number(data.apartment),
				comments: data.comments,
				entrance: Number(data.entrance),
				status: 'PROCESSING',
				products: {
					connect: data.productsIds.map((product) => ({ id: product })) || []
				}
			}
		});

		return NextResponse.json(order);
	} catch (error) {
		console.log('[POST]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
