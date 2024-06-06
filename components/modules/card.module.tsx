import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import toast from 'react-hot-toast';

import { useCartStore } from '@hooks/use-cart-store';

import { DetailsType, normalizeCountForm } from '@utils/normalize-count-form';

import { IProduct } from '@rootTypes/products';

type CardProps = {
	item: IProduct;
};

const Card: React.FC<CardProps> = ({ item }) => {
	const { products, addProduct } = useCartStore();

	const addItem = () => {
		addProduct(item);
		toast.success('Товар успешно добавлен в корзину');
	};

	return (
		<div className="group max-w-[290px] bg-white rounded-md hover:shadow-md transition">
			<div className="p-5 space-y-7">
				<div className="w-full flex justify-center">
					<Image
						src={item.image}
						alt="image"
						width={0}
						height={0}
						sizes="100vh"
						className="h-[200px] w-auto group-hover:scale-105 transition"
					/>
				</div>
				<Link
					href={`/product/${item.id}`}
					className="text-2xl font-medium text-nowrap text-ellipsis overflow-hidden hover:text-orange-400 transition block"
				>
					{item.title}
				</Link>
				<p className="text-lg text-zinc-500 text-ellipsis text-nowrap overflow-hidden">
					{Object.entries(item.details).map((detail, i) => (
						<span key={i}>
							{detail[1]}{' '}
							{normalizeCountForm(
								detail[1],
								detail[0] === 'volume'
									? item.type !== 'BEVERAGES'
										? 'weight'
										: 'volume'
									: (detail[0] as DetailsType)
							)}{' '}
						</span>
					))}
				</p>
			</div>
			<div className="flex items-center justify-between py-2 px-5 border-t border-zinc-300">
				<b className="text-2xl">{item.price} ₽</b>
				{products ? (
					<Button
						type="primary"
						onClick={addItem}
						disabled={
							products?.filter((product) => product.id === item.id)[0]
								? true
								: false
						}
					>
						{products?.filter((product) => product.id === item.id)[0]
							? 'Добавлено'
							: 'В корзину'}
					</Button>
				) : (
					<span className="w-[106px] h-[32px] rounded bg-zinc-200 animate-pulse block" />
				)}
			</div>
		</div>
	);
};

export const CardSceleron = () => {
	return (
		<span className="block w-[290px] h-[405px] bg-zinc-200 animate-pulse rounded-md" />
	);
};

export default Card;
