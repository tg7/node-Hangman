//Create Constructor file containing words

//Should contain all of the methods which will check the letters guessed versus the random word selected.

var CheckWord = function(check) {
  this.answer = check;
  this.boxes = [];
  this.makeBoxes = function() {
    for (var i = 0; i < this.answer.length; i++) {
    var matched = new Letter(this.answer[i]);
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

// Create Constructor File that uses a for loop to determine if letters match the guessed word

