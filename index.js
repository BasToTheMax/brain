const brain = require('brain.js');
const fs = require('fs');
const tokenizer = require('sbd');

const json = fs.readFileSync('train.json', 'utf-8');

const net = new brain.recurrent.LSTM();
net.fromJSON(json);


const myArgs = process.argv.slice(2);
console.log('myArgs: ', myArgs);
const text = myArgs.join(' ');

var sentences = tokenizer.sentences(text, {});

var l = sentences.length;

var out;
out = '';

for (let i=0; i<l; i++) {
  var output = net.run( sentences[i] );
  
  out += `${output}\n`;
}

console.log(`Input: ${text}`);
console.log('\n-----------\n');
console.log(`Output: ${out}`);
