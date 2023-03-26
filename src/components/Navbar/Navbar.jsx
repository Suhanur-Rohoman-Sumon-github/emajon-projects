import React from 'react';
import logo from '../../assets/Logo.svg'

const Navbar = () => {
    return (
        <div className="navbar bg-info px-4 w-11/12 mx-auto mt-4">
            <div className="flex-1">
                <a className=""><img src={logo} alt="" /></a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-4">
                    <li><a className='text-base-100'>Order</a></li>
                    <li><a className='text-base-100'>Order Review</a></li>
                    <li><a className='text-base-100'>Manage Inventory</a></li>
                    <li><a className='text-base-100'>Login</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;