import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="flex justify-center mt-20 bg-white">
            <div className="w-primary px-5 py-20 flex flex-col items-center justify-center md:text-center">
                <div className="space-y-3 w-full">
                    <h3 className="font-semibold text-text-color text-3xl">Gadget Heaven</h3>
                    <p className="text-off-white pb-5 text-xs md:text-sm">
                        Leading the way in cutting-edge technology and innovation.
                    </p>
                    <hr className="bg-off-white" />
                </div>
                <div className="flex md:justify-center md:gap-40 gap-x-20 gap-y-10 py-10 w-full flex-wrap">
                    {
                        menus.map((item, index) => (
                            <ul className="flex flex-col text-start md:text-center gap-3 text-off-white" key={index}>
                                <h2 className="text-black capitalize font-semibold">{item.category}</h2>
                                {
                                    
                                    item.links.map((link, index) => (
                                        <li key={index}>
                                            <Link className="hover:text-primary transition-colors w-full text-start text-xs" to={link.path}>
                                                {link.name}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>
                        ))
                    }
                </div>
            </div>
        </footer>
    );
}

export default Footer;

const menus = [
    {
        category: 'services',
        links: [
            { name: 'Product Support', path: 'product-support' },
            { name: 'Order Tracking', path: 'order-tracking' },
            { name: 'Shipping & Delivery', path: 'shipping-and-delivery' },
            { name: 'Returns', path: 'returns' }
        ]
    },
    {
        category: 'company',
        links: [
            { name: 'About Us', path: 'about-us' },
            { name: 'Careers', path: 'careers' },
            { name: 'Contact', path: 'contact' }
        ]
    },
    {
        category: 'legal',
        links: [
            { name: 'Terms of Service', path: 'terms-of-service' },
            { name: 'Privacy Policy', path: 'privacy-policy' },
            { name: 'Cookie Policy', path: 'cookie-policy' }
        ]
    }
];
