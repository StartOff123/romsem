type CatalogTitleProps = {
    path: string[];
    title: string;
    goodsCount: number;
}

const CatalogTitle = ({ goodsCount, path, title }: CatalogTitleProps) => {
    return (
        <div className='p-4 flex flex-col gap-4'>
            <div className='text-zinc-600 font-semibold text-sm flex gap-6'>
                {path.map((item, i) => (
                    <span
                        key={i}
                        className='relative before:absolute before:w-2 before:h-2 before:rounded-full before:bg-zinc-600 before:top-1/2 before:-translate-y-1/2 before:-right-4 last-of-type:before:hidden'
                    >
                        {item}
                    </span>
                ))}
            </div>
            <div className='flex gap-4 items-center'>
                <h1 className='text-2xl font-bold'>{title}</h1>
                <span className='text-xl font-bold text-zinc-400'>{goodsCount} товаров</span>
            </div>
        </div>
    );
}

export default CatalogTitle;