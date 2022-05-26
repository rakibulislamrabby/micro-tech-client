import React from 'react';

const ManageAllOrdersRow = ({ order, index, refetch, setRemoveOrders }) => {
    const { userName, buyer, quantity, TotallPrice } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{buyer}</td>
            <td>{quantity}</td>
            <td>{TotallPrice}</td>
            <td><label onClick={() => setRemoveOrders(order)} for="order-cencel-modal" class="btn btn-xs btn-error">Cencel Order</label></td>
        </tr>)

};

export default ManageAllOrdersRow;