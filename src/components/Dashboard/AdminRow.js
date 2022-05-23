import React from 'react';
import { toast } from 'react-toastify';

const AdminRow = ({ users, index, refetch }) => {
    const { email, role } = users
    const makeAdmin = () => {
        fetch(`https://gentle-ocean-30847.herokuapp.com/user/admin/${email}`, {
            method: "PUT",
            headers: {
                authorization: `Bearer ${localStorage.getItem("accessToken")}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error("Failed to make admin")
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch()
                    toast.success(`${email} is Successfully Made Admin`)
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{email}</td>
            <td>{!role ? <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button> : <p className='text-red-600 font-bold'> Admin</p>}</td>
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>)

};

export default AdminRow;