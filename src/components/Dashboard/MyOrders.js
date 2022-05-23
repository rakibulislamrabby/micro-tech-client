import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase_init';

const MyOrders = () => {
    const [user] = useAuthState(auth)
    const [orders, setOrder] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        fetch(`http://localhost:5000/order?buyer=${user.email}`, {
            method: "GET",
            headers: {
                "authorization": `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                console.log('res', res);
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem("accessToken")
                    navigate("/")
                }
                return res.json()
            })
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