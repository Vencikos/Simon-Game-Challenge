/* Empty array for the game patterns */

var gamePattern = [];

/* Colors array */

var buttonColors = ["red", "blue", "green", "yellow"]; 

/* Get random number */

function nextSequence() {
   var randomNumber = Math.floor(Math.random()*4);
   return buttonColors[randomNumber];
}

/* Get random color */

var randomChoosenColor = nextSequence();

/* Add random color to the gamePattern array */

gamePattern.push(randomChoosenColor);

/* Select button with the same ID as the random color */

function buttonSelectComputer() {
    $("#" + randomChoosenColor).fadeTo('fast',0).fadeTo('fast',1);
    var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
    audio.play();
}

buttonSelectComputer()
function playSound(randomChoosenColor) {
         
}

$('#' + randomChoosenColor).on("click", function() {
    var audio = new Audio("sounds/" + randomChoosenColor + ".mp3");
    audio.play();
});

/* Get player keypress */

const playerKey = function getPlayerKey() {
    $(body).keydown(function(event) {
        console.log(event.key);
    }) 
}





