const fs = require('fs');
const path = require('path')
const faker = require('faker');
const { exec } = require('child_process');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

const { Pool, Client} = require('pg');
const pgConfig = require('./db.config');

let makeFakeData = () => {
    let count = 1250000;
    let dummyObj;
    let data = [];

    for (let a = 0; a < count; a++){
      dummyObj = {};
    //   dummyObj.id = a; // no id necessary
      dummyObj.productName = faker.commerce.productName();
      dummyObj.price = faker.commerce.price();
      dummyObj.sku = faker.internet.ip();
      dummyObj.model = faker.lorem.word();
      dummyObj.onHand = faker.finance.amount();
      dummyObj.imageUrl = faker.internet.url();

      data.push(dummyObj);
    }
    return data;
}

let convertToCSV = (data, count) => {
    const csvWriter = createCsvWriter({
        path: `/Users/jdiaz/WorkSpace/hackReactor/SDC/\
                Navbar-master/server/db/csv/test${count}.csv`,
        header: [
                // {id:'id', title:'id'},
                {id:'productName', title:'productName'},
                {id:'price', title:'price'},
                {id:'sku', title:'sku'},
                {id:'model', title:'model'},
                {id:'onHand', title:'onHand'},
                {id:'imageUrl', title:'imageUrl'}
            ]
    });
    const records = data;

    csvWriter.writeRecords(records)
    .then(() => {
        console.log('...Done');
    });
}

let bulkSeedDb = () => {
  for (let a = 0; a < 8; a++) {
    setTimeout(() => { 

      // Connecting and seeding postgres DB

      let command = `psql \
      -d west_buy_2 \
      --user=jdiaz \
      -c "COPY westbuy (productName,price,sku,model,onHand,imageUrl) \
      FROM '/Users/jdiaz/WorkSpace/hackReactor/SDC/Navbar-master/server/db/csv/test${a}.csv' \
      WITH (FORMAT csv);"` 


      exec(command, function(error, stdout, stderr) {
        // do whatever you need during the callback
        if (error) {
          console.error(`exec error: ${error}`);
          return;
        }
        console.log(`stdout: ${stdout}`);
        console.error(`stderr: ${stderr}`);
      });

      // Connecting and seeding to mongo DB

      // let command = `/data/mongodb-macos-x86_64-4.2.2/bin/mongoimport --host=127.0.0.1 -d westbuy -c products --type csv --file /Users/jdiaz/WorkSpace/hackReactor/SDC/Navbar-master/server/db/csv/test${a}.csv --headerline`
      // exec(command, function(error, stdout, stderr) {
      //   // do whatever you need during the callback
      //   if (error) {
      //     console.error(`exec error: ${error}`);
      //     return;
      //   }
      //   console.log(`stdout: ${stdout}`);
      //   console.error(`stderr: ${stderr}`);
      // });
    }, 30000);
  }
}

let outputDataToCSV = () => {
  const testPath = './Users/jdiaz/workspace/hackReactor/SDC/Navbar-master/server/db/csv/test0.csv';

  try {
    if (fs.existsSync(testPath)) {
      console.log("File already exits, will attempt to seed DB now....")
    } else {
      let dataSet = makeFakeData();
      for (let a = 0; a < 8; a++) {
        setTimeout(() => { convertToCSV(dataSet, a); }, 30000 * a);
      }
    }
  } catch(err) {
    console.error(err);
  }

  setTimeout(() => { bulkSeedDb(); }, 252000);
}
  
outputDataToCSV();


