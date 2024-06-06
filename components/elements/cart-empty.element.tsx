import Image from 'next/image';
import React from 'react';

const CartEmpty = () => {
	return (
		<div className="py-14 w-full text-center space-y-3">
			<h1 className="text-2xl font-medium">Ваша корзина пуста.</h1>
			<p className="text-zinc-400 text-lg">Добавьте же скорее что-нибудь!</p>
			<Image
				src="/img/empty-box.png"
				alt="empty"
				width={170}
				height={170}
				className="mx-auto pt-10"
			/>
		</div>
	);
};

export default CartEmpty;
