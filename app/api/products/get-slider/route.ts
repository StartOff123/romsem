import { Prisma } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

import { db } from '@lib/db';

export async function GET(req: NextRequest) {
	try {
		const take = req.nextUrl.searchParams.get('take') as string;
		const orderBy = req.nextUrl.searchParams.get('order-by') as 'asc' | 'desc';

		const products = await db.product.findMany({
			orderBy: {
				popularity: orderBy
			},
			take: Number(take)
		});

		if (!products) return new NextResponse('Not Found', { status: 404 });

		products.map(
			(product) => (product.details = JSON.parse(product.details as string))
		);

		return NextResponse.json(products);
	} catch (error) {
		console.log('[GET]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
