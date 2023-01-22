import React from 'react';
import { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/UserContext';

const Booking = () => {
    const product = useLoaderData();
    const { name, price, img } = product;
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    // everyone products bookings component

    const handleCart = () => {
        const cart = {
            name,
            price,
            img,
            UserName: user?.displayName,
            email: user?.email,
        }

        fetch(`https://e-commerce-project-server.vercel.app/order`, {
            method: "POST",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(cart)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("save user", data);
                toast.success("Successfully saved order");
                navigate('/orderList')

            })
    };



    return (
        <div>
            <div className='flex justify-center items-center p-5  lg:py-48 dark:bg-black'>
                <div className="p-8 max-w-sm  rounded-lg border border-gray-200 shadow-md dark:bg-black bg-green-400 ">

                    <h5 className="mb-2 text-xl md:text-2xl  font-bold tracking-tight  dark:text-white">{name}</h5>

                    <p className="mb-1 text-sm font-normal  text-white">Thank You for booking the {name}.</p>
                    <p className="mb-2">Price: <strong>{price}$</strong></p>

                    <p onClick={handleCart} className="inline-flex items-center py-2  px-3 text-lg font-medium text-center text-white hover:bg-orange-500 rounded-lg bg-blue-600 focus:ring-4 focus:outline-none  focus:ring-blue-800">
                        Confirm
                    </p>

                    <Link to='/products'>
                        <button className='ml-36 border-none btn  bg-red-500 hover:bg-red-600 '>Cancel</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Booking;