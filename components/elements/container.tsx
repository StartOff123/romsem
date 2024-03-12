const Container = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='max-w-[1320px] px-16 w-full mx-auto'>
            {children}
        </div>
    );
}

export default Container;