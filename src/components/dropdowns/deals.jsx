import React, { Component } from 'react';
import { NavDropdown } from 'react-bootstrap';

import Category from "./category";
import Footer from './footer';
import westernWear from "../../assets/westernWear.svg";
import horses from "../../assets/horses.svg";
import guns from "../../assets/guns.svg";
import cattle from "../../assets/cattle.svg";
import farmSupplies from "../../assets/farmSupplies.svg";
import hats from "../../assets/hats.svg";
import cactus from "../../assets/cactus.svg";
import rockSolidDeals from "../../assets/rockSolidDeals.svg";
import luckyDeals from "../../assets/luckyDeals.svg";
import explosiveDeals from "../../assets/explosiveDeals.svg";
import smokinDeals from "../../assets/smokinDeals.svg";
import litDeals from "../../assets/litDeals.svg";
import premiumDeals from "../../assets/premiumDeals.svg";
import cabins from "../../assets/cabins.svg";
import prospecting from "../../assets/prospecting.svg";
import homeDecor from "../../assets/homeDecor.svg";


const getDeal = (title, image, href, details) => {
    return (
        <a href={ href } className="m-4">
            <img src={ image } className="deals-image row" alt="Logo"/>
            <div className="deals-title row">{ title }</div>
            <div className="deals-details row">{ details }</div>
        </a>
    )
};


class Deals extends Component {

    render() {
        return (
            <NavDropdown title="Deals" className="menu-dropdown">
                <div className="dropdown m-4 navbar-dropdown-menu" id="dropdown-deals">
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                { getDeal('Explosive Deals', explosiveDeals, '/cactus', 'cactus') }
                            </div>
                            <div className="row">
                                { getDeal('Rock Solid Deals', rockSolidDeals, '/deal1', 'details') }
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                { getDeal('Lucky Deals', luckyDeals, '/deal1', 'details') }
                            </div>
                            <div className="row">
                                { getDeal('Smokin\' Deals', smokinDeals, '/deal1', 'details') }
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                { getDeal('Lit Deals', litDeals, '/deal1', 'details') }
                            </div>
                            <div className="row">
                                { getDeal('Premium Deals', premiumDeals, '/deal1', 'details') }
                            </div>
                        </div>
                        <div className="col">
                            <div className="row dropdown-col-header">Deals By Category</div>
                            { Category('Western Wear', westernWear, '/western-wear') }
                            { Category('Horses', horses, '/horses') }
                            { Category('Guns', guns, '/guns') }
                            { Category('Prospecting', prospecting, '/prospecting') }
                            { Category('Home Decor', homeDecor, '/home-decor') }
                        </div>
                        <div className="col">
                            <div className="row"><br/></div>
                            { Category('Cattle', cattle, '/cattle') }
                            { Category('Farm Supplies', farmSupplies, '/farm-supplies') }
                            { Category('Hats', hats, '/hats') }
                            { Category('Cabins', cabins, '/cabins') }
                        </div>
                    </div>
                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Deals;