import React from 'react';
import { toast } from 'react-hot-toast';

const OrderListCard = ({ pro, refetch }) => {
    const { name, price, img, _id } = pro;

    const handleOrderDelete = id => {

        const agree = window.confirm('Are you sure you want to delete this!')

        if (agree) {
            fetch(`https://e-commerce-project-server.vercel.app/order/${id}`, {
                method: "DELETE",

            })
                .then(res => res.json())
                .then(data => {
                    // console.log("save user", data);
                    toast.success("Successfully delete order");
                    refetch();


                })
        }

    };



    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <div>
                <img src={img} className='rounded-xl h-full w-full' alt="" />
            </div>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p className='text-xl mt-2 '>Price: <strong className='text-blue-600'>{price}$</strong></p>
                <div className="card-actions justify-end">
                    <button onClick={() => handleOrderDelete(_id)}
                        className=' border-none btn  bg-red-500 hover:bg-red-600 '>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default OrderListCard;