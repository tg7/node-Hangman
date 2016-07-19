// Contains all of the methods which will check the letters guessed versus the random word selected.

var letter = require ('./letter');

var CheckWord = function(check) {
  this.answer = check;
  this.boxes = []; // Where the guessed letters are stored
  this.found = false;
  this.toBoxes = function() { 
    for (var i = 0; i < this.answer.length; i++) {
    var character = this.word[i];
    var matched = new letter(character);
    this.boxes.push(matched);
    } 
  }

  this.ifLetterFound = function(guessedLetter) {
    for (var i = 0; i < this.boxes.length; i++) {
      if(this.boxes[i].letter === guessedLetter) {
        this.boxes[i].show = true;
      }
    }
  }

  this.isWordComplete = function() {
   if (this.boxes.every(function(final){
    return final.show === true; })) {
    return true;
   }
  }
  this.isFinalWord = function() {
    var complete = '';
    for (var i = 0; i < this.boxes.length; i++) {
      complete = complete + this.boxes[i].analyzeWord(this.boxes[i]);
    }
    return complete[i];
  }
};

module.exports = CheckWord;

