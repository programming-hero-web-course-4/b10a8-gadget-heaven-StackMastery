import Heading from "../../components/Ui/Heading";

const Product = () => {
    return (
        <>
            <section className="flex justify-center w-full pt-[77px]">
                <div className="w-full bg-primary py-10 space-y-5">
                    <Heading className={'text-white text-center !text-3xl'}>
                        Product Details
                    </Heading>
                    <p className='md:text-center text-xs sm:text-sm text-white'>Explore the latest gadgets that will take your experience to the next level. From smart devices to<br className='hidden md:block'/>  the coolest accessories, we have it all!</p>
                </div>
            </section>
        </>
    );
}

export default Product