import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase_init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/order?buyer=${user.email}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [user])
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
                        </tr>
                    </thead>
                    <tbody>

                        {
                            orders.map((o, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{o.product}</td>
                                <td>{o.price}</td>
                                <td>{o.TotallPrice}</td>
                                <td>{o.quantity}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;