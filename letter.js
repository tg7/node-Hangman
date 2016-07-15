//Create Constructor file containing letters

function Letters(word) {
  this.boxes = [];
  this.incorrect = [];
  this.makeBoxes = function() {
    for (var i = 0; i < word.length; i++) {
      this.boxes.push('__');
    }
  }
};
  this.printToScreen = function() {
    console.log('Word: ' + this.boxes.join(' '));
    console.log('Word: ' + this.incorrect.join(' '));
  };
  this.wrong = function(letter) {
    this.incorrect.push(letter);

  };
  this.guessed = function() {
    for (var i = 0; i < this.boxes.length; i++) {
      if (this.boxes[i] === '__') return false;
    }
    return true;
  };

module.exports = Letters;



