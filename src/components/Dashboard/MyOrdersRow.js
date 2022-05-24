import React from 'react';

const MyOrdersRow = ({ order, index, setRemoveOrders }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.product}</td>
            <td>{order.price}</td>
            <td>{order.TotallPrice}</td>
            <td>{order.quantity}</td>
            <td><label onClick={() => setRemoveOrders(order)} for="order-cencel-modal" class="btn btn-xs btn-error">Cencel Order</label></td>
        </tr>
    );
};

export default MyOrdersRow;