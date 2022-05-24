import React from 'react';

const ManageAllOrdersRow = ({ order, index, refetch }) => {
    const { userName, buyer, quantity, TotallPrice } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userName}</td>
            <td>{buyer}</td>
            <td>{quantity}</td>
            <td>{TotallPrice}</td>
            <td><button class="btn btn-xs">Remove Product</button></td>
        </tr>)

};

export default ManageAllOrdersRow;