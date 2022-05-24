import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';
import Loading from '../Shared/Loading';
import MyOrdersDeleteConfirmation from './MyOrdersDeleteConfirmation';
import MyOrdersRow from './MyOrdersRow';

const MyOrders = () => {
    const [removeOrders, setRemoveOrders] = useState(null)
    const [user] = useAuthState(auth)
    // const [orders, setOrder] = useState([]);
    const navigate = useNavigate();
    const url = `https://gentle-ocean-30847.herokuapp.com/order?buyer=${user.email}`
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(url, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => {
        console.log('res', res);
        if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken")
            navigate("/")
        }
        return res.json()
    }));

    if (isLoading) {
        return <Loading></Loading>
    }
    // useEffect(() => {
    //     fetch(, {
    //         method: "GET",
    //         headers: {
    //             "authorization": `Bearer ${localStorage.getItem("accessToken")}`
    //         }
    //     })
    //         .then(res => {
    //             console.log('res', res);
    //             if (res.status === 401 || res.status === 403) {
    //                 signOut(auth);
    //                 localStorage.removeItem("accessToken")
    //                 navigate("/")
    //             }
    //             return res.json()
    //         })
    //         .then(data => setOrder(data))
    // }, [user])
    return (
        <div>
            <h2 className='text-2xl'>My Orders: {orders.length}</h2>
            <div class="overflow-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Name</th>
                            <th>Price per pis</th>
                            <th>Totall Price</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((order, index) => <MyOrdersRow
                                key={order._id}
                                order={order}
                                index={index}
                                setRemoveOrders={setRemoveOrders}
                            ></MyOrdersRow>)
                        }

                    </tbody>
                </table>
            </div>
            {
                removeOrders && <MyOrdersDeleteConfirmation
                    removeOrders={removeOrders}
                    refetch={refetch}
                    setRemoveOrders={setRemoveOrders}
                ></MyOrdersDeleteConfirmation>
            }
        </div>
    );
};

export default MyOrders;