import Heading from "../../Ui/Heading";

const Titlebar = ({children, title, des, classNameParent, classNameChild}) => {
    return (
        <>
            <section className={`flex justify-center w-full pt-[77px] ${classNameParent}`}>
                <div className={`w-full bg-primary py-10 space-y-5 px-5  ${classNameChild}`}>
                    <Heading className={'text-white text-center !text-3xl'}>
                        {title}
                    </Heading>
                    <p className='text-center text-xs sm:text-sm text-white'>
                        {des}
                    </p>
                    {children}
                </div>
            </section>
        </>
    );
}

export default Titlebar