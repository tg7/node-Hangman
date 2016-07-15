//Create Constructor file containing words

//Should contain all of the methods which will check the letters guessed versus the random word selected.

var CheckWord = function(check) {
  this.word = check.word;
  if (this.word === false) {
    this.word = hide;
  } else {
      this.word = show;
  }
};


//Includes false/hideden etc.