import LovetIcon from '@/assets/icon/love.svg'
import React, { useContext, useEffect, useState } from 'react';
import Heading from "../../components/Ui/Heading";
import Rating from '../../components/Ui/Rating';
import Button from '../../components/Ui/Buttons';
import { Link, useLoaderData, useParams } from 'react-router-dom';
import CartWhiteIcon from '@/assets/icon/cartwhite.svg'
import { IoReturnUpBack } from "react-icons/io5";

const Product = () => {

    const {titleId} = useParams()
    const allProductData = useLoaderData()
    const [singleProduct, setsingleProduct] = useState();

    useEffect(() => {
        const findProduct = allProductData.find((product) => 
            product.product_id === `${titleId}`);
        
        setsingleProduct(findProduct);
    }, [allProductData, titleId]);
      

    console.log(singleProduct);
    
    return (
        <>
            <section className="flex justify-center w-full pt-[77px]">
                <div className="w-full bg-primary py-10 space-y-5 px-5 pb-36">
                    <Heading className={'text-white text-center !text-3xl'}>
                        Product Details
                    </Heading>
                    <p className='text-center text-xs sm:text-sm text-white'>
                        Explore the latest gadgets that will take your experience to the next level. From smart devices to
                        <br className='hidden md:block' /> the coolest accessories, we have it all!
                    </p>
                </div>
            </section>
            <section className="flex justify-center w-full -mt-36">
                <div className="flex w-primary px-5 py-10">
                    <div className="w-full flex bg-white shadow-md p-10 rounded-2xl justify-between gap-10 flex-col md:flex-row">
                        {
                            singleProduct
                                ? (
                                    <>
                                            <div className="bg-stone-100 p-5 rounded-2xl flex justify-center border border-[#0000000e] w-full md:w-5/12">
                                                <img className='object-cover' src={singleProduct.product_image} alt={singleProduct.product_title} />
                                            </div>
                                            <div className="w-full md:w-8/12 flex flex-col justify-start space-y-4">
                                                <Heading className={'!text-2xl text-text-color'}>
                                                    {singleProduct.product_title}
                                                </Heading>
                                                <p className="font-medium text-[#09080fe6]">Price: $ {singleProduct.price}</p>
                                                <span className="text-xs py-1 px-5 border-[#309C08] border w-fit bg-green-100 text-[#309C08] rounded-full">
                                                    In Stock
                                                </span>
                                                <p className='text-xs text-off-white sm:text-sm'>
                                                    {singleProduct.description}
                                                </p>
                                                <p className="text-text-color font-medium">Specification:</p>
                                                <ol className="list-decimal pl-5 text-off-white font-light">
                                                    {
                                                        singleProduct.specification.map((item, index) => (
                                                            <li key={index} className='text-sm'>{item}</li>
                                                        ))
                                                    }
                                                </ol>
                                                <p className="text-text-color font-medium">Rating: ⭐</p>
                                                <Rating>{singleProduct.rating}</Rating>
                                                <div className='flex gap-5'>
                                                    <Button className={'!bg-primary font-semibold !text-white flex gap-2 items-center hover:scale-90'}>
                                                        Add To Cart
                                                        <img src={CartWhiteIcon} alt="" />
                                                    </Button>
                                                    <button className="border bg-white p-2 px-3 rounded-full border-stone-300 hover:scale-110 transition-all">
                                                        <img width={15} src={LovetIcon} alt="Cart" />
                                                    </button>
                                                </div>
                                            </div>
                                    </>
                                )
                                : (
                                    <div className='flex flex-col w-full justify-center items-center gap-5'>
                                        <Heading className={'text-center w-full font-medium !text-3xl'}>
                                            Sorry This Product Is Not Found 
                                        </Heading>
                                        <Link to={-1}>
                                            <Button className={'!bg-primary text-white flex items-center gap-2'}>
                                                Back To Previous Page
                                                <IoReturnUpBack size={20} />
                                            </Button>
                                        </Link>
                                    </div>
                                )
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Product;
