// Array of Word Options (all lowercase)

var wordsList = ['batman', 'superman', 'hulk'];

// Solution will be held here

var chosenWord = "";

// This will break the solution into individual letters to be stored in an array.

var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution

var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: a_p_le)

var blanksAndSucesses = [];

// Holds all of the wrong guesses

var wrongGuesses = [];

// Game counters

var winCounter = 0;

var lossCounter = 0;

var numGuesses = 9;

// FUNCTIONS

// ------------------------------------------------------

/* It's how we'll start and restart the game. It's not being run here. It's

just being made for future use. */

function startGame(){

// Starts over the guesses at specified number

numGuesses = 9;

// Solution is chosen randomly from wordList

chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

// The word is broken into individual letters

lettersInChosenWord = chosenWord.split("");

// We count the number of letters in the word

numBlanks = lettersInChosenWord.length;

// We print the solution in the console (for testing)

console.log(chosenWord);

// CRITICAL LINE - Here we reset the guess and success array at each round

blanksAndSucesses = [];

// CRITICAL LINE - Here we reset the wrong guesses from the previous round

wrongGuesses = [];

// Fill up the blanksAndSucusses list with approopriate number of blanks,

// which is based on the number of letters in solution

for (var i = 0; i < numBlanks; i++){

blanksAndSucesses.push("_");

}

// Print the initial blanks in console.

console.log(blanksAndSucesses);

// Reprints the guessesLeft to 9

document.getElementById("guesses-left").innerHTML = numGuesses;

// Prints the blanks at the beginning of each round in the HTML

document.getElementById("word-blanks").innerHTML = blanksAndSucesses.join(" ");

// Clears the wrong guesses form the previous round

document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");