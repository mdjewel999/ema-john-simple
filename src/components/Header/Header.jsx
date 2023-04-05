import React from 'react';
import './Header.css';
import logo from '../../images/Logo.svg'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='Header'>
           <img src={logo} alt="" srcset="" />
           <div>
                <Link to="/">Shop</Link>
                <Link to="/Orders">Orders</Link>
                <Link to="/Order_review">Review</Link>
                <Link to="/Manage_Inventory">Manage Inventory</Link>
                <Link to="/Login">Login</Link>
           </div>
        </nav>
    );
};

export default Header;