import DashBoardLayout from "../Layout/DashBoardLayout/DashBoardLayout";
import Main from "../Layout/Main/Main";
import Blogs from "../Pages/Blogs/Blogs";
import CategoryProduct from "../Pages/CategoryProduct/CategoryProduct";
import AddProduct from "../Pages/DashBoard/AddProduct/AddProduct";
import AllBuyer from "../Pages/DashBoard/AllBuyer/AllBuyer";
import AllSeller from "../Pages/DashBoard/AllSeller/AllSeller";
import MyBooking from "../Pages/DashBoard/MyBookIng/MyBooking";
import MyProduct from "../Pages/DashBoard/MyProduct/MyProduct";
import Payment from "../Pages/DashBoard/Payment/Payment";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Private from "./Private/Private";

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
                element: <Private><CategoryProduct></CategoryProduct></Private>,
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

    },

    {
        path: '/dashboard',
        element: <DashBoardLayout></DashBoardLayout>,
        children: [

            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>,
            },
            {
                path: '/dashboard/myproduct',
                element:<MyProduct></MyProduct>,
            },
            {
                path: '/dashboard/allseller',
                element: <AllSeller></AllSeller>,
            },
            {
                path: '/dashboard/allbuyer',
                element: <AllBuyer></AllBuyer>,
            },
            // {
            //     path: '/dashboard/report',
            //     element: <Report></Report>,
            // },
            {
                path: '/dashboard/myorder',
                element: <MyBooking></MyBooking>,
            },
            {
                path: '/dashboard/payment/:id',
                element: <Payment></Payment>,
                loader: ({params})=>fetch(`http://localhost:5000/bookingdata/${params.id}`)
            },
        ]

    }
]);

export default router;