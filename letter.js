// This constructor file controls whether or not a letter appears as a "_" or as itself on-screen or in the word

function Letters(word) {
  this.letter = word;
  this.show = false;
  this.analyzeWord = function() {
    if (this.show === false) {
      return " __ "

      } else {
        return this.letter;
    }
  }
};

//Exports letters module
module.exports = Letters;