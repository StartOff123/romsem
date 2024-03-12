import Link from 'next/link';

import { categoriesList } from '@/settings/categories-list';

const ProductCategories = () => {
    return (
        <div className='flex flex-col gap-10'>
            <h1 className='text-3xl font-bold'>Категории</h1>
            <div className='grid grid-cols-2 gap-4'>
                {categoriesList.map(item => (
                    <Link href={item.href} key={item.key} className='group relative h-[200px] overflow-hidden rounded-md cursor-pointer'>
                        <span
                            style={{ background: `url(${item.image}) no-repeat`, backgroundSize: 'cover', backgroundPosition: 'center' }}
                            className='absolute top-0 left-0 w-full h-full transition-transform group-hover:scale-[1.02]'
                        />
                        <span className='absolute bottom-0 translate-y-full left-0 p-4 bg-black bg-opacity-60 w-full transition-transform text-white group-hover:translate-y-0'>{item.text}</span>
                    </Link>
                ))}
            </div>
        </div>
    );
}

export default ProductCategories;