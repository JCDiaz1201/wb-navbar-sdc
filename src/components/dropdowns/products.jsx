import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';
import Footer from './footer';
import Category from "./Category";

import prospecting from '../../assets/prospecting.svg';
import homeDecor from '../../assets/homeDecor.svg';
import guns from '../../assets/guns.svg';
import westernWear from '../../assets/westernWear.svg';
import cabins from '../../assets/cabins.svg';
import horses from '../../assets/horses.svg';
import cattle from '../../assets/cattle.svg';
import farmSupplies from '../../assets/farmSupplies.svg';
import hats from '../../assets/hats.svg';

const featured = (title, href) => {
    return <a className="row dropdown-item-primary mt-2" href={ href }>{ title }</a>
};

class Products extends Component {
    render() {
        return (
            <NavDropdown title="Products" className="menu-dropdown">
                <div className="dropdown m-4 navbar-dropdown-menu" id="dropdown-products">
                    <div className="row">
                        <div className="col-2 ml-4" id="products-featured-col">
                            <div className="row dropdown-col-header">Featured</div>
                            { featured('Yee-Haw Monday', '/yee-haw-monday') }
                            { featured('Western Deals', '/western-deals') }
                            { featured('Gift Ideas', '/gift-ideas') }
                            { featured('Western Favorites', '/western-favorites') }
                        </div>
                        <div className="col ml-4">
                            <div className="row dropdown-col-header">All Categories</div>
                            {Category('Cabins', cabins, '/cabins')}
                            {Category('Prospecting', prospecting, '/prospecting')}
                            {Category('Home Decor', homeDecor, '/home-decor')}

                        </div>
                        <div className="col">
                            <div className="row"><br/> </div>
                            { Category('Western Wear', westernWear, '/western-wear') }
                            { Category('Horses', horses, '/horses') }
                            { Category('Guns', guns, '/guns') }
                        </div>
                        <div className="col">
                            <div className="row"><br/> </div>
                            { Category('Cattle', cattle, '/cattle') }
                            { Category('Farm Supplies', farmSupplies, '/farm-supplies') }
                            { Category('Hats', hats, '/hats') }
                        </div>

                    </div>
                    {/*<Footer/>*/}
                </div>
                <Footer/>
            </NavDropdown>
        );
    }
}

export default Products;