import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../Loading/Loading';

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const imageHostKey = process.env.REACT_APP_imgbb_key;

    const navigate = useNavigate();

    const handleAddDoctor = data => {
       
        setLoading(true)
        const image = data.image[0]
        const formData = new FormData();
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: "POST",
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {

                    const newProduct = {
                        name: data.name,
                        price: data.price,
                        img: imgData.data.display_url,
                        body: data.description
                    }

                    // sava information to the database----------
                    fetch(`http://localhost:5000/addProduct`, {
                        method: "POST",
                        headers: {
                            'content-type': "application/json"
                        },
                        body: JSON.stringify(newProduct)
                    })
                        .then(res => res.json())
                        .then(result => {
                            // console.log(result);
                            toast.success(`${data.name} info save successful`);
                            setLoading(false)
                            navigate('/productList');
                        })
                }
            })
    };




    if (loading) {
        return <Loading></Loading>
    }


    return (
        <div className='md:w-96 mx-auto my-12'>
            <h2 className="text-3xl text-center text-orange-500 font-semibold ml-8 mb-4">Add A Product</h2>
            <div className='p-7 rounded-lg shadow-xl mx-2'>
                <form onSubmit={handleSubmit(handleAddDoctor)}>
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Name</span>
                        </label>
                        <input type="text" {...register('name', {
                            required: "Please enter your product name"
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your product name" />

                        {errors.name && <p className='text-red-600'>{errors.name.message}</p>}
                    </div>

                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Price</span>
                        </label>
                        <input type="number" {...register('price', {
                            required: 'price is required'
                        })} className="input input-bordered  w-full max-w-xs" placeholder="Your product price" />

                        {errors.price && <p className='text-red-600'>{errors.price.message}</p>}
                    </div>


                    {/* image */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Photo</span>
                        </label>
                        <input type="file" {...register('image', {
                            required: "Please select your photo"
                        })}
                            className="file-input file-input-primary file-input-bordered file-input-md w-full max-w-xs"
                            placeholder="Product photo"
                        />
                        {errors.image && <p className='text-red-600'>{errors.image.message}</p>}
                    </div>

                    {/* description */}
                    <div className="form-control w-full max-w-x">
                        <label className="label"> <span className="label-text ">Description</span>
                        </label>
                        <textarea type="text" {...register('description', {
                            required: 'Enter your description'
                        })} className="textarea textarea-bordered w-full" placeholder=" Description" />

                        {errors.description && <p className='text-red-600'>{errors.description.message}</p>}
                    </div>





                    <input className='mt-4 btn btn-success text-white w-full max-w-xs' type="submit" value='Add A Product' />
                    <div>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;