import { NextRequest, NextResponse } from 'next/server';

import { db } from '@lib/db';

export async function GET(_: NextRequest) {
	try {
		const products = await db.product.findMany({
			orderBy: {
				popularity: 'asc'
			},
			take: 5
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
