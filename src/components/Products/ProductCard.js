import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ pro }) => {
    const { name, img, price, body, _id } = pro;
    const shortBody = body.slice(0, 80)

    return (
        <div className="card card-compact md:w-80 lg:w-96 mb-4 mx-auto bg-base-100 shadow-xl">
            <figure><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <h6 className="card-title text-xl">Price: {price}$</h6>
                <p>{shortBody}...</p>
                <div className="card-actions justify-between mt-5">
                    <Link to={`/details/${_id}`}>
                        <button className="btn btn-primary">Details</button>
                    </Link>

                    <button className="btn bg-orange-500 border-none hover:bg-orange-600">Add To Card</button>

                </div>
            </div>
        </div>
    );
};

export default ProductCard;