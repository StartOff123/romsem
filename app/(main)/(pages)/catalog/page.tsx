import { Suspense } from 'react';

import { CatalogPage } from '@/pages/index';

export default function Catalog() {
	return (
		<Suspense fallback={<>loading...</>}>
			<CatalogPage />
		</Suspense>
	);
}
