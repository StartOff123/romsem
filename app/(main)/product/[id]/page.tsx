'use client';

import { Button, Typography } from 'antd';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import SlidesProduct from '@modules/slides-product.module';

import { Container } from '@elements/container.element';
import ProductSceleton from '@elements/product-sceleton.element';

import PrevNextNavigation from '@pages/product-page/prev-next-navigation.product';

import { useCartStore } from '@hooks/use-cart-store';
import { useProductStore } from '@hooks/use-product-store';

import { normalizeCompoundString } from '@utils/normalize-compound-string';
import { DetailsType, normalizeCountForm } from '@utils/normalize-count-form';

export default function ProductPage() {
	const { id } = useParams() as { id: string };
	const { getProduct, product } = useProductStore();
	const { products, addProduct } = useCartStore();

	const addItem = () => {
		product && addProduct(product);
		toast.success('Товар успешно добавлен в корзину');
	};

	React.useEffect(() => {
		getProduct(id);
	}, [getProduct, id]);

	return (
		<div>
			<PrevNextNavigation />
			<div className="bg-white">
				{product ? (
					<Container className="grid grid-cols-2 h-[435px]">
						<div className="py-5">
							<Image
								src={product.image}
								alt={product.title}
								width={0}
								height={0}
								sizes="100vh"
								className="w-auto h-[395px]"
							/>
						</div>
						<div className="flex flex-col justify-between py-10">
							<div className="space-y-2">
								<h1 className="font-medium text-5xl">{product.title}</h1>
								<p className="text-lg text-orange-400 font-light">
									{Object.entries(product.details).map((detail) => (
										<>
											{detail[1]}{' '}
											{normalizeCountForm(
												detail[1],
												detail[0] === 'volume'
													? product.type !== 'BEVERAGES'
														? 'weight'
														: 'volume'
													: (detail[0] as DetailsType)
											)}{' '}
										</>
									))}
								</p>
							</div>
							<b className="text-2xl">{product.price} ₽</b>
							<div className="space-y-6">
								<div className="text-lg">
									<h1 className="font-medium">Состав</h1>
									<Typography.Paragraph
										ellipsis={{
											rows: 2,
											expandable: true,
											symbol: () => {
												return 'смотреть все';
											}
										}}
										className="!font-light !text-zinc-600 !text-lg"
									>
										{normalizeCompoundString(product.compound)}
									</Typography.Paragraph>
								</div>
								<Button
									type="primary"
									onClick={addItem}
									size="large"
									className="px-16"
									disabled={
										products?.filter(
											(productCart) => productCart.id === product.id
										)[0]
											? true
											: false
									}
								>
									{products?.filter(
										(productCart) => productCart.id === product.id
									)[0]
										? 'Добавлено'
										: 'В корзину'}
								</Button>
							</div>
						</div>
					</Container>
				) : (
					<ProductSceleton />
				)}
			</div>
			<Container className="py-12 space-y-3">
				<h1 className="text-2xl font-medium text-center">
					Рекомендуем к этому товару
				</h1>
				<SlidesProduct type="popular" />
			</Container>
		</div>
	);
}
