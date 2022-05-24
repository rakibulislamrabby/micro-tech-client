import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ product, index, refetch, setRemoveProduct }) => {
    const { _id, img, name, price, availableQuantity, email } = product;


    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-16 rounded">
                    <img src={img} alt="product" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{price}</td>
            <td>{availableQuantity}</td>
            <td>
                <label onClick={() => setRemoveProduct(product)} for="delete-confirm-modal" class="btn btn-xs btn-error">Remove Product</label>
            </td>
        </tr>)

};

export default ManageProductRow;