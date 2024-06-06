import { ProductType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

import { db } from '@lib/db';

export async function GET(req: NextRequest) {
	try {
		const type = req.nextUrl.searchParams.get('type') as ProductType;
		const sort = req.nextUrl.searchParams.get('sort') as 'asc' | 'desc' | '';

		const products = await db.product.findMany({
			where: {
				type: type !== null ? type : undefined
			},
			orderBy: {
				price: sort !== '' ? sort : undefined
			}
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
