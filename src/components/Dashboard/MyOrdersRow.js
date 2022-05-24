import React from 'react';
import { Link } from 'react-router-dom';

const MyOrdersRow = ({ order, index, setRemoveOrders }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.product}</td>
            <td>{order.price}</td>
            <td>{order.TotallPrice}</td>
            <td>{order.quantity}</td>
            <td><label onClick={() => setRemoveOrders(order)} for="order-cencel-modal" class="btn btn-xs btn-error">Cencel Order</label></td>
            <td>
                {(order.price && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs'>Pay</button></Link>}
                {(order.price && order.paid) && <div>
                    <span className='text-success'>Paid</span> <br />
                    <span className='text-success'>{order.transactionId}</span>
                </div>}
            </td>
        </tr >
    );
};

export default MyOrdersRow;