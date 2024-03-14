import { Container, ProductCategories } from '@/elements/index';

import { SlickList, Slider } from '@/modules/index';

const HomePage = () => {
	return (
		<main className="py-8">
			<Container>
				<div className="flex flex-col gap-16 pb-32">
					<Slider />
					<ProductCategories />
					<SlickList
						requestUrl="/api/goods/get-goods?type=all&sort=popular"
						redierctUrl="/catalog?type=all&sort=popular"
						title="Популярные товары"
					/>
				</div>
			</Container>
		</main>
	);
};

export default HomePage;
