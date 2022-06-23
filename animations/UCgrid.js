//declaring variables
  var counter = 0;
  var answersheet = new Array;
  var opened = new Array;
  var correctboxes = 6;
  var wrongboxes = 5;
  var correctcounter = 0;
  var fribpics = new Array;
  fribpics = [
    '3132.png',
    '1212.png',
    '1313.png',
    '2123.png',
    '2221.png',
    '3331.png'
  ];


  //generating answersheet
  while (correctboxes > 2){
    answersheet.push(true);
    correctboxes -= 1;
  }
  while (wrongboxes > 0){
    answersheet.push(false);
    wrongboxes -= 1;
  }


  //box press - check if box is already opened and if 9 boxes already opened
  function change(buttonid) {
	  if (opened.includes(buttonid) || counter >= 11){}
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
    else if(counter < 11){ //opening boxes 2-10
      var determiner = Math.random()
      if(determiner > 0.5){
        correct = answersheet.shift();
      }
      else{
        correct = answersheet.pop();
      }
    }
    else if (counter == 11){ //opening box 11
      correct = true;
      finish();
      document.getElementById("buttonapp").innerHTML = "...Please wait for the 'next' button to appear";
      document.getElementById("timer").style = "color:red";
    }
    else { //attempting to open box 10+
    }
    if (correct){
      addpicture();
      correctcounter += 1;
      document.getElementById("counter").innerHTML = (3 + correctcounter);
    }
    if (correct) {
      document.getElementById(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
    }
    else {
      document.getElementById(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
    }
    document.getElementById("ncounter").innerHTML = (11 - counter);
  }
///// timer 
function startTimer() {
  var presentTime = document.getElementById("timer").innerHTML;
  var timeArray = presentTime.split(/[:]+/);
  var m = timeArray[0];
  var s = checkSecond((timeArray[1] - 1));
  if(s==59){m=m-1}
  if(m<0){
    return
  }
  document.getElementById("timer").innerHTML =
    m + ":" + s;
  console.log(m)
  setTimeout(startTimer, 1000);
}

function checkSecond(sec) {
  if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
  if (sec < 0) {sec = "59"};
  return sec;
}

//correct box found
function addpicture(){
  //whatever you want to do when they open a 'correct' box
  var fribid = "frib" + (correctcounter + 1);
  var friblink = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_' + fribpics[correctcounter];
  document.getElementById(fribid).src = friblink;
}

function finish(){
//whatever you want to do when they open 11 boxes
    qthis.showNextButton();
}