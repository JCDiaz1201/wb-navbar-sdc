import React from "react";
import {Navbar} from 'react-bootstrap';

import logo from '../assets/logo.svg';

const Logo = () => {
    return (
        <div id="logo-container">
            <Navbar.Brand href="/" id="logo" className="ml-4 mt-4">
                <span style={{display: 'block'}} className="navbar-logo">WEST</span>
                <span  className="navbar-logo sub">BUY</span>
                <img
                    alt=""
                    height="80"
                    src={logo}
                />
            </Navbar.Brand>
        </div>

    )
};

export default Logo;
