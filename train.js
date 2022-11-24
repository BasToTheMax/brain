const brain = require('brain.js');
const fs = require('fs');

const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);

if (!myArgs[0]) {
  console.log('no lang given');
  process.exit();
}

switch (myArgs[0]) {
  case "nl-en":
    break;
  default:
     console.log('invalid lang given');
    process.exit();
}

// create configuration for training
const config = {
  iterations: 15000,
  log: true,
  logPeriod: 1,
  layers: [10],
};

// create data which will be used for training
const data = require(`./data/${lang}.js`);

const network = new brain.recurrent.LSTM();
network.train(data, config);

const json = network.toJSON();
console.log(typeof json);
fs.writeFileSync('train.json', String(json));
