'use client';

import { Button, Checkbox, GetProp } from 'antd';
import classNames from 'classnames';
import { useRouter } from 'next/navigation';
import React from 'react';
import toast from 'react-hot-toast';

import CartEmpty from '@elements/cart-empty.element';
import CartSceleton from '@elements/cart-sceleton.element';

import { useCartStore } from '@hooks/use-cart-store';

import { calcTotalPrice } from '@utils/calc-total-price';
import { normalizeCountForm } from '@utils/normalize-count-form';

import CartItem from './cart-item.module';

const Cart = () => {
	const router = useRouter();
	const { isOpenCart, toggleCart, getAllCart, products, removeProducts } =
		useCartStore();

	const [movedItems, setMovedItems] = React.useState<string[]>([]);
	const [totalPrice, setTotalPrice] = React.useState(0);

	const handleMakeItem: GetProp<typeof Checkbox.Group, 'onChange'> = (
		checkedValues
	) => {
		setMovedItems(checkedValues as string[]);
	};

	const handleRemoveItems = () => {
		removeProducts(movedItems);
		setMovedItems([]);
		toast.success('Товары успешно убраны из корзины');
	};

	const handleCheckOut = () => {
		toggleCart(false);
		router.push('/create-order');
	};

	React.useEffect(() => {
		document.body.style.overflowY = isOpenCart ? 'hidden' : 'auto';
	}, [isOpenCart]);

	React.useEffect(() => {
		const localCartJson = window.localStorage.getItem('local-cart');

		if (localCartJson) {
			getAllCart(JSON.parse(localCartJson));
		} else {
			getAllCart(null);
		}
	}, [getAllCart]);

	React.useEffect(() => {
		setTotalPrice(calcTotalPrice(products));
	}, [products]);

	return (
		<>
			<div
				className={classNames(
					'w-[370px] bg-white fixed z-40 top-0 h-dvh right-0 translate-x-full transition 2xl:translate-x-0 2xl:transition-none',
					isOpenCart && '!translate-x-0'
				)}
			>
				{products ? (
					products.length !== 0 ? (
						<div className="p-10 flex flex-col gap-y-3 h-full">
							<h1 className="py-2 bg-zinc-100 text-2xl font-medium text-center rounded-md">
								Корзина
							</h1>
							<span className="block w-full h-[1px] bg-zinc-200" />
							<div className="flex justify-between items-center">
								<h1 className="text-lg">
									{products.length}{' '}
									{normalizeCountForm(products.length, 'productCount')}
								</h1>
								<Button
									type="primary"
									onClick={handleRemoveItems}
									danger
									disabled={movedItems.length === 0}
									className="disabled:!bg-transparent disabled:!text-zinc-200 disabled:!border-zinc-200"
								>
									Удалить
								</Button>
							</div>
							<div className="overflow-hidden h-full">
								<Checkbox.Group
									onChange={handleMakeItem}
									className="!block space-y-3 w-full h-full flex-1 overflow-auto pr-1"
								>
									{products.map((item) => (
										<CartItem key={item.id} item={item} />
									))}
								</Checkbox.Group>
							</div>
							<div className="space-y-3">
								<div className="flex gap-x-2 text-lg">
									<p>Сумма:</p>
									<span className="block flex-1 border-dashed border-b mb-1 border-zinc-200" />
									<b>{totalPrice} ₽</b>
								</div>
								<Button
									type="primary"
									onClick={handleCheckOut}
									size="large"
									className="w-full"
								>
									Оформить заказ
								</Button>
							</div>
						</div>
					) : (
						<CartEmpty />
					)
				) : (
					<CartSceleton />
				)}
			</div>
			<span
				onClick={() => toggleCart()}
				className={classNames(
					'bg-black/40 fixed w-full h-full z-30 transition opacity-0 pointer-events-none',
					isOpenCart && 'opacity-100 pointer-events-auto'
				)}
			/>
		</>
	);
};

export default Cart;
