'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

import { SIDEBAR_LINKS } from '@settings/common';

const Sidebar = () => {
	const { type } = useParams() as { type: string };

	return (
		<div>
			<div className="w-[250px] fixed">
				<Link href="/" className="flex flex-col items-center py-7 gap-y-6">
					<Image src="/img/logo.png" alt="logo" width={100} height={100} />
					<h1 className="text-3xl font-light uppercase">romsem</h1>
				</Link>
				<span className="w-4/6 bg-zinc-300 h-[1px] block mx-auto" />
				<div className="flex justify-center py-7">
					<nav className="space-y-7">
						{SIDEBAR_LINKS.map((link) => (
							<Link
								key={link.id}
								href={link.href}
								className={classNames(
									'flex items-center gap-x-5 text-xl hover:text-orange-500 transition',
									type && link.type === type.toUpperCase() && '!text-orange-500'
								)}
							>
								{link.icon}
								{link.title}
							</Link>
						))}
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
