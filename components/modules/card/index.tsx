'use client';

import Image, { ImageLoader } from 'next/image';
import React from 'react';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { LuCircleDashed, LuTrash2 } from 'react-icons/lu';
import { PiDotsSixBold } from 'react-icons/pi';
import { RiScales2Line } from 'react-icons/ri';
import { TbShoppingCartCopy, TbShoppingCartPlus } from 'react-icons/tb';

import { useAppDispatch } from '@/hooks/redux-hooks';

import { addCart, removeCart } from '@/redux/slices/cart-slice';

import { Product } from '@/types/index';

import { addCartLocal, removeCartLocal } from '@/utils/cart-local-actions';
import { numberWithSpaces } from '@/utils/number-with-spaces';

type CardProps = {
	item: Product;
	isAdded: boolean;
	actionsLoading: boolean;
};

const Card = ({ item, isAdded, actionsLoading }: CardProps) => {
	const dispatch = useAppDispatch();
	const ref = React.useRef<HTMLDivElement>(null);
	const [widthImage, setWidthImage] = React.useState<number>(0);

	// @ts-ignore
	const details = JSON.parse(item.details) as {
		volume?: string;
		size?: string;
		pieces?: string;
	};

	const handleAddClick = () => {
		addCartLocal(item.id!);
		dispatch(addCart(item));
		toast.success('Товар был добавлен в корзину');
	};

	const handleRemoveClick = () => {
		removeCartLocal(item.id!);
		dispatch(removeCart(item.id!));
		toast.error('Товар был удален из корзины');
	};

	const imageLoader: ImageLoader = ({ src, width }) => {
		return `${process.env.API_URL}/uploads/goods/${src}?w=${width}`;
	};

	React.useEffect(() => {
		if (ref.current) setWidthImage(ref.current.scrollWidth);
	}, [ref]);

	return (
		<div
			ref={ref}
			className="relative group max-w-[280px] w-full rounded-t-md transition-shadow hover:shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)] cursor-pointer"
		>
			<div style={{ height: widthImage }} className="flex items-center">
				<Image
					loader={imageLoader}
					src={item.image}
					width={widthImage}
					height={widthImage}
					alt={item.title}
				/>
			</div>
			<div className="flex flex-col py-2 px-4 gap-2">
				<span className="text-lg font-bold text-indigo-500">
					{numberWithSpaces(Number(item.price))} ₽
				</span>
				<h1 className="text-base font-semibold text-ellipsis text-nowrap overflow-hidden">
					{item.title}
				</h1>
				<div className="flex justify-between items-center">
					{details.volume && (
						<span className="flex items-center gap-1 text-zinc-500 text-sm">
							<RiScales2Line />
							{details.volume} гм.
						</span>
					)}
					{details.size && (
						<span className="flex items-center gap-2 text-zinc-500 text-sm">
							<LuCircleDashed />
							{details.size} см.
						</span>
					)}
					{details.pieces && (
						<span className="flex items-center gap-2 text-zinc-500 text-sm">
							<PiDotsSixBold />
							{details.pieces} шт.
						</span>
					)}
				</div>
			</div>
			<div className="absolute flex gap-2 bg-white w-full rounded-b-md px-4 py-2 transition-opacity opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto shadow-[0px_0px_20px_0px_rgba(0,0,0,0.2)]">
				<button
					disabled={isAdded || actionsLoading}
					onClick={handleAddClick}
					className="bg-black text-white flex items-center justify-center gap-2 border-[1px] w-full py-2 transition-colors rounded-md hover:bg-zinc-800 disabled:bg-zinc-600"
				>
					{actionsLoading ? (
						<span className="animate-spin">
							<AiOutlineLoading3Quarters />
						</span>
					) : isAdded ? (
						<>
							<span>Добавленно</span>
							<TbShoppingCartCopy size={20} />
						</>
					) : (
						<>
							<span>В корзину</span>
							<TbShoppingCartPlus size={20} />
						</>
					)}
				</button>
				{isAdded && (
					<button
						onClick={handleRemoveClick}
						className="px-3 bg-red-500 rounded-md text-white transition-colors hover:bg-red-600"
					>
						<LuTrash2 size={18} />
					</button>
				)}
			</div>
		</div>
	);
};

export default Card;
