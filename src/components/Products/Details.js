import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Details = () => {
    const product = useLoaderData();

    // see all details of product

    return (
        <section className="p-2 my-10 text-gray-900">
            <div className="container flex flex-col mx-auto lg:flex-row">
                <div className="w-full lg:w-1/3">
                    <img src={product?.img} className="rounded-lg" alt="" />
                </div>
                <div className="flex flex-col w-full p-6 lg:w-2/3 md:p-8 lg:p-12">
                    <h2 className="text-3xl font-semibold leading-none">{product?.name}</h2>
                    <p className="mt-4 mb-8 text-base">{product?.body}</p>

                    <Link to={`/addToBooking/${product._id}`}>
                        <button className="self-start px-10 py-3 text-lg font-medium rounded text-white bg-orange-500 border-none hover:bg-blue-600">Add To Card</button>
                    </Link>

                </div>
            </div>
        </section>
    );
};

export default Details;