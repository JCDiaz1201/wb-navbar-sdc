import React, { Component } from "react";
import { Navbar, Nav, Form } from 'react-bootstrap';

import store from '../assets/store.svg';
import cart from '../assets/cart.svg';


import SearchBar from "./dropdowns/searchBar";

class NavBar extends Component {
    render() {
        return (
            <Navbar id="navbar">
                <SearchBar/>

                <Nav className="ml-auto">
                    <img
                        height="40px"
                        src={ store }
                        alt=""
                    />

                    <Nav.Link
                        href="/localstore"
                        style={ { fontWeight: 'bold' } }
                    >
                        Austin, TX
                    </Nav.Link>

                    <Nav.Link
                        href="/localstore"
                        className="navbar-localstore"
                        style={ { fontStyle: 'italic', fontSize: '13px' } }
                    >
                        Open till 9 pm
                    </Nav.Link>

                    <img
                        className="ml-2"
                        height="40px"
                        src={ cart }
                        alt=""
                    />
                    <Nav.Link href="/cart">Wagon</Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default NavBar;
// --------------------------------------------------------------------------------------------------

// class NavBar extends Component {
//     constructor(props) {
//         super(props);
//
//         this.state = {
//             searchActive: true
//         };
//     }
//
//     // Event listeners for clicks outside of search input
//     componentWillMount() {
//         document.addEventListener('mousedown', this.handleClick, false);
//     }
//
//     componentWillUnmount() {
//         document.removeEventListener('mousedown', this.handleClick, false);
//     }
//
//     handleClick = (e) => {
//         // Handles clicks outside of search box
//         if (!this.state.searchActive) {
//             return;
//         }
//
//         if (!this.node.contains(e.target)) {
//             this.setState({ searchActive: false })
//         }
//     };
//
//
//     onSearchChange(event) {
//         this.props.getProducts(event.target.value)
//             .then(result => {
//                 console.log(`FILE: App.js () | : \n`, result);
//             })
//             .catch(error => {
//                 console.log(`FILE: App.js () | ERROR: \n`, error);
//             })
//     }
//
//
//     renderSearchList() {
//         return (
//             <div
//                 id="search-list-container"
//                 ref={ node => this.node = node }>
//                 here
//             </div>
//         )
//     }
//
//     render() {
//         return (
//             <Navbar id="navbar">
//                 <Form inline>
//                     <div className="col">
//                         {/* Search bar */ }
//                         <Form.Control
//                             id="searchBar"
//                             onClick={ () => {
//                                 this.setState({ searchActive: true })
//                             } }
//                             onChange={ this.onSearchChange.bind(this) }
//                             type="text"
//                             placeholder="Search West Buy"
//                         />
//
//                         { ( this.state.searchActive ) ? this.renderSearchList() : '' }
//                     </div>
//
//                 </Form>
//                 <Nav className="ml-auto">
//                     <img
//                         height="40px"
//                         src={ store }
//                         alt=""
//                     />
//
//                     {/* TODO: Add local store functionality */ }
//                     <Nav.Link href="/localstore" style={ { fontWeight: 'bold' } }>Austin, TX</Nav.Link>
//                     <Nav.Link
//                         href="/localstore"
//                         className="navbar-localstore"
//                         style={ { fontStyle: 'italic', fontSize: '13px' } }
//                     >
//                         Open till 9 pm
//                     </Nav.Link>
//
//                     <img
//                         className="ml-2"
//                         height="40px"
//                         src={ cart }
//                         alt=""
//                     />
//                     <Nav.Link href="/cart">Cart</Nav.Link>
//                 </Nav>
//             </Navbar>
//         );
//     }
// }
//
// export default NavBar;
