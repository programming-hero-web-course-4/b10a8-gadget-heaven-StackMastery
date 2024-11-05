import { Link } from 'react-router-dom';
import Heading from '../../Ui/Heading';
import Button from '../../Ui/Buttons';
import heroImage from '@/assets/images/heroimg.webp'

const Banner = () => {
    return (
        <>
            <section className="flex justify-center w-full xl:px-5">
                <div className="w-full p-5 justify-center flex text-white">
                    <div className="w-full bg-primary rounded-xl p-10 pt-20 flex flex-col items-center justify-center gap-7">
                        <Heading className={'md:text-center pt-5'}>
                            Upgrade Your Tech Accessorize with <br className='hidden md:block'/> Gadget Heaven Accessories
                        </Heading>
                        <p className='md:text-center text-xs sm:text-sm'>Explore the latest gadgets that will take your experience to the next level. From smart devices to<br className='hidden md:block'/>  the coolest accessories, we have it all!</p>
                        <Link to={'/dashboard'} className='self-start md:self-center'>
                            <Button>
                                Shop Now
                            </Button>
                        </Link>
                        <div className='w-fit p-5 border border-[#ffffff8e] rounded-3xl bg-[#ffffff2d] md:-mb-80 mt-5'>
                            <img className='object-cover w-[862px] lg:h-[450px] rounded-2xl' src={heroImage} alt="hero Image" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner