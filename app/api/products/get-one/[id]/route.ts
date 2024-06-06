import { NextRequest, NextResponse } from 'next/server';

import { db } from '@lib/db';

export async function GET(
	_: NextRequest,
	{ params }: { params: { id: string } }
) {
	try {
		const product = await db.product.findFirst({
			where: { id: params.id }
		});

		const nextProductId = await db.product.findMany({
			take: 1,
			where: {
				id: {
					gt: params.id
				}
			},
			orderBy: {
				id: 'asc'
			},
			select: {
				id: true
			}
		});
		
		const prevProductId = await db.product.findMany({
			take: 1,
			where: {
				id: {
					lt: params.id
				}
			},
			orderBy: {
				id: 'desc'
			},
			select: {
				id: true
			}
		});

		if (!product) return new NextResponse('Not Found', { status: 404 });

		product.details = JSON.parse(product.details as string);

		return NextResponse.json({
			product,
			nextProductId: nextProductId.length === 0 ? null : nextProductId[0].id,
			prevProductId: prevProductId.length === 0 ? null : prevProductId[0].id
		});
	} catch (error) {
		console.log('[GET]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
