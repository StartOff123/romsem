'use client';

import React from 'react';

import { Container } from '@elements/container.element';

import About from '@modules/about.module';
import Categories from '@pages/home-page/categories.home';
import Products from '@pages/home-page/products.home';
import Slider from '@pages/home-page/slider.home';

export default function HomePage() {
	return (
		<div>
			<Container className="py-8 space-y-12">
				<Slider />
				<Categories />
				<Products />
				<About />
			</Container>
		</div>
	);
}
