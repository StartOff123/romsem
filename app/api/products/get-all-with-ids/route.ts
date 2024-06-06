import { NextRequest, NextResponse } from 'next/server';

import { db } from '@lib/db';

export async function POST(req: NextRequest) {
	try {
		const ids = (await req.json()) as string[];

		const products = await db.product.findMany({
			where: {
				id: { in: ids }
			}
		});

		if (!products) return new NextResponse('Not Found', { status: 404 });

		products.map(
			(product) => (product.details = JSON.parse(product.details as string))
		);

		return NextResponse.json(products);
	} catch (error) {
		console.log('[POST]', error);
		return new NextResponse('Internal Error', { status: 500 });
	}
}
