const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const faker = require('faker');
const db = require('./db/db.js')
const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static('../serverTest'));

// Following four methods are CRUD operations

let selectedItemId = 99845;
let itemToInsert = {
  "productname": "Tianna Gregory",
  "price": "PRICELESS",
  "sku": "12-83940",
  "model": "Yes",
  "onhand": "1",
  "imageurl": "https://albina.com"
}

app.get("/getproduct", (req, res) => {
  db.getProduct(selectedItemId)
  .then((msg) => {
    res.send(msg);
    res.end();
  })
  .catch((err) => {
    res.end(err);
  });
});

app.post("/postproduct", (req, res) => {
  db.postProduct(itemToInsert)
  .then(() => {
    res.send("Posted");
    res.end();
  })
  .catch(err => {
    res.end(err);
  });
});

app.put("/putproduct", (req, res) => {
  db.putProduct()
  .then(() => {
    res.send("Updated");
    res.end();
  })
  .catch((err) => {
    res.end(err);
  });
});

app.delete("/deleteproduct", (req, res) => {
  db.deleteProduct()
  .then(() => {
    res.send("Deleted");
    res.end();
  })
  .catch((err) => {
    res.end(err);
  });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

