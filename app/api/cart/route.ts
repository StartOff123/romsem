import { NextResponse } from 'next/server';

import { db } from '@/lib/db';

export async function POST(req: Request) {
	try {
		const listArr: string[] = (await req.json()) as string[];
		const items = await db.product.findMany({
			where: { id: { in: listArr } }
		});

		return NextResponse.json(items);
	} catch (error) {
		console.log('[FILTERS_GET]', error);
		return new NextResponse('Внутренняя ошибка сервера', { status: 500 });
	}
}
