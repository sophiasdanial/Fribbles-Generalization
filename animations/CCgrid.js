//declaring variables
var counter = 0;
var answersheet = new Array;
var opened = new Array;
var correctboxes = 3;
var correctcounter = 0;
var fribpics = new Array;
fribpics = [
  'fc2-1.png',
  'fc3-1.png',
  'fc1-1.png'
];


//generating answersheet
while (correctboxes > 0){
  answersheet.push(true);
  correctboxes -= 1;
}

//box press - check if box is already opened and if 8 boxes already opened
function change(buttonid) {
  if (opened.includes(buttonid) || counter >= 8){}
  else {
  opened.push(buttonid);
    addCount(buttonid);
    
  }
}

function addCount(buttonid) {
  counter += 1;
  var correct = false;
  if(counter == 1){ //opening box 1
    correct = true;
  }
  else if(counter < 4){ //opening boxes 2-8
    var determiner = Math.random()
    if(determiner > 0.5){
      correct = answersheet.shift();
    }
    else{
      correct = answersheet.pop();
    }
  }
  else if (counter == 4){ //opening box 3
    correct = true;
    finish();
  }
  else { //attempting to open box 9+
  }
  if (correct){
    addpicture();
    correctcounter += 1;
    document.getElementById("counter").innerHTML = (1 + correctcounter);
  }
  if (correct) {
    document.getElementById(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
  }
  else {
    document.getElementById(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
  }
  document.getElementById("ncounter").innerHTML = (3 - counter);
}

window.onload = function(){
  setTimeout(function(){
    document.getElementById('box9').click();}, 5000);
  setTimeout(function(){
    document.getElementById('box15').click();}, 8000);
  setTimeout(function(){
    document.getElementById('box5').click();}, 11000);
  };


//correct box found
function addpicture(){
  //whatever you want to do when they open a 'correct' box
  var fribid = "frib" + (correctcounter + 1);
  var friblink = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-training/' + fribpics[correctcounter];
  document.getElementById(fribid).src = friblink;
  }

  function finish(){
  //whatever you want to do when they open 3 boxes
}