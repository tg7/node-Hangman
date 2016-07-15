// List of words
var words = ['AUGUSTA', 'TRENTON', 'ALBANY', 'SACRAMENTO', 'DENVER', 'DOVER', 'ATLANTA'];

//randomly selects a word for the player
var answer = words[Math.floor(Math.random() * words.length)];

console.log('The Word Is: ' + answer);

//Exports words module
module.exports = words;