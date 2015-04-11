var fingers = ["thumb", "pointer finger", "middle finger", "ring finger", "pinkie"];
var start = false;
var currentKey=0;

function randomString(){
  var finger = Math.floor((Math.random() * 5));
  if(finger > 4){
    finger = 3;
  }

  var key = Math.floor((Math.random() * 26)) + 65;
  if(key >= 91){
    key = 90;
  }

  currentKey = key;
  var string = "Place your " + fingers[finger] + " on " + String.fromCharCode(key);
  return string;

}

$(document).ready(function(){

  $(document).click(function(){
    if(!start){
      start=true;
      var command = randomString();
      $("#text").text(command);
    }

  });

  $(document).keydown(function(e){
    if(start){




    }
  });

  $(document).keyup(function(e){




  });

});
