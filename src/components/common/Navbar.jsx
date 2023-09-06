import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="Navbar">
            <h1>Tou<span>Yoube</span></h1>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About Us</Link>
                </li>
            </ul>
        </div>
      );
}
    

export default Navbar;
