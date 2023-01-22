import React from 'react';
import { toast } from 'react-hot-toast';

const AddCustomerModal = ({ refetch, setModal }) => {


    const handleBooking = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const emailLowercase = email.toLowerCase();

        const newCustomer = {
            name,
            email: emailLowercase
        }


        fetch(`https://e-commerce-project-server.vercel.app/users`, {
            method: "PUT",
            headers: {
                'content-type': "application/json"
            },
            body: JSON.stringify(newCustomer)
        })
            .then(res => res.json())
            .then(data => {
                console.log("save user", data);
                toast.success('Save user data!');
                refetch();
                setModal('close')


            })


    };


    return (
        <div>
            <input type="checkbox" id="add-customer-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="add-customer-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold ">Add Customer</h3>

                    <form onSubmit={handleBooking}
                        className='grid grid-cols-1 gap-3 mt-10 '>


                        <input name='name' type="text" placeholder="Customer Name" className="input w-full  input-bordered border-gray-400  font-semibold" required />

                        <input name='email' type="email" placeholder="Customer Email Address" className="input w-full input-bordered border-gray-400 font-semibold lowercase" required />

                        <br />

                        <input type="submit" placeholder='Submit' className='btn btn-success w-full ' />

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddCustomerModal;