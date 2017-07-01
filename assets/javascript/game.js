var wins = 0;
var losses = 0;
var guessesLeft = 8;
var ltrsguessed = [];
var i = 0;

// Random letter picker
var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var random = letters[Math.floor(Math.random() * letters.length)];

// Random letter picker
document.onkeyup = function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90)
	var key = event.key;
	
	ltrsguessed[i] = key;
	i++; 
	
// 	Guesses so far
	var guesses = document.getElementById('guesses');
	guesses.innerHTML = "Guesses so far: " + ltrsguessed;
	
	
// 	Wins
	var winsCount = document.getElementById('wins');
	winsCount.innerHTML = "Wins: " + wins;
	
// 	Guesses Left
	
	var guessWrong = document.getElementById('guessesLeft');
	guessWrong.innerHTML = "Guesses left: " + guessesLeft;
	
// 	Losses
	var loss = document.getElementById('losses');
	loss.innerHTML = "Losses: " + losses;
	
// 	Win/Loss counter
	if(key === random) {
		wins++;
		guessesLeft = 9;
		ltrsguessed =[];
		i = 0;
		random = letters[Math.floor(Math.random() * letters.length)];
	} else {
		guessesLeft--;
	}
	
	if(guessesLeft === 0) {
		losses++;
		guessesLeft = 9;
		ltrsguessed = [];
		i = 0;
		random = letters[Math.floor(Math.random() * letters.length)];
	}

}