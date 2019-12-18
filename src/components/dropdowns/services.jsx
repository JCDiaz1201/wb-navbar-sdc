import React, { Component } from 'react';
import {NavDropdown} from 'react-bootstrap';
import Footer from './footer';

const getLink = (title, href) => {
    return <div className="row mt-3"><a href={href} className="link">{title}</a></div>;
};

class Services extends Component {

    render() {
        return (
            <NavDropdown title="Services" className="menu-dropdown">
                <div className="dropdown m-4 navbar-dropdown-menu" id="dropdown-services">
                    <div className="row">
                        <div className="col-8" id="left-container">
                            <div className="row mb-2">
                                <div className="col-3  mr-3 title">Get Support</div>
                                <div className="col-7 title">Learn About Installation, Setup & Repair</div>
                            </div>
                            <div className="row">
                                <div className="col ml-3">
                                    {getLink('Chat with a western agent', '/href')}
                                    {getLink('Schedule a Service', '/href')}
                                    {getLink('Check Repair Statis', '/href')}
                                </div>
                                <div className="col">
                                    {getLink('Cowboy Certified Repair', '/href')}
                                    {getLink('Appliance Services', '/href')}
                                    {getLink('Cattle Services', '/href')}
                                </div>
                                <div className="col">
                                    {getLink('Home Services', '/href')}
                                    {getLink('Banking Services', '/href')}
                                    {getLink('See All Services', '/href')}
                                </div>
                            </div>
                        </div>
                        <div className="col-3 pl-5">
                            <div className="row title">Protection & Support Plans</div>
                            {getLink('Total Western Support', '/href')}
                            {getLink('24/7 Membership Plans', '/href')}

                            <div className="row title mt-3">Additional Services</div>
                            {getLink('Trade In Your Cattle', '/href')}
                            {getLink('Haul Away', '/href')}
                        </div>

                    </div>
                </div>

                <Footer/>
            </NavDropdown>
        );
    }
}


export default Services;