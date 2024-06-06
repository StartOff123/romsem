import React from 'react';

import { Container } from '@elements/container.element';
import SocialSvg from '@elements/social-svg.element';

const Footer = () => {
	return (
		<footer>
			<Container className="grid grid-cols-3 border-t border-zinc-300 pt-5">
				<div className="border-r border-zinc-300 space-y-3 pb-14">
					<a href="" className="block text-lg hover:text-orange-400 transition">
						О компании
					</a>
					<a href="" className="block text-lg hover:text-orange-400 transition">
						Доставка и оплата
					</a>
					<a href="" className="block text-lg hover:text-orange-400 transition">
						Лента материалов
					</a>
					<a href="" className="block text-lg hover:text-orange-400 transition">
						Политика возврата
					</a>
				</div>
				<div className="pl-10 text-lg border-r border-zinc-300 pb-14">
					<h1 className="font-medium">Введите номер</h1>
					<p className="text-zinc-400 pt-2">+7 (___) ___-__-__</p>
					<p className="text-zinc-400 pt-3">
						Выберите удобный мессенджер для общения
					</p>
					<div className="flex gap-x-7 pt-2">
						<SocialSvg
							social="whatsapp"
							className="opacity-15 hover:opacity-100 transition cursor-pointer"
						/>
						<SocialSvg
							social="telergam"
							className="opacity-15 hover:opacity-100 transition cursor-pointer"
						/>
						<SocialSvg
							social="instagram"
							className="opacity-15 hover:opacity-100 transition cursor-pointer"
						/>
					</div>
				</div>
				<div className="pl-10 text-lg pb-14">
					<p className="text-zinc-400">
						Тел: <span className="underline">+7 (999) 999-99-99</span>
					</p>
					<p className="text-zinc-400">
						Тел: <span className="underline">+7 (999) 999-99-99</span>
					</p>
					<p className='text-zinc-400'>Адрес: Аносова, 123</p>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
