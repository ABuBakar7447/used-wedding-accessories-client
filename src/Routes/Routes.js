import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/products/:category_name',
                element: <CategoryProduct></CategoryProduct>,
                loader: ({ params }) => fetch(`http://localhost:5000/products?product_category=${params.category_name}`)
            },

            {
                path: '/blog',
                element: <Blogs></Blogs>
            },

            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <SignUp></SignUp>
            },
        ]

    }
]);

export default router;