import React from 'react';
import { Link } from 'react-router-dom';

const AdminDashboard = () => {

    // only show the admin dashboard 
    
    return (
        <div className='md:w-96 mx-auto p-2 px-5 my-10'>
            <div className=''>
                <Link to='/dashboard/customerList'>
                    <button className="btn btn-active bg-orange-500 border-none hover:bg-orange-600  w-full mb-3">Customer List</button>
                </Link>


                <Link to='/dashboard/productList'>
                <button className="btn btn-active btn-ghost  w-full mb-3">Product List</button>
                </Link>

               <Link to='/dashboard/adminAllOrder'>
               <button className="btn btn-active bg-orange-500 border-none hover:bg-orange-600 w-full mb-3">Order List</button>
               </Link>


            </div>
        </div>
    );
};

export default AdminDashboard;