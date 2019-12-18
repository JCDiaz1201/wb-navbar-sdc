import React from 'react';

import shipping from '../../assets/shipping.svg';
import fastPickup from '../../assets/fastPickup.svg';
import priceMatch from '../../assets/priceMatch.svg';

const Footer = () => {
    return (
        <div className="dropdown-footer p-2">
            <div className="row">

                <div className="col text-center">
                    <img
                        className="m-2"
                        height="27px"
                        src={shipping}
                        alt=""
                    />
                    <a href="/price-match" className="footer-link">Free shipping on everything</a>
                </div>

                <div className="col text-center middle-footer">
                    <img
                        className="m-2"
                        height="27px"
                        src={fastPickup}
                        alt=""
                    />
                    <a href="/price-match" className="footer-link">Fast store pickup</a>
                </div>

                <div className="col text-center">
                    <img
                        className="m-2"
                        height="27px"
                        src={priceMatch}
                        alt=""
                    />
                    <a href="/price-match" className="footer-link">Price Match Gaurantee</a>
                </div>
            </div>
        </div>

    );
};

export default Footer;