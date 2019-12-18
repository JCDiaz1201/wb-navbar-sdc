import React, { Component } from 'react';
import { Nav, NavDropdown } from 'react-bootstrap';

import account from '../../assets/account.svg';
import cart from "../../assets/cart.svg";

class Account extends Component {

    render() {
        return (
            <React.Fragment>
                <img
                    className="ml-2"
                    height="30px"
                    src={account}
                    alt=""
                />
                <NavDropdown title="Account" className="menu-dropdown">
                    <div className="dropdown navbar-dropdown-menu" id="dropdown-account">
                        <div className="row m-2" id="account-row">
                            <div className="col-2">1</div>
                            <div className="col-5">2</div>
                            <div className="col-5">3</div>
                        </div>
                    </div>

                </NavDropdown>
            </React.Fragment>
        );
    }
}


export default Account;
