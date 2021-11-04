const fs = require('fs');

//Reading and writing files
const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);
