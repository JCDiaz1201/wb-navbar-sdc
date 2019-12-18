// import mongo and postgres


let getProduct = () => {
    console.log("Get is working");
    return "Get is working"
    // Above is for testing purposes 

    // return new Promise((resolve, reject) => {
    //   connection.query(`SELECT * FROM productInfo.products`, (error, result) => {
    //     if (error) {
    //       reject(error);
    //     }
    //     resolve(result);
    //   });
    // });
  };
  
  let postProduct = () => {
    console.log("Post is working");
    return "Post is working"
    // Above is for testing purposes 

    // return new Promise((resolve, reject) => {
    //   connection.query(`SELECT * FROM productInfo.products`, (error, result) => {
    //     if (error) {
    //       reject(error);
    //     }
    //     resolve(result);
    //   });
    // });
  };

  let putProduct = () => {
    console.log("Put is working");
    return "Put is working"
    // Above is for testing purposes 

    // return new Promise((resolve, reject) => {
    //   connection.query(`SELECT * FROM productInfo.products`, (error, result) => {
    //     if (error) {
    //       reject(error);
    //     }
    //     resolve(result);
    //   });
    // });
  };

  let deleteProduct = () => {
    console.log("Delete is working");
    return "Delete is working"
    // Above is for testing purposes 

    // return new Promise((resolve, reject) => {
    //   connection.query(`SELECT * FROM productInfo.products`, (error, result) => {
    //     if (error) {
    //       reject(error);
    //     }
    //     resolve(result);
    //   });
    // });
  };
  
//   let seedDatabase = () => {
//     return new Promise((resolve, reject) => {
//       for (let product = 0; inventory.length > product; product++) {
//         let optionsArray = JSON.stringify(inventory[product].options);
  
//         let queryInsert = `INSERT INTO productInfo.products
//                   (id, productName, price, sku, model, onHand, options, auxCategory)
//                   VALUES ("${inventory[product].id}",
//                           "${inventory[product].name}",
//                           "${inventory[product].price}",
//                           "${inventory[product].sku}",
//                           "${inventory[product].model}",
//                           "${inventory[product].onHand}",
//                           '${optionsArray}',
//                           "${inventory[product].auxCategory}"
//                     )`;
  
//         connection.query(queryInsert, (error, result) => {
//           if (error) {
//             // console.log(error);
//             reject(error);
//           }
//           resolve(result);
//         });
//       }
//     });
//   };
  
  module.exports = {getProduct, postProduct, putProduct, deleteProduct}
