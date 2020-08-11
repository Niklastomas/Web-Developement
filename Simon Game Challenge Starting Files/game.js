

var gamePattern = new Array();
var userClickedPattern = new Array();
var level = 0;
var started = false;

var buttonColours = ["red", "blue", "green", "yellow"];

$("div.btn").click(function (e) {
  var userChosenColour = e.target.id;
  userClickedPattern.push(userChosenColour);

  animatePress(userChosenColour);
  playSound(userChosenColour);
  checkAnswer(userClickedPattern.length - 1);

});

$("body").keypress(function(){
  if (!started) {


    nextSequence();
    started = true;
  }

});




function nextSequence() {

  userClickedPattern = [];
  level++;
  $("h1").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(color);




}

function playSound(name){

  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour){

  $("#" + currentColour).addClass("pressed");

  setTimeout(function(){

    $("#" + currentColour).removeClass("pressed");
  },100);
}

function checkAnswer(currentLevel){



  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success");

    if (userClickedPattern.length === gamePattern.length){

      setTimeout(function () {
        nextSequence();
      }, 1000);
    }



  }
  else {

    $("body").addClass("game-over");

    playSound("wrong");

    setTimeout(function () {

      $("body").removeClass("game-over");

    }, 200);

    $("#level-title").text("Game Over, Press Any Key to Restart");
    startOver();
  }
}

function startOver(){
  level = 0;
  gamePattern = [];
  started = false;

}
