import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmation = ({ removeProduct, refetch, setRemoveProduct }) => {
    const { _id, name } = removeProduct;

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
                    setRemoveProduct(null)
                }
            })

    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to Delete?</h3>
                    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Remove Product</button>
                        <label for="delete-confirm-modal" class="btn btn-xs">Cencel!</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;