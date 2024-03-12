'use client';

import { useSearchParams } from 'next/navigation';

import { CatalogTitle, Container } from '@/components/elements';
import { GoodsType } from '@/types';
import { useAppSelector } from '@/hooks/redux-hooks';

export default function CatalogLayout({ children }: { children: React.ReactNode }) {
    const params = useSearchParams();
    const { goods } = useAppSelector(state => state.goodsSlice);

    return (
        <div>
            <Container>
                <div>
                    <CatalogTitle
                        goodsCount={goods ? goods.length : 0}
                        path={params.get('type') === 'all' ? ['Главная', 'Каталог'] : ['Главная', 'Каталог', GoodsType[params.get('type') as string]]}
                        title={params.get('type') === 'all' ? 'Каталог' : GoodsType[params.get('type') as string]}
                    />
                    <div>{children}</div>
                </div>
            </Container>
        </div>
    );
}