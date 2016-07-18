//Create Constructor file containing words

//Should contain all of the methods which will check the letters guessed versus the random word selected.

// Create Constructor File that uses a for loop to determine if letters match the guessed word


var letter = require ('./letter');

var CheckWord = function(check) {
  this.answer = check;
  this.boxes = []; // Where the guessed letters are stored
  this.found = false;
  this.makeBoxes = function() { 
    for (var i = 0; i < this.answer.length; i++) {
    var userGuess = this.word.charAt(i);
    var matched = new letter(userGuess);
    this.boxes.push(matched);
    } 
  }

  this.ifLetterFound = function(guessedLetter) {
    var response = 0;
    for (var i = 0; i < this.boxes.length; i++) {
      if(this.boxes[i].letter === guessedLetter) {
        this.boxes[i].show = true;
        response++;
      }
    }
    return response;
  }

  this.isWordComplete = function() {
   if (this.boxes.every(function(final){
    return final.show === true; }) === true) {
    return true;
   }
  }
  this.isFinalWord = function() {
    var complete = '';
    for (var i = 0; i < this.boxes.length; i++) {
      complete = complete + this.boxes[i].analyzeWord(this.boxes[i]);
    }
    return complete;
  }
};

module.exports = CheckWord;

