// index.js

let g = require('./genpwd');

let gens = g.generators;
let words = g.generate(gens[2], nwords = 10);
console.log(words);

// The End
