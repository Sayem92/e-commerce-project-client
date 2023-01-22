import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../../../Loading/Loading';

const ProductList = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get('http://localhost:5000/products')
            .then(data => {
                setAllProducts(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }
   
    if (!allProducts?.length) {
        return <div className=' flex justify-center items-center my-52'>
            <h1 className='text-3xl font-bold text-blue-600'>No Product Available!
            </h1>
        </div>
    };


    return (
        <div className='p-2 lg:mx-16 mb-16'>
            <h1 className='my-5 text-center text-orange-500 font-bold text-3xl'>Product List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Product Name</th>
                            <th>Image</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allProducts?.map((pro, i) => <tr key={pro._id} className="hover">
                                <th>{i + 1}</th>
                                <td>{pro.name}</td>
                                <td>
                                <img src={pro.img} className='w-16 h-16' alt="" />
                                </td>
                                <td>{pro.price} $</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className='flex justify-center mt-10'>
                <Link to='/dashboard/addProduct'>
                <button className="self-start px-10 py-3 text-lg font-medium rounded text-white hover:bg-orange-500 border-none bg-blue-600">Add Product</button>
                </Link>
            </div>
        </div >
    );
};

export default ProductList;