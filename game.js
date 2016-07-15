// List of words
var words = ['augusta', 'trenton', 'albany', 'sacramento', 'denver', 'dover', 'atlanta'];

//randomly selects a word for the player
var answer = words[Math.floor(Math.random() * words.length)];

console.log(answer);

//Exports words module
module.exports = words;