import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/product',
                children: [
                    {
                        path: ':titleId', // Corrected typo here
                        element: <Product />,
                        loader: () => fetch('/src/json/gadgets.json').then(res => res.json()),
                    }
                ]
            },
            {
                path: '*',
                element: '404'
            }
        ]
    }
]);
