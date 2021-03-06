import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import ManageAllOrdersRow from './ManageAllOrdersRow';
import MyOrdersDeleteConfirmation from './MyOrdersDeleteConfirmation';

const ManageAllOrders = () => {
    const [removeorders, setRemoveOrders] = useState(null)
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch('https://gentle-ocean-30847.herokuapp.com/allOrder', {
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2>All Orders {orders.length}</h2>
            <div class="overflow-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Buyer Name</th>
                            <th>Buyer E-Mail</th>
                            <th>Quantity</th>
                            <th>Totall Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <ManageAllOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                refetch={refetch}
                            ></ManageAllOrdersRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllOrders;