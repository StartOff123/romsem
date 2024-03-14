import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Footer, Header } from '@/modules/index';

import { ReduxProvider } from '@/providers/redux-provider';
import { ToasterProvider } from '@/providers/toaster-provider';

import '../globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Интернет магазин быстрого питания | RomSem'
};

export default function RootLayout({
	children
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ru">
			<body className={inter.className} suppressHydrationWarning={true}>
				<ToasterProvider />
				<ReduxProvider>
					<div className="flex flex-col h-full">
						<Header />
						<div className="pt-[130px] flex-1">{children}</div>
						<Footer />
					</div>
				</ReduxProvider>
			</body>
		</html>
	);
}
