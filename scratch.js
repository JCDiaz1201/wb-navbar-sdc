// Built into node, no download required
// const url = require('url');

/* Reads current pages URL and gets product id */
const getProductID = () => {
    // Testing by uncommenting line below
    let productUrl = 'https://westbuy.org/products/12';

    // Fetch browsers url within react with line below
    // let productUrl = window.location.href;
    let { pathname } = new URL(productUrl);
    return pathname.split('/')[2];
};

let productId = getProductID();
console.log(productId);
// console.log('ran');

// const url = require('url');
//
// let t = 'http://westbuy.org/products/54/';