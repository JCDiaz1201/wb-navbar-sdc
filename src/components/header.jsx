import React from "react";
import {Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar className="ml-auto" id="header">
            <Nav>
                <Nav.Link href="/topdeals">Top Deals</Nav.Link>
                <Nav.Link href="/dealoftheday">Deal of the Day</Nav.Link>
                <Nav.Link href="/creditcards">Credit Cards</Nav.Link>
                <Nav.Link href="/foryourbusiness">For Your Business</Nav.Link>
                <Nav.Link href="/giftcards">Gift Cards</Nav.Link>
                <Nav.Link href="/giftideas">Gift Ideas</Nav.Link>
            </Nav>
        </Navbar>
    )
};

export default Header;
