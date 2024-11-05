import { createBrowserRouter } from 'react-router-dom';
import Layout from '../Layout';
import Home from '../pages/Home/Home';
import Product from '../pages/Product/Product';
import NotFound from '../pages/NotFound/NotFound';
import Dashboard from '../pages/Dashboard/Dashboard';
import Statistics from '../pages/Statistics/Statistics';
import Blogs from '../pages/Blogs/Blogs';
import BlogPreview from '../pages/Blogs/BlogPreview/BlogPreview';

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
                path: '/product/:titleId',
                loader: () => fetch('/json/gadgets.json').then(res => res.json()),
                element: <Product />
            },
            {
                path: '/statistics',
                loader: () => fetch('/json/gadgets.json').then(res => res.json()),
                element: <Statistics></Statistics>
            },
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/blogs',
                loader: () => fetch('/json/blog.json').then(res => res.json()),
                element: <Blogs/>,
            },
            {
                path: '/blog/:blogId',
                loader: () => fetch('/json/blog.json').then(res => res.json()),
                element: <BlogPreview/>,
            },
            {
                path: '*',
                element: <NotFound/>
            }
        ]
    }
]);
