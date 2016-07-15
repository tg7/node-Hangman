//will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.

var fs = require('fs');
var inquirer = require ('inquirer');

var words = require ('./game.js');

console.log(words);