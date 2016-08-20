$(start);
alert('Welcome to Kanye said what?')

function start() {
  $('#play').on('click', function() {
    var tweet      = hangmanTweets[Math.floor(Math.random() * hangmanTweets.length)];
    var tweetArray = tweet.split(' ');
    var word       = tweetArray[Math.floor(Math.random() * tweetArray.length)];
    tweetArray.splice(tweetArray.indexOf(word),1,'_');
    // var wordArray  = word.split('');

    $('#display').html(tweet);
    console.log(word);
    // console.log(wordArray);
    console.log(tweetArray);

  });
}

document.onkeydown = function(e) {
  e = e || window.event; 
  var charCode = e.charCode || e.keyCode, 
      character = String.fromCharCode(charCode); 

  console.log(character);
  $( "#whichkey" ).on( "keydown", function( event ) {
    $( "#log" ).html( event.type + ": " +  event.which );
  });
}



