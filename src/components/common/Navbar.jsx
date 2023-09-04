import React from 'react';
import { Link } from 'react-router-dom';
//import "./Navbar.css"

const Navbar = () => {
    return (
        <div className="nav-box">
          <header>
            <ul className="nav-bar">
              <li className="site-title">
                <Link to="/"><h1>YouTube</h1></Link>
              </li>
              <li className="list-item">
                <Link to="/">Home</Link>
              </li>
              <li className="list-item">
                <Link to="/About">About</Link>
              </li>
            </ul>
          </header>
        </div>
      );
}
    

export default Navbar;
