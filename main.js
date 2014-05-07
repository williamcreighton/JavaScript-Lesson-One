// defining the variable "pangram"

var pangram = "The quick brown fox jumps over the lazy dog"

// prints the variable.
console.log(pangram)

// returns the number of symbols in the string including whitespace.
console.log(pangram.length)

// this splits the string into individial strings.
console.log(pangram.split(" "))

// this splits the string into individual letters.
console.log(pangram.split(""))

// the lazy dog ...
console.log(pangram.slice(31,43))

// asking a question about a lazy dog through a popup box. 

var lazyDog = prompt("Did you know that the quick brown fox jumps over the lazy dog?");

if (lazyDog=="yes")
  {
  alert("My dog's lazy too.");
  }
else
  {
  alert("What rock have you been living under?");
  }

// converting "pangram" to uppercase.
console.log(pangram.toUpperCase())  

// slicin' 'n' dicin' the "pangram"
console.log(pangram.slice(-3, pangram.length))

// a variable of me.

var me = {
	name: "William Creighton",
	living: true,
	age: 36,
	gender: "male",
	born: "Charleston, SC",
	hometown: "Round Hill, VA",
	placesLived: "Charleston, SC, Columbia, SC, Atlanta, GA, Alexandria, VA, Bonn, Germany, Hong Kong, London, England, Boca Raton, FL, Kingston, RI, New York, NY, Los Angeles, CA, Round Hill, VA, Greenville, SC"
}

console.log(me.living)
console.log(me.born)
console.log(me.placesLived)

// Barclays Premier League

var ManchesterCity = {
	overallGamesPlayed: 37,
	overallGamesWon: 26,
	overallGamesDrawn: 5,
	overallGamesLost: 6,
	overallGoalsFor: 100,
	overallGoalsAgainst: 37,
	// homeGamesWon: 16,
	// homeGamesDrawn: 1,
	// homeGamesLost: 1,
	// homeGoalsFor: 61,
	// homeGoalsAgainst: 13,
	// awayGamesWon: 10,
	// awayGamesDrawn: 4,
	// awayGamesLost: 5,
	// awayGoalsFor: 39,
	// awayGamesAgainst: 24
}

// How to create a dynamic Barclays Premiere League table in JavaScript?
// Could take out the Home/Away breakdown to simplify and just compute the
// overall games played and goals scored.
// Would have to factor in Wins = 3, Draw = 1 and Loss = 0 ... need to create
// a function that would calculate total points accumulation.
// Also need to create a function that would calculate Goal Difference (that one
// seems like would be easier as would be overallGoalsFor - overallGoalsAgainst.
// How then to create a script where you could call BarclaysPremiereLeague.totalPoints (?)
// to return a ranking list based on points or a ranking list based on Goal Difference?

function goalDifference (overallGoalsFor, overallGoalsAgainst) {
	return overallGoalsFor - overallGoalsAgainst;
}

// console.log(goalDifference(100 - 37)) - End BPL Soccer Table idea.


// getting expressiony with the LOST numbers.

console.log(4 + 8 - 15 * 16 + 23 / 42)

console.log(4 * 8 * 15 / 16 + 23 - 42)

console.log(4 + 8 + 15 + 16 + 23 + 42 / 6)

console.log(4 * 8 * 15 * 16 * 23 * 42 / 6)

console.log(4 + 8 + 15 + 16 + 23 + 42 / 815)

console.log(4 + 8 + 15 + 16 + 23 + 42 / 324)

console.log(4 + 8 + 15 + 16 + 23 + 42 / 108)

// meh ... no idea if they were alive or dead.

// random number generator ...

function gimmeRandomNumbers(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(gimmeRandomNumbers(0,108))