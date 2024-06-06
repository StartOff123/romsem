import { Checkbox } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { useCartStore } from '@hooks/use-cart-store';

import { IProduct } from '@rootTypes/products';

type CartItemProps = {
	item: IProduct;
};

const CartItem: React.FC<CartItemProps> = ({ item }) => {
	const { toggleCart } = useCartStore();

	const handleClickItem = () => {
		toggleCart();
	};

	return (
		<div className="p-2 border border-zinc-200 rounded-md flex items-center gap-x-2">
			<div className="flex items-center w-[70px]">
				<Image
					src={item.image}
					alt="image"
					width={0}
					height={0}
					sizes="100vh"
					className="w-[70px] h-auto max-h-[70px]"
				/>
			</div>
			<div className="flex-1 w-[154px]">
				<Link
					href={`/product/${item.id}`}
					onClick={handleClickItem}
					className="block text-lg truncate hover:text-orange-400"
				>
					{item.title}
				</Link>
				<b className="text-lg">{item.price} ₽</b>
			</div>
			<div className="pr-2">
				<Checkbox value={item.id} className="scale-125" />
			</div>
		</div>
	);
};

export default CartItem;
