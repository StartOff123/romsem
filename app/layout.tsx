import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import 'swiper/css';
import 'swiper/css/navigation';

import AntdConfigProvider from '@providers/antd-config-provider';
import { ToasterProvider } from '@providers/toaster-provider';

import ActiveOrder from '@modules/active-order.module';
import Cart from '@modules/cart.module';
import Footer from '@modules/footer.module';
import Header from '@modules/header.module';
import Sidebar from '@modules/sidebar.module';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Добро пожаловать! RomSem'
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={inter.className}>
				<AntdConfigProvider>
					<ToasterProvider />
					<main className="grid grid-cols-[250px_1fr] 2xl:grid-cols-[250px_1fr_370px]">
						<Sidebar />
						<section className="relative h-full flex flex-col bg-zinc-100">
							<Header />
							<div className="flex-1">{children}</div>
							<Footer />
							<ActiveOrder />
						</section>
						<Cart />
					</main>
				</AntdConfigProvider>
			</body>
		</html>
	);
}
