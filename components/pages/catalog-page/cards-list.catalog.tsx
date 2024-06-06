import classNames from 'classnames';
import Image from 'next/image';
import React from 'react';

import Card, { CardSceleron } from '@modules/card.module';

import { useProductsStore } from '@hooks/use-products-stoge';

import { ProductsEnum } from '@rootTypes/common';

type CardsListProps = {
	type: ProductsEnum;
	sort: 'asc' | 'desc' | '';
};

const CardsList: React.FC<CardsListProps> = ({ type, sort }) => {
	const { products, getProductsWithFilters } = useProductsStore();

	React.useEffect(() => {
		getProductsWithFilters(type, sort);
	}, [getProductsWithFilters, type, sort]);

	return (
		<div
			className={classNames(
				'grid grid-cols-3 justify-between gap-10',
				products?.length === 0 && '!block'
			)}
		>
			{products ? (
				products.length === 0 ? (
					<div className="flex flex-col items-center gap-y-5">
						<h1 className='text-2xl font-semibold'>Товаров данной категории еще не добавленно</h1>
						<Image
							src="/img/empty-box.png"
							alt="empty"
							width={300}
							height={300}
						/>
					</div>
				) : (
					products.map((item) => <Card key={item.id} item={item} />)
				)
			) : (
				Array(9)
					.fill(1)
					.map((_, i) => <CardSceleron key={i} />)
			)}
		</div>
	);
};

export default CardsList;
