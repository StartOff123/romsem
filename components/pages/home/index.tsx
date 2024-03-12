import { SlickList, Slider } from '@/components/modules';
import { Container, ProductCategories } from '@/components/elements';

const HomePage = () => {
    return (
        <main className='py-8'>
            <Container>
                <div className='flex flex-col gap-16 pb-32'>
                    <Slider />
                    <ProductCategories />
                    <SlickList requestUrl='/api/goods/get-goods?type=all&sort=popular' redierctUrl='/catalog?type=all&sort=popular' title='Популярные товары' />
                </div>
            </Container>
        </main>
    );
}

export default HomePage;