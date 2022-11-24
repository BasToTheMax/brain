const brain = require('brain.js');
const fs = require('fs');
const tokenizer = require('sbd');

const myArgs = process.argv.slice(2);
const lang = myArgs[0];
console.log('using ' + lang);
const text = myArgs.slice(1).join(' ');

var sentences = tokenizer.sentences(text, {});

var l = sentences.length;

var out;
out = '';


var json = fs.readFileSync(`./trained/${lang}.json`, 'utf-8');
json = JSON.parse(json);

const net = new brain.recurrent.LSTM();
net.fromJSON(json);

for (let i=0; i<l; i++) {
  var output = net.run( sentences[i] );
  
  out += `${output}\n`;
}

console.log(`Input: ${text}`);
console.log('\n-----------\n');
console.log(`Output: ${out}`);
