// genpwd.js
// Main entry to genpwd

const R = require('ramda');

const gen = [];
gen[1] = require('./generator_1');
gen[2] = require('./generator_2');
gen[3] = require('./generator_3');
gen[4] = require('./generator_4');

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

// Main function to generate a list of random words, based on the chosen generator.
const generate = (gen, nwords = 10) => {
  return R.map(gen.randomWord, R.range(0, nwords));
};

exports.generators = gen;
exports.generate = generate;

// The End
