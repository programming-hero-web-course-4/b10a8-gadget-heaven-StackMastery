import { useEffect, useState } from "react";
import Heading from "../../Ui/Heading";
import { NavLink, useLoaderData, useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Button from "../../Ui/Buttons";

const GadgetShowcase = () => {

    const [allGadgets, setAllGadgets] = useState([])

    const allDataGadgets = useLoaderData()

    let location = useLocation()
    location = location.pathname.toLowerCase().split("/").join("")    

    useEffect(() => {
        location !== ''
            ? setFilteredData()
            : setAllGadgets(allDataGadgets);
    }, [location, allDataGadgets]);

    const setFilteredData = () => {
        const filteredData = allDataGadgets.filter((item) => item.category.name.toLowerCase() === location)
        setAllGadgets(filteredData)
    }

    const {} = allGadgets

    return (
        <>
            <section className="flex justify-center p-5 pt-10 md:pt-80">
                <Heading className={'pt-10 text-[36px] w-full md:text-center'}>Explore Cutting-Edge Gadgets</Heading>
            </section>
            <section className="flex justify-center pb-20">
                <div className="px-5 pt-10 grid grid-cols-12 w-primary gap-5">
                    <div className="bg-white border rounded-xl shadow-sm col-span-12 h-fit md:col-span-3 flex md:flex-col gap-5 p-5 flex-wrap">
                        {categoryData.map((item, index) => (
                            <NavLink
                                to={item.path}
                                key={index}
                                className={({isActive}) => `py-3 w-fit px-5 md:w-full rounded-full text-off-white bg-[#09080f0d] ${isActive ? '!bg-primary text-white font-semibold ' : ''}`}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </div>
                    <div className="col-span-12 md:col-span-9 grid grid-cols-12 gap-5">
                        {
                            allGadgets.length !== 0
                                ? (allGadgets.map((item, index) => (
                                    <div
                                        key={index}
                                        className={` p-5 rounded-xl shadow-sm col-span-12 sm:col-span-6 lg:col-span-4 bg-white border gap-5 flex flex-col`}
                                    >
                                        <Link to={`/product/${item.product_id}`} className="overflow-hidden rounded-xl">
                                            <img
                                                className="h-[300px] hover:scale-125 transition-all object-cover bg-stone-100 rounded-xl p-5 w-full"
                                                src={item.product_image}
                                                alt={item.product_title}
                                            />
                                        </Link>
                                        <h2 className="text-xl font-medium">
                                            {item.product_title.slice(0, 16)}
                                            <span className="text-stone-600">{item.product_title.length < 14 ? '' : '....'}</span>
                                        </h2>
                                        <p className="text-stone-500">{item.price} $</p>
                                        <Link to={`/product/${item.product_id}`}>
                                            <Button className={'!border-primary w-fit hover:!border-black hover:!text-black font-medium'}>
                                                View Details
                                            </Button>
                                        </Link>
                                    </div> 
                                )))
                                : (
                                    <div
                                        className="p-5 rounded-xl shadow-sm col-span-12 bg-white border gap-5 flex flex-col animate-pulse"
                                    >
                                        <div className="overflow-hidden rounded-xl h-[300px] bg-stone-100 w-full"></div>
                                        <div className="h-6 bg-stone-300 rounded-md mt-4 w-3/4"></div>
                                        <div className="h-4 bg-stone-300 rounded-md w-1/2 my-2"></div>
                                        <div className="h-6 bg-stone-200 rounded-full w-1/3 mt-4"></div>
                                    </div>

                                )
                        }
                    </div>
                </div>
            </section>

        </>
    );
}

export default GadgetShowcase   

export const categoryData = [
    {
        "name": "All Product",
        "path": '/'
    },
    {
        "name": "Laptop",
        "path": '/laptop'
    },
    {
        "name": "Smartphone",
        "path": '/smartphone'
        
    },
    {
        "path": '/smartwatch',
        "name": "Smartwatch"
    },
    {
        "path": '/speaker',
        "name": "Speaker"
    },
    {
        "path": '/television',
        "name": "Television"
    },
    {
        "path": '/mouse',
        "name": "Mouse"
    }
];
