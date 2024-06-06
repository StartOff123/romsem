import { OrderStatus } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

import { db } from '@lib/db';

export async function POST(req: NextRequest) {
	try {
		const orderIds = (await req.json()) as string[];

		const orderIdsNum = orderIds.map((id) => Number(id));

		const orders = await db.order.findMany({
			where: {
				id: { in: orderIdsNum },
				status: { not: OrderStatus.ISSUED }
			},
			select: {
				id: true,
				createdAt: true,
				status: true
			}
		});

		return NextResponse.json(orders);
	} catch (error) {
		console.log('[POST]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
