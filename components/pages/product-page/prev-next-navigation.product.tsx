'use client';

import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

import { useProductStore } from '@hooks/use-product-store';

const PrevNextNavigation = () => {
	const router = useRouter();

	const { nextProductId, prevProductId } = useProductStore();

	const handlePrevProduct = () => {
		router.push(`/product/${prevProductId}`);
	};

	const handleNextProduct = () => {
		router.push(`/product/${nextProductId}`);
	};

	return (
		<div className="py-14 px-9 flex items-center justify-between">
			<button
				onClick={handlePrevProduct}
				disabled={prevProductId ? false : true}
				className="group flex items-center gap-x-2 cursor-pointer disabled:cursor-not-allowed"
			>
				<span className="p-1 flex items-center justify-center bg-orange-400 rounded-full text-white group-hover:text-orange-400 group-hover:bg-transparent group-disabled:bg-orange-300 group-disabled:text-white transition">
					<ChevronLeft size={15} />
				</span>
				<p className="text-lg group-hover:text-orange-400 group-disabled:text-zinc-400 transition">
					Назад
				</p>
			</button>
			<button
				onClick={handleNextProduct}
				disabled={nextProductId ? false : true}
				className="group flex items-center gap-x-2 cursor-pointer disabled:cursor-not-allowed"
			>
				<p className="text-lg group-hover:text-orange-400 group-disabled:text-zinc-400 transition">
					Вперед
				</p>
				<span className="p-1 flex items-center justify-center bg-orange-400 rounded-full text-white group-hover:text-orange-400 group-hover:bg-transparent group-disabled:bg-orange-300 group-disabled:text-white  transition">
					<ChevronRight size={15} />
				</span>
			</button>
		</div>
	);
};

export default PrevNextNavigation;
