// List of words used for gameplay

var words = ['MONTGOMERY','JUNEAU','PHOENIX','LITTLE ROCK','SACRAMENTO','DENVER','HARTFORD','DOVER','TALLAHASSEE','ATLANTA','HONOLULU','BOISE','SPRINGFIELD','INDIANAPOLIS','DES MOINES','TOPEKA','FRANKFORT','BATON ROUGE','AUGUSTA','ANNAPOLIS','BOSTON','LANSING','SAINT PAUL','JACKSON','JEFFERSON CITY','HELENA','LINCOLN','CARSON CITY','CONCORD','TRENTON','SANTA FE','ALBANY','RALEIGH','BISMARCK','COLUMBUS','OKLAHOMA CITY','SALEM','HARRISBURG','PROVIDENCE','COLUMBIA','PIERRE','NASHVILLE','AUSTIN','SALT LAKE CITY','MONTPELIER','RICHMOND','OLYMPIA','CHARLESTON','MADISON','CHEYENNE'];

var answer = words[Math.floor(Math.random() * words.length)];

function Game() {

answer = words[Math.floor(Math.random() * words.length)];
console.log('The Word Is: ' + answer);
}

//Exports words module
module.exports = Game;



