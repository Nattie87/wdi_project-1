$(start);

// Setup global variables, as they all need to be used in different functions
var $play;              // The play button
var $display;           // The display where to put a tweet
var blanks;             // The users guess _ _ _ _ _ 
var guesses = [];       // An array of letters that have been guessed
var tweet;              // The randomly selected tweet
var tweetArray;         // The random tweet as an array
var randomIndex;        // The index of the chosen word in the tweet,
var randomWord;         // The randomly chosen word, "horse"
var randomWordArray;    // An array of the chosen word, ["h","o","r","s","e"]
var tweetWithoutWord;   // The tweet minus the word, "A king needs his _,_,_,_,_"

// Initial function to run after DOM has loaded
function start() {
  $play    = $('#play');
  $display = $('#display');

  // EventListener to play game
  $play.on('click', play)

  // EventListener to submit guess, using 'event delegation' as the form is added by JS
  $("#guess").on("submit", "form", guess);
}

// Play function, only run once per word
function play() {
  // Choose random tweet
  tweet           = hangmanTweets[Math.floor(Math.random() * hangmanTweets.length)];
  // Make the tweet array by splitting the word by spaces
  tweetArray      = tweet.split(' ');
  // Choose a random index of the words
  randomIndex     = Math.floor(Math.random() * tweetArray.length);
  // Grab the word
  randomWord      = tweetArray[randomIndex];
  // Split that random word into an array of letters
  randomWordArray = randomWord.split("");
  // Create a new string of blanks equal to the length of the random word
  blanks          = "_".repeat(randomWord.length).split("");

  // Replace the word in the tweet array with the blanks
  tweetArray[randomIndex] = blanks;
  // Convert the tweet without the word back into a sentence
  tweetWithoutWord        = tweetArray.join(" ");
  // Add the tweet (without the word) onto the screen 
  $display.html(tweetWithoutWord);  
  // Create an input button inside a form to guess the letter
  buildInput();
}

// Guess function to check whether the letter is correct
function guess(){
  // Prevent the page from reloading
  event.preventDefault();
  // Get the value of the input
  var guess = $("form input").val();
  
  // If the letter appears in the array built from the random word
  if (randomWordArray.indexOf(guess) >= 0) {
    // Loop over the array whilst there still a letter that is the same as the guess
    while (randomWordArray.indexOf(guess) >= 0) {
      // Change one of the blanks to be the letter in the correct place
      blanks[randomWordArray.indexOf(guess)]          = guess;
      // Set that letter to be null in the randomWordArray (or else the loop with continue)
      randomWordArray[randomWordArray.indexOf(guess)] = null;
    }

    // NOT DRY?
    // Replace the word in the tweet array with the blanks
    tweetArray[randomIndex] = blanks;
    // Convert the tweet without the word back into a sentence
    tweetWithoutWord        = tweetArray.join(" ");
    // Add the tweet (without the word) onto the screen 
    $display.html(tweetWithoutWord);  
  } else {
    // Add the word to the guesses array and display them on the screen... still to implement
    alert("Wrong sucker");
  };
}

// Create the form and add an input for the letter and one to submit the form
function buildInput(){
  var $guessArea = $("#guess");
  $guessArea.append("<form></form>");
  $guessArea.find("form").append("<input type='text' maxlength='1'>");
  $guessArea.find("form").append("<input type='submit' value='guess'>");
}



