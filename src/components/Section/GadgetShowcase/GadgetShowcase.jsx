import { useContext, useEffect } from "react";
import GadgetsData from '@/json/gadgets.json'; 
import Heading from "../../Ui/Heading";
import { AppContext } from "../../../context/AppContext/AppContextProvider";
import Button from "../../Ui/Buttons";
import { Link } from "react-router-dom";

const GadgetShowcase = () => {

    const { activeCategory, setactiveCategory, setallGadgetsData, allGadgetsData } = useContext(AppContext)
    
    useEffect(() => {
        setallGadgetsData(GadgetsData)
    }, [setallGadgetsData]);
        
    return (
        <>
            <section className="flex justify-center p-5 pt-10 md:pt-80">
                <Heading className={'pt-10 text-[36px] w-full md:text-center'}>Explore Cutting-Edge Gadgets</Heading>
            </section>
            <section className="flex justify-center pb-20">
                <div className="px-5 pt-10 grid grid-cols-12 w-primary gap-5">
                    <div className="bg-white border rounded-xl shadow-sm col-span-12 h-fit md:col-span-3 flex md:flex-col gap-5 p-5 flex-wrap">
                        {
                            categoryData && categoryData.map((item, index) => (
                                <button 
                                    key={index}
                                    onClick={() => {
                                        setactiveCategory(item.id)
                                    }}
                                    className={`py-3 w-fit px-5 md:w-full rounded-full text-off-white ${activeCategory === item.id ? 'bg-primary !text-white font-bold' : 'bg-[#09080f0d]'}`}>
                                    {item.name}
                                </button>
                            ))
                        }
                    </div>
                    <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5">
                        {
                            allGadgetsData && allGadgetsData.map((item, index) => (
                                <div 
                                    key={index}
                                    className={`${activeCategory === 1 || activeCategory === item.category.id ? 'block' : 'hidden'} p-5 rounded-xl shadow-sm col-span-12 sm:col-span-6 lg:col-span-4 bg-white border gap-5 flex flex-col`}
                                    >
                                    <img className="h-[300px] object-cover bg-stone-100 rounded-xl p-5 w-full" src={item.product_image} alt={item.product_title} />
                                    <h2 className="text-xl font-medium">
                                        {item.product_title.slice(0, 16)}
                                        <span className="text-stone-600">{item.product_title.length < 14 ? '' : '....'}</span>
                                    </h2>
                                    <p className="text-stone-500">{item.price} TK</p>
                                    <Link to={'k'}>
                                        <Button className={'!border-primary w-fit hover:!border-black hover:!text-black'}>
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>
    );
}

export default GadgetShowcase

const categoryData = [
    {
        "id": 1,
        "name": "All Product"
    },
    {
        "id": 2,
        "name": "Smartphone"
    },
    {
        "id": 3,
        "name": "Laptop"
    },
    {
        "id": 4,
        "name": "Smartwatch"
    },
    {
        "id": 5,
        "name": "Speaker"
    },
    {
        "id": 6,
        "name": "Television"
    },
    {
        "id": 7,
        "name": "Mouse"
    }
]
