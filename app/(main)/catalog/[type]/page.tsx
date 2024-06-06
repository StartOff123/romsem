'use client';

import { Select } from 'antd';
import { useParams } from 'next/navigation';
import React from 'react';

import About from '@modules/about.module';

import { Container } from '@elements/container.element';
import { ProductsSvg } from '@elements/products-svg.element';

import CardsList from '@pages/catalog-page/cards-list.catalog';

import { useProductsStore } from '@hooks/use-products-stoge';

import { PRODUCT_NAMES } from '@settings/common';

import { ProductsEnum } from '@rootTypes/common';

export default function CatalogPage() {
	const { type } = useParams() as { type: string };
	const { products } = useProductsStore();

	document.title = `Каталог - ${PRODUCT_NAMES[type.toUpperCase() as ProductsEnum]}`;

	const [sort, setSort] = React.useState<'asc' | 'desc' | ''>('');

	return (
		<div>
			<Container className="py-8 space-y-12">
				<div className="flex justify-between items-center pb-2">
					<div className="flex items-center gap-x-5 h-[66px]">
						<ProductsSvg variant={type.toUpperCase() as ProductsEnum} />
						<h1 className="text-4xl">
							{PRODUCT_NAMES[type.toUpperCase() as ProductsEnum]}
						</h1>
					</div>
					{products ? (
						products.length === 0 ? null : (
							<div className="bg-white rounded-2xl py-2 z-10">
								<p className="text-zinc-400 text-sm pl-2.5 font-light">
									Сортировка
								</p>
								<Select
									placeholder="Сортировка"
									defaultValue=""
									size="large"
									className="min-w-[200px] !py-0 !h-[30px]"
									value={sort}
									onChange={(value) => setSort(value as 'asc' | 'desc' | '')}
								>
									<Select.Option value="">По умолчанию</Select.Option>
									<Select.Option value="asc">Сначала дешевле</Select.Option>
									<Select.Option value="desc">Сначала дороже</Select.Option>
								</Select>
							</div>
						)
					) : (
						<span className="w-[200px] h-[66px] rounded-2xl bg-zinc-200 animate-pulse" />
					)}
				</div>
				<CardsList type={type.toUpperCase() as ProductsEnum} sort={sort} />
				<About />
			</Container>
		</div>
	);
}
