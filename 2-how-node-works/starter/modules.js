// console.log(arguments);
// console.log(require('module').wrapper);

// module.exports
const C = require('./test-module-1');
const calc1 = new C();
console.log(calc1.multiply(2, 5));

// Exports
// const calc2 = require('./test-module-2');
const { add, multiply, divide } = require('./test-module-2');
console.log(add(2, 5));

// catching
require('./test-module-3')();
require('./test-module-3')();
require('./test-module-3')();