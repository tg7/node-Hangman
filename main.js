//will contain the logic of your app. Running it in Terminal/Bash will start the game.
//The app should end when a player guesses the correct word or runs out of guesses.
// Require all Javascript Files & Inquirer

var inquirer = require ('inquirer');
var game = require ('./game');
var letter = require ('./letter');
var word = require ('./word');

// Global Variables
var guesses = 8;
var wins = 0;
var losses = 0;
var word;

// Assigned Variables To Ask Userguess through Inquirer

var start = [
{
  type: "confirm",
  message: "Welcome to Todd's State Capitals Hangman Game. Are you ready to play!?",
  name: "name",
  default: true

}];

var guessLetter = [
{
  type: 'input',
  name: 'input',
  message: 'Please guess a letter...'
}];
// Functions

function init() {
  inquirer.prompt(start).then(function (user) {
  play();
});

}

function play() {
  guesses = 8;
  wins;
  losses;
  // Push boxes Ex: _ _ _ to screen somehow
  // boxes.push(answer);
  wordStart();
  game();
}

function wordStart() {
  inquirer.prompt(guessLetter).then(function (user) {
  // Converts response from JSON into string
  console.log(JSON.stringify(user, null, 2));
});

};
// word();

init();

// console.log(letter);