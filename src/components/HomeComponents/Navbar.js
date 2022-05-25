import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, NavLink } from 'react-router-dom';
import auth from '../../firebase_init';

const Navbar = () => {
    const [user] = useAuthState(auth);
    const logout = () => {
        signOut(auth);
        localStorage.removeItem("accessToken")
    };
    console.log(user);
    return (
        <div className="navbar bg-base-100 ">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content lg:hidden mt-6 my-6 pr-6 shadow bg-base-100 rounded-box w-52">
                        <li><NavLink className="rounded-lg" to="/">Home</NavLink></li>
                        <li><NavLink className="rounded-lg" to="/blog">Blogs</NavLink></li>
                        <li><NavLink className="rounded-lg" to="/myPortfolio">My Portfolio</NavLink></li>
                        {
                            user && <li><NavLink className="rounded-lg" to="/dashboard">Dashboard</NavLink></li>
                        }
                        {
                            user ? <button onClick={logout} className="btn btn-ghost mr-10">Sign Out</button> : <Link className="rounded-lg" to="/login">Login</Link>
                        }
                    </ul>

                </div>
                <a className="btn btn-ghost  text-xl ml-10">Micro-Tech</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  ">
                    <li><NavLink className="rounded-lg mx-4" to="/">Home</NavLink></li>
                    <li><NavLink className="rounded-lg" to="/blogs">Blogs</NavLink></li>
                    <li><NavLink className="rounded-lg" to="/myPortfolio">My Portfolio</NavLink></li>
                    {
                        user && <li><NavLink className="rounded-lg" to="/dashboard">Dashboard</NavLink></li>
                    }
                    <li>
                        {
                            user ? <button onClick={logout} className="btn btn-ghost  rounded-lg ">Sign Out</button> : <NavLink className="rounded-lg" to="/login">Login</NavLink>
                        }
                    </li>
                </ul>
                <div className="avatar online mr-12">
                    <div className="w-10 rounded-full ml-2 ">

                        {
                            user?.photoURL ? <img src={user?.photoURL} alt="img" /> : <img src="https://api.lorem.space/image/face?hash=92048" />
                        }
                    </div>
                </div>
            </div>
            <div className="navbar-end lg:hidden">
                <label htmlFor="dashboard-sidebar" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div>
        </div>
    );
};

export default Navbar;