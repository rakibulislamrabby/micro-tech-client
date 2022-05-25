import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../firebase_init';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content text-center ">
                {/* <!-- Page content here --> */}
                <h2 className='text-4xl text-primary font-bold '>DashBoard</h2>
                <Outlet></Outlet>
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-44  bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}
                    {
                        admin || <>
                            <li className='my-2'><Link to="/dashboard">My orders</Link></li>
                            <li><Link to="/dashboard/addReview">Add Review</Link></li>
                        </>
                    }
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    {admin && <>
                        <li><Link to="/dashboard/addProduct">Add a Product</Link></li>
                        <li><Link to="/dashboard/manageProduct">Manage Products</Link></li>
                        <li><Link to="/dashboard/manageOrder">Manage All Orders</Link></li>
                        <li><Link to="/dashboard/makeAdmin">Make Admin</Link></li>
                    </>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;