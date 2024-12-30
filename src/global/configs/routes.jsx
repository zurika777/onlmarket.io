import {Home, About, Contact, Products, ProductDetails, ProductAdd, ProductEdit, CheckOut, Exssample, Favorites, Cart} from '../../pages';

export const routesMap = [
    {
        path: '/',
        element: <Home/>
    },
    {
        path: '/home',
        element: <Home/>
    },
    {
        path: '/about',
        element: <About/>
    },
    {
        path: '/contact',
        element: <Contact/>
    },
    {
        path: '/products',
        element: <Products/>
    },   {
        path: '/products/:category',
        element: <Products/>
    },

    {
        path: '/product-details/:prID',
        element: <ProductDetails/>
    },
    {
        path: '/product-add',
        element: <ProductAdd/>
    },
    {
        path: '/product-edit/:prID',
        element: <ProductEdit/>
    },
    {
        path: '/favorites',
        element: <Favorites/>
    },
    {
        path: '/cart',
        element: <Cart/>
    },
    {
        path: '/checkOut',
        element: <CheckOut/>
    },
    {
        path: '/exssample',
        element: <Exssample/>
    }
];