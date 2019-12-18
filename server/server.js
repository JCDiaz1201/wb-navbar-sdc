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
app.get("/getproduct", (req, res) => {
  res.send(db.getProduct());
  res.end()
  // .then((msg) => {
  //   res.send(msg);
  //   res.end();
  // })
  // .catch(err => {
  //   res.end(err);
  // });
});

app.post("/postproduct", (req, res) => {
  res.send(db.postProduct());
    // .then((msg) => {
    //   res.send(msg);
    //   res.end();
    // })
    // .catch(err => {
    //   res.end(err);
    // });
});

app.put("/putproduct", (req, res) => {
  res.send(db.putProduct());
    // .then((msg) => {
    //   res.send(msg);
    //   res.end();
    // })
    // .catch(err => {
    //   res.end(err);
    // });
});

app.delete("/deleteproduct", (req, res) => {
  res.send(db.deleteProduct());
    // .then((msg) => {
    //   res.send(msg);
    //   res.end();
    // })
    // .catch(err => {
    //   res.end(err);
    // });
});

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});
