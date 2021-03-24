var buttonTag = document.querySelectorAll(".drum");


for (var i = 0; i < (buttonTag.length); i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makesound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

// written with JQuery, the above becomes the below but not to play sound, to change the color of the  h1 tag text to purple
// $("button").click(function() {
//   $("h1").css("color", "purple");
// });


document.addEventListener("keydown", function(event) {

  makesound(event.key);
  buttonAnimation(event.key);

});

function makesound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "a":
      var kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;
    case "s":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "d":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "l":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    default:
      console.log(key);

  }
}

function buttonAnimation(currentkey) {
  var activeButton = document.querySelector("." + currentkey);


// to add a css class to a list of classes in the html file using js
  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}
