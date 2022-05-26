import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AdminRow from './AdminRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://gentle-ocean-30847.herokuapp.com/user', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem("accessToken")}`
        }
    }).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='pt-4'>
            <div class="overflow-auto">
                <table class="table w-full">
                    {/* <!-- head --> */}
                    <thead>
                        <tr>
                            <th>SI</th>
                            <th>Email</th>
                            <th>Make Admin</th>
                            <th>Remove User</th>

                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((users, index) => <AdminRow
                                key={users._id}
                                users={users}
                                index={index}
                                refetch={refetch}
                            ></AdminRow>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MakeAdmin;