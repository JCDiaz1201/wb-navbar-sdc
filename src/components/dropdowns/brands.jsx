import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

import westBull from '../../assets/westBull.svg';
import rodeoWear from '../../assets/rodeoWear.svg';
import yeeHawGear from '../../assets/yeeHawGear.svg';
import prospectingPro from '../../assets/prospectingPro.svg';
import wildHorses from '../../assets/wildHorses.svg';



const getBrand = (title, image, href) => {
	return (
        <div className="col text-center">
            <img src={image} className="brands-image p-2" alt="Logo"/>
            <a href={href} className="brand-name">{title}</a>
        </div>
    )
};

class Brands extends Component {
    render() {
        return (
            <NavDropdown title="Brands" className="menu-dropdown">
                <div className="dropdown m-4 navbar-dropdown-menu" id="dropdown">
                    <div className="dropdown-col-header mb-2">Brand Shops</div>
                    <div className="row">
                        {getBrand('West Bull', westBull, '/west-bull')}
                        {getBrand('Rodeo Wear', rodeoWear, '/rodeo-wear')}
                        {getBrand('Yee-Haw Gear', yeeHawGear, '/yee-haw-gear')}
                        {getBrand('Prospecting Pro', prospectingPro, '/prospecting-pro')}
                        {getBrand('Wild Horses', wildHorses, '/wild-horses')}
                    </div>
                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Brands;