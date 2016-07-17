//Create Constructor file containing letters

// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.
function Letters(word) {
  this.correct = [];
  this.incorrect = [];
};
  this.checkWord = function(letter) {
    if (this.answer === word) {
      this.correct.push(letter);
      console.log('Word: ' + this.correct.join(' '));
    } else 
      this.incorrect.push(letter);
      console.log('Word: ' + this.incorrect.join(' '));
  };
  this.guessed = function() {
    for (var i = 0; i < this.correct.length; i++) {
      if (this.correct[i] === '__') return true;
    } 
    return false;
  };

module.exports = Letters;
