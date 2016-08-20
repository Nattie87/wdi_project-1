// //Kanye said what? 
// 1. Create a game that has the same concept as hangman. 
// 2. Object of the game is to beat Kanye's ego by guessing the missing words of his outrageous tweets. 
// 3. I will need to collate 50-100 kanye tweets and save them in a folder. I'll be putting these tweets in an array and put a random method for each round
//4.The winner of each round will win a kanye crown which will be displayed in a score box at the top of the screen
//5. WHen you win and lose a level an audio of kanye will play and a gif maybe?
//6. The style will be clean, fresh and quirky. Not like a traditional looking hangman game
//7. The player will use a click pad with letters on to work out the letters. 
//8. The tweets will be displayed random so I need to collate all of them and prouce an array which has a random function that picks them up 

window.onload = function () {
  function newGame (){
    placeholder="";
          correctGuesses=0;
          wrongGuesses=0;
          wordToGuess=hangmanTweets();
          wordLength=wordToGuess.length;
          //make a loop that replaces underscores with the word to be guessed
          for(var i=0;i<wordLength;i++)
                {
                  placeholder+="_ ";
                }
                 document.getElementById("placeforword").innerHTML=placeholder;
  }
// here we are collating the kanye tweets into an array
  var hangmanTweets = [
  "I need this horse... kings need horses", 
  "This next album is gonna be the greatest muscial masterpiece since my last album"  , 
  "What if Kanye made a song about Kanye", "I love everybody... only thing I don't  like is taxes...me and taxes gonna fight", 
  "I would like to thank Julius Caesar for originating my haircut", "Boyfriends are   like rush hour traffic...Always in the fucking way", 
  "I have to dress Kim everyday so she doesnt embarass me", 
  "Sometimes I get emotional over fonts", 
  "In Roman times the artist would contemplate proportions and colors. Now there is   only one important color... Green", 
  "The purpose of a text is to get a reply within minutes. If I wanted to wait I  would write  a fucking letter", 
  "You maybe talented but you're not Kanye West], [I make awesome decisions in bike   stores", 
  "Do you know where to find marble conference tables? I'm looking to have a  conference... not until I get the table though",  
  "I saw a pre-screening of Pacific Rim yesterday and it's easily one of my   favorite movies of all time", 
  "The 2nd verse of New Slaves is the best rap verse of all time.... meaning...of   all time in the history of rap music, period", 
  "I want to publicly apologise to Bruno Mars, I used to hate on him but I really   respect what he does as an artist", 
  "I'm changing my album now to swish", 
  "I have no interest in working with anyone who is too important or too good or  too traditional to take a 3am call", 
  "This is not an album of the year. This is album of a lifetime", 
  "Mark Zuckerberg invest 1 billion dollard into Kanye West ideas", 
  "I'm this generations Disney... I want to bring dope shit to the world],[On   another note, I strongly dislike suit jackets. I used the word dislike because  I hate the word hate"
  ];
    
    var tweet = hangmanTweets[Math.floor(Math.random() * hangmanTweets.length)];
    console.log(tweet);

    var arr = tweet.split(' ');

    var word = arr[Math.floor(Math.random() * arr.length)];
    console.log(word)

    var wordarr = word.split('');
    var userarr = [];

    // console.log(wordarr)

    var tweetDisplay = document.getElementById("tweets");
    console.log(tweetDisplay);
    tweetDisplay.innerHTML = (wordarr);

    //add an event listener to my keybaord to show guesses.

    var keyboard = keyboardButtons.addevent("click",checkButton)

}

function checkButton (keyboardButtons){
  for (var i = 0; i < wordarr.length; i++) {
    if (wordarr[i] === this) {display.innerHTML = wordarr[i]}
  }

}

//------------------------------------------------------------------------------/



showTweet = function () {
  showLives.innerHTML = "You have " + lives + " lives";
  if (lives < 1) {
    showLives.innerHTML = "Game Over";
  }
  for (var i = 0; i < geusses.length; i++) {
    if (counter + space === geusses.length) {
      showLives.innerHTML = "You Win!";
    }
  }
}
// // function words(array){
// //   var rand = array[Math.floor(Math.random() * array.length)];
// //   console.log(rand)
// // }  


// // now this will be an nswer array. the for loop will put in a _ under random words in the tweet

// console.log(word)
// var answerArray = [];
// // for (var i = 0; i < word.length; i++){
// //   answerArray[i] = "_";
// // }

// //need a variable to keep track of letters that still need to be guessed in the tweet.. how many letters have been added in
// var remainingLetters = word.length; 

// //i need to build a while loop to show how well the player is getting on? so their guesses of the word? i need to display also how their getting on maybe?
// while (remainingLetters > 0) {
//   var el = document.getElementById("demo");
//   el.innerHTML = answerArray.join(" ");
//   //get a guess from the player...create guess var and make a sort of prompt?
//   var guess = prompt("Guess a letter, or click cancel to stop playing");
//   //if they click stop then i need to start an if loop to exit the game
//   if (guess === null) {
//     //trying to make a loop that exits the game
//     break;
//   } else if (guess.length !== 1) {
//     alert("Kanye says please enter a single letter!");
//   } else {
//     //for loop for the actual guess the player puts in....it will check my first array for the guess and see if it fits
//     for (var k = 0; k < words.length; k++)
//       if (words[k] === guess) {
//         answerArray[k] = guess;
//         //after the guess i will need to somehow subtract a letter, so I'm using remainaingletters -1
//         remainingLetters --;

//       }
//     }

//   }


































//return words[randomNumber]; {

//     }

//     function blanksFromAnswer (answerWord) {
//         var result = "";

//         for (var i = 0; i < answerWord.length; i++) {
//             result += "_";
//         }

//         return result;


// function chooseTweet() {

//   var randomTweet = Math.floor(Math.random() * words.length);
//       return words[randomNumber];
//   }

// [h,o,r,s,e] , 
// [m,a,s,t,e,r,p,i,e,c,e],
// [a,b,o,u,t],
// [l,o,v,e,e,v,e,r,y,o,n,e],

// ]

//   return tweets
// }
//  Start with a setup for the game...rules
//  tweets = 
//  lives = 
//  messages = 



// console.log("hello")