// import mongo and postgres
const { Client } = require('pg');
const pgConfig  = require("./db.config");
const {MongoClient, ObjectId} = require('mongodb');
const assert = require('assert');

//below is for a postgres connection
const connection = new Client(pgConfig);
connection.connect();

let getProduct = (itemToReturn) => {
    // Above is for testing purposes 

    // below is for postgres
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM westbuy WHERE id=${itemToReturn}`, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result.rows);
      });
    });

    // below is for mongoDb
    // return new Promise((resolve, reject) => {
    //   const url = 'mongodb://localhost:27017'
    //   MongoClient.connect(url, (err, client) => {
    //     // assert.equal(null, err);
    //     if (err) throw err;
    //     const db = client.db('westbuy');
    //     const queriedItem = db.collection('products').find({"productName":"Licensed Cotton Mouse"});

    //     iterateFunc = (doc) => {
    //       resolve(JSON.stringify(doc, null, 4));
    //     }

    //     errorFunc = (error) => {
    //       reject(error)
    //     }

    //     queriedItem.forEach(iterateFunc, errorFunc);
    //     client.close();
    //   });
    // })
  };
  
  let postProduct = (product) => {
    // below is for postgres
    return new Promise((resolve, reject) => {

      let insertProductQuery = `INSERT INTO westbuy (productname, price, sku, model, onHand, imageurl)
       VALUES ('${product.productname}','${product.price}','${product.sku}',
       '${product.model}','${product.onHand}','${product.imageurl}')
       `

      connection.query(insertProductQuery, (error, result) => {
        if (error) {SA
          reject(error);
        }
        resolve(result);
      });
    });

    // below is for mongoDb
  };

  let putProduct = () => {
    // below is for postgres
    let newModel = "No"
    let productName = "Tianna Gregory";
    return new Promise((resolve, reject) => {
      let insertProductQuery = `UPDATE westbuy SET model= '${newModel}' WHERE productName='${productName}'`

      connection.query(insertProductQuery, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });

    // below is for mongoDb
  };

  let deleteProduct = () => {
    // below is for postgres
    return new Promise((resolve, reject) => {
      let name = "Tianna Gregory";
      let deleteProductQuery = `DELETE FROM westbuy WHERE productName='${name}'`

      connection.query(deleteProductQuery, (error, result) => {
        if (error) {
          reject(error);
        }
        resolve(result);
      });
    });

    // below is for mongoDb
  };
  
  // let seedDatabase = () => {
  //   return new Promise((resolve, reject) => {
  //     for (let product = 0; inventory.length > product; product++) {
  //       let optionsArray = JSON.stringify(inventory[product].options);
  
  //       let queryInsert = `INSERT INTO productInfo.products
  //                 (id, productName, price, sku, model, onHand, options, auxCategory)
  //                 VALUES ("${inventory[product].id}",
  //                         "${inventory[product].name}",
  //                         "${inventory[product].price}",
  //                         "${inventory[product].sku}",
  //                         "${inventory[product].model}",
  //                         "${inventory[product].onHand}",
  //                         '${optionsArray}',
  //                         "${inventory[product].auxCategory}"
  //                   )`;
  
  //       connection.query(queryInsert, (error, result) => {
  //         if (error) {
  //           // console.log(error);
  //           reject(error);
  //         }
  //         resolve(result);
  //       });
  //     }
  //   });
  // };
  
  module.exports = {getProduct, postProduct, putProduct, deleteProduct}
