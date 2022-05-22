import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
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
                        <li><NavLink className="rounded-lg" to="/login">Login</NavLink></li>

                    </ul>

                </div>
                <a className="btn btn-ghost  text-xl ml-10">Doctors Portal</a>
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal  ">
                    <li><NavLink className="rounded-lg" to="/">Home</NavLink></li>
                    <li><NavLink className="rounded-lg" to="/blog">Blogs</NavLink></li>
                    <li><NavLink className="rounded-lg" to="/login">Login</NavLink></li>
                </ul>
                <div className="avatar online mr-12">
                    <div className="w-10 rounded-full ">


                    </div>
                </div>
            </div>
            {/* <div className="navbar-end lg:hidden">
                <label htmlFor="my-drawer-2" tabIndex="1" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>

            </div> */}
        </div>
    );
};

export default Navbar;