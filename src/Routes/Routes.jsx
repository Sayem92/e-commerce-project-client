import { createBrowserRouter } from "react-router-dom";
import AdminDashboard from "../components/AdminDashboard/AdminDashboard";
import CustomerList from "../components/AdminDashboard/CustomerList/CustomerList";
import ProductList from "../components/AdminDashboard/CustomerList/ProductList/ProductList";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Login from "../components/Form/Login";
import Register from "../components/Form/Register";
import Home from "../components/Home/Home";
import Booking from "../components/Products/Booking/Booking";
import Details from "../components/Products/Details";
import OrderList from "../components/Products/OrderList/OrderList";
import Products from "../components/Products/Products";
import Main from "../Layout/Main";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/products',
                element: <Products></Products>
            },
            {
                path: '/details/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/details/${params.id}`),
                element: <Details></Details>
            },
            {
                path: '/addToBooking/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/addToBooking/${params.id}`),
                element: <PrivateRoutes><Booking></Booking></PrivateRoutes>
            },
            {
                path:'/orderList',
                element: <OrderList></OrderList>
            },
            {
                path:'/dashboard',
                element: <AdminDashboard></AdminDashboard>
            },
            {
                path:'/customerList',
                element: <CustomerList></CustomerList>
            },
            {
                path:'/productList',
                element: <ProductList></ProductList>
            },

            

           

           
            
           
        ]
    }
])