import Image, { ImageLoader } from 'next/image';
import toast from 'react-hot-toast';
import { LuCircleDashed, LuTrash2 } from 'react-icons/lu';
import { PiDotsSixBold } from 'react-icons/pi';
import { RiScales2Line } from 'react-icons/ri';

import { useAppDispatch } from '@/hooks/redux-hooks';

import { removeCart } from '@/redux/slices/cart-slice';

import { Product } from '@/types/index';

import { removeCartLocal } from '@/utils/cart-local-actions';
import { numberWithSpaces } from '@/utils/number-with-spaces';

const CartItem = ({ item }: { item: Product }) => {
	const dispatch = useAppDispatch();

	// @ts-ignore
	const details = JSON.parse(item.details) as {
		volume?: string;
		size?: string;
		pieces?: string;
	};

	const handleRemoveClick = () => {
		removeCartLocal(item.id!);
		dispatch(removeCart(item.id!));
		toast.error('Товар был удален из корзины');
	};

	const imageLoader: ImageLoader = ({ src, width }) => {
		return `${process.env.API_URL}/uploads/goods/${src}?w=${width}`;
	};

	return (
		<div className="flex gap-8">
			<div>
				<Image
					loader={imageLoader}
					src={item.image}
					width={150}
					height={150}
					alt={item.title}
				/>
			</div>
			<div className="flex-1 flex justify-between py-4">
				<div className="flex flex-col gap-3">
					<h1 className="text-base font-semibold">{item.title}</h1>
					<h3 className="text-sm">{item.description}</h3>
					<div className="flex gap-4 items-center">
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
				<div className="flex flex-col justify-between items-end">
					<span className="text-xl text-indigo-500 font-bold">
						{numberWithSpaces(Number(item.price))} ₽
					</span>
					<button
						className="flex items-center gap-2 transition-colors text-zinc-400 hover:text-indigo-500"
						onClick={handleRemoveClick}
					>
						<LuTrash2 />
						<p className="text-indigo-500">Удалить</p>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CartItem;
