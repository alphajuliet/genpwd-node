// genpwd.js
// Main entry to genpwd

const R = require('ramda');

// Add generators
const gen = [];
gen.push(require('./generator_1'));
gen.push(require('./generator_2'));
gen.push(require('./generator_3'));
gen.push(require('./generator_4'));

// Application metadata
const Info = {
  name: "GenPwd",
  author: "AndrewJ",
  version: "3.0.0",
  date: "2018-09-22",
  info: "GenPwd is a simple password generator.",
  aboutText: function () {
    let str = this.name + " v" + this.version;
    str += ", last modified: " + this.date;
    str += " by: " + this.author + ".\n\n";
    str += this.info;
    return str;
  }
};

// Generate a list of random words from the chosen generator.
const generate = (genId = 0, nwords = 10, options = {}) => {
  return R.map(() => gen[genId].randomWord(options), 
               R.range(0, nwords));
};

exports.info = Info;
exports.numberOfGenerators = gen.length;
exports.generate = generate;

// The End
