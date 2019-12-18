import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

import Products from "./dropdowns/products";
import Brands from "./dropdowns/brands";
import Deals from "./dropdowns/deals";
import Services from "./dropdowns/services";
import Account from "./dropdowns/account";
import ShoppingHistory from "./dropdowns/shoppingHistory";
import OrderStatus from "./dropdowns/orderStatus";


const Menu = () => {
    // TODO: Add content to drop down items

    return (
        <Navbar id="menu-container" className="mt-1">
            <Nav className="mr-auto leftMenu">
                <Products/>
                <Brands/>
                <Deals/>
                <Services/>
            </Nav>

            <Nav className="ml-auto rightMenu">
                <Account/>
                <ShoppingHistory/>
                <OrderStatus/>
                <Nav.Link href="/saved-items">Saved Items</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default Menu;
