const brain = require('brain.js');
const fs = require('fs');

const json = fs.readFileSync('train.json', 'utf-8');

const net = new brain.recurrent.LSTM();
net.fromJSON(json);



const test = 'Will you be my friend?';
const output = net.run(test);
console.log(`Tense: ${output}`);
