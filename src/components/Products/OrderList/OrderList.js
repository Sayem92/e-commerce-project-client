import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../Context/UserContext';
import Loading from '../../Loading/Loading';
import OrderListCard from './OrderListCard';

const OrderList = () => {
    const { user } = useContext(AuthContext);

    const { data: orders = [], isLoading, refetch } = useQuery({
        queryKey: ['user?.email'],
        queryFn: async () => {
            try {

                const res = await fetch(`http://localhost:5000/AllOrders/${user?.email}`)
                const data = await res.json();
                return data;

            }
            catch (err) {
                console.log(err);
            }
        }
    })


    if (isLoading) {
        return <Loading></Loading>
    };



    return (
        <div className='px-2 my-10 container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

            {
                orders?.map(pro => <OrderListCard key={pro._id}
                    pro={pro} refetch={refetch}></OrderListCard>)
            }
        </div>
    );
};

export default OrderList;