//Create Constructor file containing words

var game = require('./letter.js');
var game = require ('./game');

//Should contain all of the methods which will check the letters guessed versus the random word selected.

var CheckWord = function(check) {
  this.word = check.word;
  this.boxes = [];
  this.matchedLetters = function() {
    for (var i = 0; i < this.word.length; i++) {
      var matched = new Letter(this.word[i]);
    }
  }
  this.makeBoxes = function() {
    for (var i = 0; i < answer.length; i++) {
    boxes.push(' ___ ');
    } 
  }
  this.ifLetterFound = function() {
    //Add function to see if letter found matches the userguess
    //Includes false/hidden etc.
  }
  this.isWordComplete = function() {
    // Add code to show that word was completed

  }
  this.isFinalWord = function() {
    // Add code to show final word if all parameters align with one another
  }
};

module.exports = CheckWord;


