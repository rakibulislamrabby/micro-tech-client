import React from 'react';

const MyOrdersRow = ({ order, index, }) => {
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{order.product}</td>
            <td>{order.price}</td>
            <td>{order.TotallPrice}</td>
            <td>{order.quantity}</td>
            <td><button class="btn btn-xs">Cencel order</button></td>
        </tr>
    );
};

export default MyOrdersRow;