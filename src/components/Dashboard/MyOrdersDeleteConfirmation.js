import React from 'react';
import { toast } from 'react-toastify';

const MyOrdersDeleteConfirmation = ({ removeOrders, setRemoveOrders, refetch }) => {
    const { _id } = removeOrders;
    const handleDelete = id => {
        fetch(`http://localhost:5000/order/${id}`, {
            method: "DELETE",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success(`Order is Deleted`);
                    refetch();
                    setRemoveOrders(null)
                }
            })

    }
    return (
        <div>
            {/* <!-- Put this part before </body> tag-- > */}
            <input type="checkbox" id="order-cencel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure to cencel your Order?</h3>
                    {/* <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p> */}
                    <div class="modal-action">
                        <button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error">Cencel Order</button>
                        <label for="order-cencel-modal" class="btn btn-xs">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyOrdersDeleteConfirmation;