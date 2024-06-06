import Link from 'next/link';
import React from 'react';

import { SIDEBAR_LINKS } from '@settings/common';

const Categories = () => {
	return (
		<div className="grid grid-cols-2 gap-7">
			{SIDEBAR_LINKS.map((link) => (
				<Link
					key={link.id}
					href={link.href}
					className="group relative h-[200px] w-full rounded-md overflow-hidden p-3 flex items-end"
					style={{
						backgroundImage: `url(${link.image})`,
						backgroundPosition: 'center',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat'
					}}
				>
					<span className="absolute w-full top-0 left-0 h-full bg-black/0 group-hover:bg-black/50 transition" />
					<p className="text-white text-2xl z-[1] group-hover:scale-110 group-hover:translate-x-2 group-hover:-translate-y-2 transition">
						{link.title}
					</p>
				</Link>
			))}
		</div>
	);
};

export default Categories;
