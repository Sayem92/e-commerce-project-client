import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Loading from '../Loading/Loading';
import ProductCard from './ProductCard';


const Products = () => {
    const [allProducts, setAllProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    // load all products, see everybody

    useEffect(() => {
        setLoading(true)
        axios.get('https://e-commerce-project-server.vercel.app/products')
            .then(data => {
                setAllProducts(data.data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-2 my-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                allProducts.map(pro => <ProductCard key={pro._id}
                    pro={pro}></ProductCard>)
            }
        </div>
    );
};

export default Products;