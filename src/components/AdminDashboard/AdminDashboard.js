import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    return (
        <div className='md:w-96 mx-auto p-2 px-5 my-10'>
            <div className=''>
                <Link to='/customerList'>
                    <button className="btn btn-active bg-orange-500 border-none hover:bg-orange-600  w-full mb-3">Customer List</button>
                </Link>


                <Link to='/productList'>
                <button className="btn btn-active btn-ghost  w-full mb-3">Product List</button>
                </Link>

                <button className="btn btn-active bg-orange-500 border-none hover:bg-orange-600 w-full mb-3">Order List</button>


            </div>
        </div>
    );
};

export default AdminDashboard;