import Link from 'next/link';
import { FaInstagram, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

import { Container } from '@/elements/index';

import { categoriesList } from '@/settings/categories-list';

const Footer = () => {
	return (
		<footer className="py-12 bg-zinc-900 mt-auto">
			<Container>
				<div className="flex flex-col">
					<div className="grid grid-cols-2 pb-8">
						<div className="flex flex-col gap-7">
							<h1 className="text-3xl font-bold uppercase text-zinc-600">
								romsem
							</h1>
							<div className="text-white flex flex-col gap-4">
								<p className="flex items-center gap-2 cursor-pointer transition-colors hover:text-indigo-500">
									<FiPhoneCall size={20} />
									+7 999 999 99-99
								</p>
								<p className="flex items-center gap-2  cursor-pointer transition-colors hover:text-indigo-500">
									<FiMail size={20} />
									romsem@test.ru
								</p>
								<p className="flex items-center gap-3">
									<a
										href="#"
										className="transition-colors hover:text-indigo-500"
									>
										<FaInstagram size={20} />
									</a>
									<a
										href="#"
										className="transition-colors hover:text-indigo-500"
									>
										<FaWhatsapp size={20} />
									</a>
									<a
										href="#"
										className="transition-colors hover:text-indigo-500"
									>
										<FaTelegram size={20} />
									</a>
								</p>
							</div>
						</div>
						<div className="flex justify-between">
							<div className="flex flex-col gap-6">
								<h1 className="text-white font-semibold text-sm">Категории</h1>
								<ul className="flex flex-col gap-1">
									{categoriesList.map((item) => (
										<li key={item.key}>
											<Link
												href={item.href}
												className="text-zinc-600 text-sm transition-colors hover:text-zinc-400"
											>
												{item.text}
											</Link>
										</li>
									))}
								</ul>
							</div>
							<div className="flex flex-col gap-6">
								<h1 className="text-white font-semibold text-sm">Помощь</h1>
								<ul className="flex flex-col gap-1">
									<li>
										<Link
											href="#"
											className="text-zinc-600 text-sm transition-colors hover:text-zinc-400"
										>
											Политика доставки
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-zinc-600 text-sm transition-colors hover:text-zinc-400"
										>
											Служба поддержки
										</Link>
									</li>
								</ul>
							</div>
							<div className="flex flex-col gap-6">
								<h1 className="text-white font-semibold text-sm">О нас</h1>
								<ul className="flex flex-col gap-1">
									<li>
										<Link
											href="#"
											className="text-zinc-600 text-sm transition-colors hover:text-zinc-400"
										>
											О RomSem
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-zinc-600 text-sm transition-colors hover:text-zinc-400"
										>
											Политика конфиденциальности
										</Link>
									</li>
									<li>
										<Link
											href="#"
											className="text-zinc-600 text-sm transition-colors hover:text-zinc-400"
										>
											Связаться с нами
										</Link>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="flex items-center justify-between pt-8 border-t-[1px] border-zinc-800">
						<h1 className="text-zinc-600 text-xs">ООО RomSem</h1>
						<div className="flex items-center gap-4">
							<Link
								href="#"
								className="text-zinc-600 text-xs underline transition-colors hover:text-zinc-400"
							>
								Политика обработки персональных данных
							</Link>
							<Link
								href="#"
								className="text-zinc-600 text-xs underline transition-colors hover:text-zinc-400"
							>
								Договор оферты
							</Link>
						</div>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
