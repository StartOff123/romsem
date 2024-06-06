'use client';

import { Button } from 'antd';
import classNames from 'classnames';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

import ActiveOrderItem from '@elements/active-order-item.element';

import { useActiveOrdersStore } from '@hooks/use-active-orders-store';

import { getActiveOrderId } from '@utils/active-order-id';

const ActiveOrder = () => {
	const ref = React.useRef<HTMLDivElement>(null);
	const { activeOrders, getActiveOrders } = useActiveOrdersStore();
	const [isOpen, setIsOpen] = React.useState(false);

	const handleToggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const handleReloadOrders = () => {
		getActiveOrders(getActiveOrderId());
	};

	React.useEffect(() => {
		getActiveOrders(getActiveOrderId());
	}, [getActiveOrders]);

	React.useEffect(() => {
		const handleClickOutside = (event: any) =>
			ref.current?.contains(event.target) || setIsOpen(false);
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	return (
		<div
			ref={ref}
			className={classNames(
				'fixed w-[350px] right-10 bg-white z-20 rounded-t-md overflow-hidden shadow-lg 2xl:right-[410px]',
				isOpen ? 'bottom-0' : 'top-[calc(100%-40px)]'
			)}
		>
			<div
				onClick={handleToggleOpen}
				className="bg-orange-400 flex items-center px-4 gap-x-2 justify-center cursor-pointer select-none hover:bg-orange-500 transition"
			>
				<h1 className="py-2 text-white">Активные заказы</h1>
				<ChevronDown
					className={classNames(
						'text-white transition',
						!isOpen && 'rotate-180'
					)}
				/>
			</div>
			{activeOrders ? (
				activeOrders.length === 0 ? (
					<div className="flex flex-col items-center py-2">
						<h1 className="text-zinc-400">Активных заказов нет</h1>
						<Image
							src="/img/empty-box.png"
							alt="empty"
							width={80}
							height={80}
						/>
					</div>
				) : (
					<div className="p-2 space-y-3">
						{activeOrders.map((order) => (
							<ActiveOrderItem key={order.id} order={order} />
						))}
						<Button
							type="primary"
							className="w-full"
							onClick={handleReloadOrders}
						>
							Обновить
						</Button>
					</div>
				)
			) : (
				<div className="space-y-3 p-2">
					<span className="w-full block h-[74px] bg-zinc-200 animate-pulse rounded-md" />
					<Button type="primary" className="w-full" loading>
						Обновить
					</Button>
				</div>
			)}
		</div>
	);
};

export default ActiveOrder;
