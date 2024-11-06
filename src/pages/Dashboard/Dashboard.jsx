import { useContext, useState, useEffect } from 'react';
import Titlebar from '../../components/Section/TitleBar/Titlebar';
import { AppContext } from '../../context/AppContext/AppContextProvider';
import MixerIcon from '@/assets/icon/mixer.svg';
import DeleteIcon from '@/assets/icon/delet.svg';
import toast from 'react-hot-toast';
import SignMark from '@/assets/icon/signmark.svg'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const { 
        activeDashboardTabs, 
        setactiveDashboardtabs, 
        cart, 
        setCart, 
        setWishList, 
        setheaderIsHome,
        wishList 
    } = useContext(AppContext);

    let totalCost = cart ? cart.reduce((sum, item) => sum + item.price, 0).toFixed(2) : 0

    useEffect(() => {
        document.title = `Dashboard | Gadget Heaven`;
        setheaderIsHome(false)
    }, []);

    const removeCart = (cartId) => {
        const updatedCart = cart.filter((item) => item.id !== cartId);
        setCart(updatedCart);
        toast.success('Item removed from cart');
    };

    const sortByPriceDescending = () => {
        const sortedCart = [...cart].sort((a, b) => b.price - a.price);
        setCart(sortedCart);
    };

    const createACart = (product) => {
        const cartExist = cart.filter((item) => item.id === product.id);

        if (cartExist.length === 0) {
            setCart([...cart, product]);
            toast.success('Added to cart successfully');
        } else {
            toast.error('Already in cart');
        }
    };

    const removeWishList = (wishListId) => {
        const updatedWishlist = wishList.filter((item) => item.id !== wishListId);
        setWishList(updatedWishlist);
        toast.success('Item removed from wishlist');
    };

    const [paymentModalOpen, setpaymentModalOpen] = useState(false);

    const navigate = useNavigate();
    

    return (
        <>
            {/* Modal */}
            {
                paymentModalOpen 
                    ? (
                        <section className='flex justify-center fixed w-full z-[99999]'>
                            <div className='w-full h-screen bg-[#00000030]  flex justify-center items-center'>
                                <div className='bg-white p-10 rounded-xl px-16 h-fit flex text-center justify-center flex-col items-center gap-3'>
                                    <img width={60} src={SignMark} className='animate-pulse' alt="Payment Succesfull"/>
                                    <h3 className='text-xl font-semibold md:px-5'>Payment SuccesFull</h3>
                                    <span className='w-full h-[1px] bg-[#00000030]'></span>
                                    <p className='text-off-white text-sm'>
                                        Thanks For Purchasing <br/>
                                        Total: {totalCost}
                                    </p>
                                    <button onClick={() => {
                                        setpaymentModalOpen(false)
                                        setCart([])
                                        navigate('/')
                                    }} className='bg-[#11000014] py-2 text-xs px-5 w-full rounded-full font-medium border hover:border-black hover:bg-transparent'>Close</button>
                                </div>
                            </div>
                        </section>
                    )
                    : ''
            }
            <Titlebar title="Dashboard">
                <p className="text-center text-xs sm:text-sm text-white">
                    Explore the latest gadgets that will take your experience to the next level. From smart devices to
                    <br className="hidden md:block" /> the coolest accessories, we have it all!
                </p>
                <div className="w-full flex justify-center gap-5">
                    <button 
                        onClick={() => setactiveDashboardtabs(true)}
                        className={`${activeDashboardTabs ? 'bg-white font-bold text-primary' : 'bg-transparent border-white text-white'} border py-2 rounded-full px-5`}
                    >
                        Cart
                    </button>
                    <button 
                        onClick={() => setactiveDashboardtabs(false)}
                        className={`${!activeDashboardTabs ? 'bg-white font-bold text-primary' : 'bg-transparent border-white text-white'} border py-2 rounded-full px-5`}
                    >
                        Wishlist
                    </button>
                </div>
            </Titlebar>
            {activeDashboardTabs ? (
                <section className="flex justify-center">
                    <div className="w-primary px-5 py-10 flex flex-col items-center">
                        {
                            cart.length !== 0
                                ? (
                                    <>
                                        <div className="w-full flex justify-between sm:items-center flex-col sm:flex-row items-start">
                                            <h3 className="font-semibold text-xl text-end sm:text-center w-full sm:w-fit translate-y-8 sm:translate-y-0">Cart</h3>
                                            <div className="flex flex-col sm:flex-row sm:items-center gap-5 flex-wrap w-full sm:w-fit">
                                                <h3 className="font-semibold text-xl">Total cost: {totalCost} $</h3>
                                                <button onClick={sortByPriceDescending} className="p-[1px] rounded-full bg-gradient-to-b from-primary to-purple-500 w-full sm:w-fit">
                                                    <div className="py-2 px-5 w-full bg-white rounded-full text-primary flex gap-2 items-center justify-center">
                                                        Sort by Price
                                                        <img width={20} src={MixerIcon} alt="Mixer Icon" />
                                                    </div>
                                                </button>
                                                <button onClick={() => {
                                                    setpaymentModalOpen(true)
                                                    }} className="p-[1px] rounded-full bg-gradient-to-b from-primary to-purple-500 w-full sm:w-fit">
                                                    <div className="py-2 px-5 w-full rounded-full text-white flex gap-2 items-center justify-center">
                                                        Purchase
                                                    </div>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="w-full flex flex-col py-10 gap-5">
                                            {cart && cart.map((item, index) => (
                                                <div key={index} className="p-7 rounded-xl border flex gap-7 flex-col min-[400px]:flex-row bg-white">
                                                    <img className="bg-stone-100 object-cover h-32 rounded-xl" alt={item.title} src={item.image} />
                                                    <div className="flex justify-between w-full h-full">
                                                        <div className="flex justify-around flex-col">
                                                            <h2 className="text-[23px] font-medium text-text-color">{item.title}</h2>
                                                            <p className="text-off-white font-light text-md">{item.des}</p>
                                                            <p className="text-xs md:text-[17px] text-text-color opacity-60">
                                                                <strong>Price:</strong> {item.price}
                                                            </p>
                                                        </div>
                                                        <div>
                                                            <img onClick={() => removeCart(item.id)} width={30} className="cursor-pointer hover:rotate-180 transition-all" src={DeleteIcon} alt="Delete Icon" />
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </>
                                )
                                : (
                                    <LoaderCart/>
                                )
                        }
                    </div>
                </section>
            ) : (
                <section className="flex justify-center">
                    <div className="w-primary">
                        <div className="w-full flex flex-col py-10 gap-5 p-5">
                            <h3 className="font-semibold text-xl ">Wishlist</h3> 
                            {wishList.length !== 0 ? (
                                wishList.map((item, index) => (
                                    <>
                                        <div key={index} className="p-7 rounded-xl border flex gap-7 flex-col min-[400px]:flex-row bg-white">
                                            <img className="bg-stone-100 object-cover h-44 rounded-xl" alt={item.title} src={item.image} />
                                            <div className="flex justify-between w-full h-full">
                                                <div className="flex justify-around flex-col h-full gap-5">
                                                    <h2 className="text-[23px] font-medium text-text-color">{item.title}</h2>
                                                    <p className="text-off-white font-light text-md">{item.des}</p>
                                                    <p className="text-xs md:text-[17px] text-text-color opacity-60">
                                                        <strong>Price:</strong> {item.price}
                                                    </p>
                                                    <button onClick={() => createACart(item)} className="bg-primary text-white py-2 px-5 rounded-full w-fit">
                                                        Add To Cart
                                                    </button>
                                                </div>
                                                <div>
                                                    <img onClick={() => removeWishList(item.id)} width={30} className="cursor-pointer hover:rotate-180 transition-all" src={DeleteIcon} alt="Delete Icon" />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ))
                            ) : (
                                <div className="w-full px-5">
                                    <div>
                                    <div className="p-7 rounded-xl border flex gap-7 flex-col min-[400px]:flex-row animate-pulse">
                                        <div className="bg-stone-100 h-44 w-full min-[400px]:w-1/4 rounded-xl"></div>
                                        <div className="flex justify-between w-full h-full">
                                            <div className="flex flex-col justify-around h-full gap-5 w-full">
                                                <div className="h-6 bg-gray-300 rounded w-3/4"></div> 
                                                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                                                <div className="h-4 bg-gray-200 rounded w-1/2"></div> 
                                                <div className="bg-primary h-10 w-28 rounded-full"></div>
                                            </div>
                                            <div className="h-8 w-8 bg-gray-300 rounded-full"></div> 
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default Dashboard;

const LoaderCart = () => {
    return (
        <>
            <div className="w-full flex !justify-between sm:items-center flex-col sm:flex-row items-start mb-10 gap-5">
                <div className="h-6 bg-gray-300 rounded w-1/4"></div> 
                <div className="flex flex-col sm:flex-row gap-5 w-full justify-end">
                    <div className="h-6 bg-gray-300 rounded md:w-1/3"></div>
                    <div className="p-[1px] rounded-full bg-gray-300 w-full sm:w-fit">
                        <div className="py-2 px-5 w-full rounded-full text-primary h-6"></div> 
                    </div>
                    <div className="p-[1px] rounded-full bg-gradient-to-b from-primary to-purple-500 w-full sm:w-fit">
                        <div className="py-2 px-5 w-full rounded-full text-white h-6"></div> 
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-col gap-5">
                {[...Array(1)].map((_, index) => (
                    <div key={index} className="p-7 rounded-xl border flex gap-7 flex-col min-[400px]:flex-row">
                        <div className="bg-stone-100 h-32 w-1/4 rounded-xl"></div>
                        <div className="flex justify-between w-full h-full">
                            <div className="flex flex-col justify-around gap-3 w-full">
                                <div className="h-5 bg-gray-300 rounded w-3/4"></div> 
                                <div className="h-4 bg-gray-200 rounded w-2/3"></div> 
                                <div className="h-4 bg-gray-200 rounded w-1/2"></div> 
                            </div>
                            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}