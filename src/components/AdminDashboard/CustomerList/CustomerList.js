import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useState } from 'react';
import Loading from '../../Loading/Loading';
import AddCustomerModal from './AddCustomerModal';

const CustomerList = () => {
    const [modal, setModal] = useState(null);

    const { data: customer = [], isLoading, refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/users`)
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    });



    if (isLoading) {
        return <Loading></Loading>
    };

    if (!customer?.length) {
        return <div className=' flex justify-center items-center my-52'>
            <h1 className='text-3xl font-bold text-blue-600'>No Customer Available!
            </h1>
        </div>
    };


    return (
        <div className='p-2 lg:mx-16 mb-16'>
            <h1 className='my-5 text-center text-orange-500 font-bold text-3xl'>Customer List</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Customer Name</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            customer?.map((custo, i) => <tr key={custo._id}>
                                <th>{i + 1}</th>
                                <td>{custo.name}</td>
                                <td>{custo.email}</td>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>

            <div className='flex justify-center mt-10'>
                <label htmlFor="add-customer-modal"
                onClick={()=>setModal('open')}
                    className="self-start px-10 py-3 text-lg font-medium rounded text-white hover:bg-orange-500 border-none bg-blue-600">Add Customer</label>
            </div>

            {
               modal === 'open' &&<AddCustomerModal refetch={refetch}  setModal={setModal}></AddCustomerModal>
            }
        </div >
    );
};

export default CustomerList;