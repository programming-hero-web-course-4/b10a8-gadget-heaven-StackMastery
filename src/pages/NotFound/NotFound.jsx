import React, { useContext, useEffect } from 'react';
import Image404 from '@/assets/images/404.svg';
import { Link } from 'react-router-dom';
import { AppContext } from '../../context/AppContext/AppContextProvider';

const NotFound = () => {

    const { setheaderIsHome } = useContext(AppContext)

    useEffect(() => {
        document.title = 'Page Not found | Gadget Heaven'
        setheaderIsHome(false)
    })

    return (
        <section className="flex justify-center">
            <div className=" min-h-screen px-6 lg:flex py-40 lg:items-center lg:gap-12 w-primary">
                <div className="w-full lg:w-1/2">
                    <p className="text-sm font-medium text-purple-500">404 error</p>
                    <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">Page not found</h1>
                    <p className="mt-4 text-gray-500">Sorry, the page you are looking for doesn't exist. Here are some helpful links:</p>

                    <div className="flex flex-col gap-3 mt-6 sm:flex-row">
                        <Link to={-1} className="flex items-center justify-center w-full px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 hover:bg-gray-100 sm:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 rtl:rotate-180">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                            </svg>
                            <span>Go back</span>
                        </Link>

                        <Link to={'/'} className="w-full px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-purple-500 rounded-lg hover:bg-purple-600 sm:w-auto">
                            Take me home
                        </Link>
                    </div>
                </div>

                <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
                    <img className="w-full max-w-md mx-auto" src={Image404} alt="Illustration" />
                </div>
            </div>
        </section>
    );
};

export default NotFound;
