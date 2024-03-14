import { ProductType } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

import { db } from '@/lib/db';

export async function GET(req: NextRequest) {
	try {
		const sort = req.nextUrl.searchParams.get('sort');
		const type = req.nextUrl.searchParams.get('type');

		const goods = await db.product.findMany({
			where: { type: type !== 'all' ? (type as ProductType) : undefined },
			orderBy: {
				price:
					sort !== 'null' && (sort === 'asc' || sort === 'desc')
						? sort === 'asc'
							? 'asc'
							: 'desc'
						: undefined,
				title: sort !== 'null' && sort === 'alphabetically' ? 'asc' : undefined,
				popularity: sort !== 'null' && sort === 'popular' ? 'asc' : undefined
			}
		});

		return NextResponse.json(goods);
	} catch (error) {
		console.log('[FILTERS_GET]', error);
		return new NextResponse('Внутренняя ошибка сервера', { status: 500 });
	}
}
