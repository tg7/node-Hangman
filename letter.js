//Create Constructor file containing letters

var game = require ('./game.js');
//Should control whether or not a letter appears as a "_" or as itself on-screen.

var Letters = function(userGuess) {
  this.guess = userGuess;
  this.show = false;
  this.letterCheck = function() {
    if (letterCheck === this.show) {
      return "__";
    } else {
      return userGuess;
    }

  }
}

module.exports = Letters;
