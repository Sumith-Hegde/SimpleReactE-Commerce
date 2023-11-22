import React from 'react';
import './Header.css'
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container">
                    <div className="navbar-brand title"><Link className='nav-link' to="/">SuitCrafters</Link></div>
                    <div className="navbar-collapse">
                        <ul className="navbar-nav">
                            <li className="nav-item"><Link className='nav-link' to="/profile">Download App</Link></li>
                            <li className="nav-item"><Link className='nav-link' to="/profile">Become A Supplier</Link></li>
                            <li className="nav-item"><Link className='nav-link' to="/profile">News Room</Link></li>
                        </ul>
                        <ul className="navbar-nav">
                            <li><Link className='nav-link' to="/profile">Profile</Link></li>
                            <li><Link className='nav-link' to="/cart">Cart</Link></li>
                        </ul>
                    </div>
                    <div className="d-flex">
                        <form className="d-flex">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="navbar-collapse">
                    <ul className="navbar-nav">
                        <li><div className="nav-link">Men Ethnics</div></li>
                        <li><div className="nav-link">Men Western</div></li>
                        <li><div className="nav-link">Women Ethnics</div></li>
                        <li><div className="nav-link">Women Western</div></li>
                        <li><div className="nav-link">Kids</div></li>
                        <li><div className="nav-link">Jewellery and Accessories</div></li>
                        <li><div className="nav-link">Footwear</div></li>
                        <li><div className="nav-link">Electronics</div></li>
                        <li><div className="nav-link">Home and Kitchen</div></li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;
