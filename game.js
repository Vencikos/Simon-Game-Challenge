/* Colors array */

let buttonColors = ["red", "blue", "green", "yellow"]; 

/* Empty arrays */

let gamePattern = []; // Array for the random selected color
let userClickedPattern = []; // Array for the color selected by the player
let level = 0;
let started = false;

/* Detect a button clicked by the user */


$(document).one("keypress", function() {
    nextSequence();
});

$(".btn").on("click", function() {
    let userChosenColor = (this.id);
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
    });
       
/* Next sequence function */

function nextSequence() {
   const randomNumber = Math.floor(Math.random()*4);  // Get random number
   const randomChoosenColor = buttonColors[randomNumber]; // declare variable equal to the random chosen color

   // Push the random chosen color in the gamePattern array
   gamePattern.push(randomChoosenColor); 

   //Flash effect for the button with id equal to the random chosen color
   $("#" + randomChoosenColor).fadeTo('fast',0).fadeTo('fast',1); 
   playSound(randomChoosenColor);
   level++;
   $("#level-title").text("Level " + level);
   started = true;
}

// Play sound for the coresponding button function

function playSound(name) {
    // Audio effect coresponding to the random selected button 
   const audio = new Audio("sounds/" + name + ".mp3"); 
   audio.play();
}

// Flash animation on click - adds the class ".pressed" and removes it after 100ms

function animatePress(currentColor) {
    $("#" + currentColor).addClass("pressed");
    setTimeout(function(){$("#" + currentColor).removeClass("pressed")}, 100);
    };

function checkAnswer(lastIndexNumber) {
    if (userClickedPattern[lastIndexNumber] == gamePatter[lastIndexNumber]) {
      console.log("correct");
      //if userClickedPattern has as many elements as gamePatternarray then empty userClickedPattern array run nextSequence =next Level
      if (userClickedPattern.length == gamePattern.length) {
        //empty userClickedPattern array
        userClickedPattern.length = 0;
        //run next level after 1 sec delay
        setTimeout(function() {
          nextSequence();
        }, 1000);
      }
    } else {
      console.log("wrong button");
      makeSound("wrong");
      $("#level-title").text("Game Over, Press Any Key to Restart");
      $("body").addClass("game-over");
      setTimeout(function() {
        $("body").removeClass("game-over");
      }, 200);
      startOver();
    }
  };

function startOver() {
    gamePattern = 0;
    level = 0;
    $(document).one("keypress", function() {
        nextSequence();
    })
}



