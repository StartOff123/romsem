import { Tabs, TabsProps } from 'antd';
import React from 'react';

import SlidesProduct from '../../modules/slides-product.module';

const Products = () => {
	const items: TabsProps['items'] = [
		{
			key: '1',
			label: 'Новинки',
			children: <SlidesProduct type="new" />
		},
		{
			key: '2',
			label: 'Популярное',
			children: <SlidesProduct type="popular" />
		}
	];

	return (
		<Tabs
			defaultActiveKey="1"
			items={items}
			size="small"
			destroyInactiveTabPane
		/>
	);
};

export default Products;
