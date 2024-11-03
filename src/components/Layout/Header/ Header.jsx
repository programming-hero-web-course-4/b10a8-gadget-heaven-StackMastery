import { Link, NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import { Turn as Hamburger } from 'hamburger-react'
import CartIcon from '@/assets/icon/cart.svg'
import LovetIcon from '@/assets/icon/love.svg'


const Header = () => {

    const [menuOpen, setmenuOpen] = useState(false);
    const location = useLocation()

    return (
        <>
            <header className={`flex justify-center w-full absolute ${location.pathname === '/' ? 'translate-y-7' : 'bg-white border-b'} z-[999999]`}>
                <div className={`w-primary py-3 flex justify-between items-center ${location.pathname === '/' ? 'p-14' : '!p-5'}`}>
                    <Link className={`font-bold text-[23px] ${location.pathname === '/' ? 'text-white' : ''}`}>
                        <p className="max-[380px]:hidden">Gadget Heaven</p>
                        <p className="max-[380px]:block hidden">GH</p>
                    </Link>
                    <nav className={`absolute w-full left-0 lg:static lg:flex lg:!p-0 lg:w-fit ${menuOpen ? 'flex' : 'hidden'} ${
                        location.pathname === '/'
                            ? 'px-14 top-[4.5rem]'
                            : 'px-5 top-[5.5rem]   '
                    }`}> 
                        <ul className={`gap-5 lg:flex flex-col p-5 bg-white border border-stone-200 lg:p-0 lg:flex-row lg:bg-transparent lg:border-none w-full border ${menuOpen ? 'flex' : 'hidden'} ${location.pathname === '/'
                            ? 'rounded-md'
                            : 'rounded-b-md'
                        }`}>
                            {
                                menuData && menuData.map((li, index) => (
                                    <NavLink 
                                        key={index}
                                        to={li.path}
                                        className={({isActive}) =>
                                            `
                                                text-sm
                                                ${
                                                    location.pathname === '/'
                                                        ? `${isActive ? 'lg:text-white font-bold lg:underline' : ''} lg:text-white`
                                                        : `${isActive ? 'text-primary font-bold' : ''}`
                                    
                                                }
                                            `
                                        }
                                    >
                                        {li.name}
                                    </NavLink>
                                ))
                            }
                            <HeaderFeatures className="max-[490px]:flex"></HeaderFeatures>
                        </ul>
                    </nav>
                    <div className="flex items-center justify-center gap-5">
                        <HeaderFeatures className="min-[490px]:flex"></HeaderFeatures>
                        <div className="lg:hidden">
                            <Hamburger  
                                color={`${location.pathname === '/' ? 'white' : 'black'}`}
                                onToggle={toggled => {
                                    toggled
                                        ? setmenuOpen(true)
                                        : setmenuOpen(false)
        
                                }} 
                            />
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header

export const menuData = [
    {name: 'Home', path: '/'},
    {name: 'Statistics', path: '/statistics'},
    {name: 'Dashboard', path: '/dashboard'},
]

const HeaderFeatures = ({className}) => {
    return (
        <>
            <div className={`hidden items-center gap-5 ${className}`}>  
                <Link to={'/dashboard/cart'} className="border bg-white p-2 rounded-full border-stone-200 hover:scale-110 transition-all">
                    <img width={15} src={CartIcon} alt="Cart" />
                </Link>
                <Link to={'/dashboard/whistlist'} className="border bg-white p-2 rounded-full border-stone-200 hover:scale-110 transition-all">
                    <img width={15} src={LovetIcon} alt="Cart" />
                </Link>
            </div>
        </>
    )
}