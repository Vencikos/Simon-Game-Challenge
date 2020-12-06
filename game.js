var gamePattern = [];

/* Colors array */

var buttonColors = ["red", "blue", "green", "yellow"]; 

/* Get random number */

function nextSequence() {
   var randomNumber = Math.floor(Math.random()*4);
   return randomNumber;
}

/* Get random color */

var randomChoosenColor = buttonColors[nextSequence()];

/* Add random color to the gamePattern array */

gamePattern.push(randomChoosenColor);

/* Select button with the same ID as the random color */

$("#" + randomChoosenColor).fadeTo('fast',0).fadeTo('fast',1);

$('#' + randomChoosenColor).on("load", function() {
    var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
    audio.play();
});

$('#' + randomChoosenColor).on("click", function() {
    var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
    audio.play();
});





