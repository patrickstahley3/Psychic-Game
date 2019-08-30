
var computerChoices = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var wins = 0;
var losses = 0;
var guesses = 9;
var guessChoices = [];
var userChoice;
var lossesText = document.getElementById("losses-text");
var winsText = document.getElementById("wins");
winsText.textContent = wins;
lossesText.textContent = losses;
var guessesText = document.getElementById("guesses-text");
guessesText.textContent = guesses;
var

var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
var displayStats = function () {
    wins.innerHtml = "wins:" + wins;
    losses.innerHtml = "losses:" + losses;
    guesses.innerHtml = "guesses-text" + guesses;
}

var resetGame = function () {
    guessChoicesArray = [];
    guesses = guesses;
    currentLetter = guessChoices

    var userWon = function (userChoice) {
       return userLetter === currentLetter 
    }
    var userLost = function () {
        return guesses === 0;

    }


    document.onkeyup = function (event) {

        userChoice = event.key;

        for (i = 0; 1 < 10; i++) {







            var computerGuess = ["0"]








            // for loop for generating amount of guesses...

        }
    }
