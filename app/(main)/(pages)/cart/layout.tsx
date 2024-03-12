'use client';

import { Container, Empty } from '@/components/elements';
import { useAppSelector } from '@/hooks/redux-hooks';
import { AddOrderForm, SlickList } from '@/components/modules';
import FormSceleton from '@/components/modules/add-order-form/form-skeleton';

export default function CartLayout({ children }: { children: React.ReactNode }) {
    const { cart, loading } = useAppSelector(state => state.cartSlice);

    return (
        <div>
            <Container>
                <div className='flex flex-col gap-16'>
                    {!cart && loading === 'succeeded' ? (
                        <Empty buttonText='Перейти в каталог' redirectUrl='/catalog?type=all&sort=popular' subtitle='Ваша корзина пуста. Добавьте сюда что-нибудь и возвращайтесь.' title='Корзина пуста' />
                    ) : (
                        <div className='grid grid-cols-12 gap-8'>
                            <div className='col-span-8'>
                                {children}
                            </div>
                            <div className='col-span-4'>
                                {loading === 'pending' ? (
                                    <FormSceleton />
                                ) : (
                                    <AddOrderForm />
                                )}
                            </div>
                        </div>
                    )
                    }
                    <div>
                        <SlickList requestUrl='/api/goods/get-goods?type=all&sort=popular' redierctUrl='/catalog?type=all&sort=popular' title='Вам понравится' />
                    </div>
                </div >
            </Container >
        </div >
    );
}