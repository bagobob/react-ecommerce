import React from 'react';
import { Link } from "react-router-dom";
import CartIcon from "../cart-icon/Cart-icon";
import './header.styles.scss';

function Header(props) {
    return (
        <nav className="navbar-menu container">
            <div className="logo">
                <Link to="/">NOMAD</Link>
            </div>
            <ul>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/shop">
                        Shop
                    </Link>
                </li>
            </ul>
            <CartIcon />
        </nav>
    );
}

export default Header;