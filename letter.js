// This constructor file controls whether or not a letter appears as a "_" or as itself on-screen or in the word

function Letters(word) {
  this.letter = word;
  this.show = false;
  this.analyzeWord = function() {
    if (this.show === false) {
      return " __ "

    } else if (this.letter === " ") {
        return " ";

      } else {
        return this.letter;
    }
  }
};

module.exports = Letters;