//all the variables required for the game
var wins;
var losses;
var totalGuesses =10;
var guessed_letters=[];
var words = [
    "tupac",
    "biggie",
    "eminem",
    "tlc",
    "madonna",
    "nas",
    "ashanti",
    "celine",
    "jlo"

];
var ansArray=[];// to print "_"
var hiddenWord;
//This is what picks a random word
var random_word = words[Math.floor(Math.random() * words.length)];
console.log(random_word)
//Replace the random word with _ for user to guess it;


for (var i=0; i < random_word.length; i++) {
 ansArray.push("_");
 
}
hiddenWord=ansArray.join(",").replace(/,/g, " ");
console.log(hiddenWord)

//print hidden word on the screen
document.getElementById("wordanswer").innerHTML= hiddenWord;



//now capture user guesses on keup/dpwn
// and check the guess aginst the random word see if that character is present
// if yes get the index of that word and replace the hidden word index with the user guess 
//if no decrease user guess and store word in guesseed letters