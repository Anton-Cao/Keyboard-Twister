var fingers = ["thumb", "pointer finger", "middle finger", "ring finger", "pinkie"];
var whichKey = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,];
var start = false;
var cont = true;
var currentKey=0;
var currentFinger=0;

function randomString(){
  var finger = Math.floor((Math.random() * 5));
  if(finger >= 5){
    finger = 4;
  }

  var key = Math.floor((Math.random() * 26)) + 65;
  if(key >= 91){
    key = 90;
  }
  while(whichKey[key-65] != 0){
    key = Math.floor((Math.random() * 26)) + 65;
    if(key >= 91){
      key = 90;
    }
  }

  currentKey = key;
  currentFinger = finger+1;
  whichKey[key-65] = currentFinger;
  var string = "Place your " + fingers[finger] + " on " + String.fromCharCode(key);
  return string;

}

$(document).ready(function(){

  $(document).click(function(){
    if(!start && cont){
      start=true;
      var command = randomString();
      $("#text").text(command);
      $("#score").text("Score: 0");
    }

    if(!cont){
      $("#text").text("Click to begin!");
      cont = true;
    }

  });

  $(document).keypress(function(e){
    if(start){
      if(e.keyCode - 32 != currentKey){ //-32 because keypress does some weird thing
        if(whichKey[e.keyCode - 32 - 65]==0){
          $("#text").text("You lose!");
          start=false;
          cont=false;
          console.log("Wrong key");
        }
      }else{
        var currentScore = $("#score").html();
        currentScore = currentScore.substring(7, currentScore.length);
        currentScore = parseInt(currentScore);
        currentScore++;
        $("#score").text("Score: " + currentScore.toString());

        var command = randomString();
        $("#text").text(command);

      }

    }
  });

  $(document).keyup(function(e){
    if(start){
      if(whichKey[e.keyCode - 65] != currentFinger || currentKey == e.keyCode - 65){
        $("#text").text("You lose!");
        start=false;
        cont=false;
        console.log("Removed finger");
      }else{
        whichKey[e.keyCode - 65] = 0;
      }
    }
  });

});
