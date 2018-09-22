// genpwd.js

const R = require('ramda');
const gen = require('./generators');

// Application metadata
const Info = {
  name: "GenPwd",
  author: "AndrewJ",
  version: "2.30",
  date: "2018-03-21",
  info: "GenPwd is a simple password generator.",
  appendTo: function (tagName) {
    let str = "<div>";
    str += "<span class='title'>" + this.name + "</span>";
    str += "&nbsp;<span class='description'>v" + this.version + "</span>";
    str += "</div>";
    $(tagName).append(str);
  },
  aboutText: function () {
    let str = this.name + " v" + this.version;
    str += ", last modified: " + this.date;
    str += " by: " + this.author + ".\n\n";
    str += this.info;
    return str;
  }
};

// Main function to generate a list of random words, based on the chosen generator.
const generate = (nwords = 10) => {
  const g = gen.generator4;
  let output = [];

  return R.map(g.randomWord, R.range(0, nwords));

};

exports.generate = generate;

// The End
