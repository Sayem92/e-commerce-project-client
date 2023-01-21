import React from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://images.pexels.com/photos/3944405/pexels-photo-3944405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md ">
                        <h1 className="mb-5 text-5xl font-bold">Welcome to <span className='text-orange-500 dark:text-white'>Smart Commerce</span> </h1>
                        <p className="mb-5">Introducing Smart Commerce, your one-stop shop for all your online shopping needs. With a vast selection of products and competitive prices, we make online shopping easy, convenient, and satisfying. Shop with us today and discover the future of e-commerce.</p>
                     <Link to='/products'>
                     <button className="btn bg-orange-500 border-none hover:bg-blue-700 ">Get Started</button>
                     </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;