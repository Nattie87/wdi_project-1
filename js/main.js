$(start);

var $play;             
var $display;          
var blanks;            
var guesses      = []; 
var totalGuesses = 0;
var wrongGuesses = [];
var tweet;             
var tweetArray;        
var randomIndex;       
var randomWord;        
var randomWordArray;   
var tweetWithoutWord;  
var count;
var NumberOfChances;

function start() {
  $play    = $('#play');
  $display = $('#display');
  $play.on('click', play)
  $("#guess").on("submit", "form", guess);
}

function play() {
  tweet           = hangmanTweets[Math.floor(Math.random() * hangmanTweets.length)];
  tweetArray      = tweet.split(' ');
  randomIndex     = Math.floor(Math.random() * tweetArray.length);
  randomWord      = tweetArray[randomIndex].toLowerCase();
  randomWordArray = randomWord.split("");
  blanks          = "_".repeat(randomWord.length).split("");

  tweetArray[randomIndex] = blanks.join(" ");
  tweetWithoutWord        = tweetArray.join(" ");
  $display.html(tweetWithoutWord);  
  buildInput();
  $play.hide();
  $display.fadeIn();
}

function guess(){
  event.preventDefault();
  var guess      = $("form input[type=text]").val();
  var $h1        = $("h1");
  var oldTitle   = $h1.html();
  var $guessArea = $("#guess");

  $("form input[type=text]").val("");

  if (randomWordArray.indexOf(guess) >= 0) {
    while (randomWordArray.indexOf(guess) >= 0) {
      blanks[randomWordArray.indexOf(guess)]          = guess;
      randomWordArray[randomWordArray.indexOf(guess)] = null;
    }

    tweetArray[randomIndex] = blanks.join(" ");
    tweetWithoutWord        = tweetArray.join(" ");
    $display.html(tweetWithoutWord);  

    var correct = randomWordArray.filter(function(letter) {
      return !!letter 
    }).length

    if (correct === 0) {
      $h1.html("Winner!").fadeOut(3000, function(){
        $(this).html("KANYE IS A ____?").show();
        $play.show();
        $display.hide();
        $guessArea.empty();
      });
      return
    }
  } else {
    totalGuesses++;
    
    $h1.html("JEZZUS... You WRONG.").fadeOut(3000, function(){
      $(this).html(oldTitle).show();
    });
  };
}

function buildInput(){
  var $guessArea = $("#guess");
  $guessArea.html("<form></form>");
  $guessArea.find("form").append("<input type='text' maxlength='1'>");
  $guessArea.find("form").append("<input type='submit' value='guess'>");
}