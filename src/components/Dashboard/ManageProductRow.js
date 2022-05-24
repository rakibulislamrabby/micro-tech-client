import React from 'react';
import { toast } from 'react-toastify';

const ManageProductRow = ({ product, index, refetch }) => {
    const { _id, img, name, price, availableQuantity, email } = product;

    const handleDelete = id => {
        fetch(`http://localhost:5000/manageproduct/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Product ${name} is Deleted`);
                    refetch();
                }
            })
        console.log(_id);
    }
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
            <td><button onClick={() => handleDelete(_id)} class="btn btn-xs">Remove Product</button></td>
        </tr>)

};

export default ManageProductRow;