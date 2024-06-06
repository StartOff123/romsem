'use client';

import { Badge } from 'antd';
import { Clock4, Search, ShoppingCart } from 'lucide-react';
import React from 'react';

import { useCartStore } from '@hooks/use-cart-store';

const Header = () => {
	const { toggleCart, products } = useCartStore();

	return (
		<header className="flex items-center border-b-[1px] border-zinc-300 bg-white sticky top-0 z-20">
			<div className="text-center px-4 py-2 border-r-[1px] border-zinc-300">
				<h1 className="text-lg font-medium">Наш телефон</h1>
				<p className="text-orange-400 text-lg font-medium leading-5">
					+996 705 188 955 <br />
					+996 555 188 955
				</p>
				<span className="flex items-center text-zinc-400 text-sm gap-x-1">
					<Clock4 size={15} className="text-orange-400" />
					работаем с 10:00 до 00:00
				</span>
			</div>
			<div className="flex-1 px-4 flex items-center justify-between">
				<div className="">
					<p className="text-zinc-400 text-sm">Город:</p>
					<h1 className="text-lg">Златоуст</h1>
				</div>
				<div className=" flex items-center gap-x-16">
					<div className="flex gap-x-3">
						<a href="" className="hover:text-orange-500 transition">
							Отзывы
						</a>
						<a href="" className="hover:text-orange-500 transition">
							Доставка и оплата
						</a>
					</div>
					<div className="flex items-center gap-x-5">
						<button className="text-zinc-500 hover:text-orange-400 transition">
							<Search size={30} strokeWidth={0.5} />
						</button>
						<Badge count={products?.length} color="rgb(251 146 60)" className='2xl:hidden'>
							<button
								onClick={() => toggleCart()}
								className="text-zinc-500 hover:text-orange-500 transition"
							>
								<ShoppingCart size={30} strokeWidth={0.5} />
							</button>
						</Badge>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Header;
