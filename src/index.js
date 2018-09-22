// index.js

const g = require('./genpwd');

options = {
  punctuation: false,
  numbers: false,
  capitals: false
}
const words = g.generate(genId = 3, nwords = 10, options = options);

console.log(words);

// The End
