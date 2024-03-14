'use client';

import classNames from 'classnames';
import { useRouter, useSearchParams } from 'next/navigation';
import React, { Suspense } from 'react';
import { FaArrowDownLong } from 'react-icons/fa6';

import { Empty } from '@/elements/index';

import CardSkeleton from '@/modules/card/card-skeleton';
import { Card } from '@/modules/index';

import { Button, Select } from '@/ui/index';

import { useAppDispatch, useAppSelector } from '@/hooks/redux-hooks';

import { fetchGoods } from '@/redux/slices/goods-slice';

import { sortFilter } from '@/settings/catalog-filters';

import { Product } from '@/types/index';

const CatalogPage = () => {
	const params = useSearchParams();
	const router = useRouter();
	const dispatch = useAppDispatch();

	const { goods, loading } = useAppSelector((state) => state.goodsSlice);
	const { cart, loading: cartLoading } = useAppSelector(
		(state) => state.cartSlice
	);

	const [sort, setSort] = React.useState<string | null>('popular');

	const hanfleSort = (sort: string | null) => {
		setSort(sort);

		if (sort) {
			router.push(`/catalog?type=${params.get('type')}&sort=${sort}`);

			dispatch(
				fetchGoods({
					type: params.get('type'),
					sort
				})
			);
		} else {
			dispatch(
				fetchGoods({
					type: params.get('type'),
					sort: 'all'
				})
			);
		}
	};

	React.useEffect(() => {
		if (!params.get('type') || !params.get('sort')) {
			router.push('/catalog?type=all&sort=popular');

			dispatch(
				fetchGoods({
					type: 'all',
					sort: 'popular'
				})
			);
		} else {
			dispatch(
				fetchGoods({
					type: params.get('type'),
					sort: params.get('sort')
				})
			);
		}
	}, [params]);

	return (
		<div className="pb-16 flex flex-col gap-10">
			<div className="flex justify-end">
				<div className="flex items-center gap-4">
					<p className="font-semibold">Сортировка товаров</p>
					<Select
						className="w-[210px]"
						options={sortFilter}
						onChange={hanfleSort}
						placeholder="Сортировка"
						value={sort}
					/>
				</div>
			</div>
			<div
				className={classNames(
					goods &&
						loading === 'succeeded' &&
						'grid grid-cols-4 gap-x-7 gap-y-16',
					loading === 'pending' && 'grid grid-cols-4 gap-x-7 gap-y-16'
				)}
			>
				{loading === 'pending' &&
					Array(12)
						.fill(1)
						.map((_, i) => <CardSkeleton key={i} />)}
				{goods && loading === 'succeeded' ? (
					goods.map((item: Product) => (
						<Card
							key={item.id}
							item={item}
							actionsLoading={cart || cartLoading ? false : true}
							isAdded={
								cart?.filter((cartItem: Product) => cartItem.id === item.id)[0]
									? true
									: false
							}
						/>
					))
				) : (
					<Empty
						title="Ничего не найдено"
						subtitle="Товаров такой категории нет"
						buttonText="Перейти в каталог"
						redirectUrl="/catalog"
					/>
				)}
			</div>
			{goods?.length === 40 && loading === 'succeeded' && (
				<div className="flex justify-center">
					<Button variant="black">
						<span className="flex justify-center items-center gap-2">
							Загрузить еще
							<FaArrowDownLong />
						</span>
					</Button>
				</div>
			)}
		</div>
	);
};

export default CatalogPage;
