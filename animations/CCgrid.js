//declaring variables
  var counter = 0;
  var answersheet = new Array;
  var opened = new Array;
  var correctboxes = 6;
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
  while (correctboxes > 0){
    answersheet.push(true);
    correctboxes -= 1;
  }

  //box press - check if box is already opened and if 9 boxes already opened
  function change(buttonid) {
	  if (opened.includes(buttonid) || counter >= 9){}
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
    else if(counter < 9){ //opening boxes 2-8
      var determiner = Math.random()
      if(determiner > 0.5){
        correct = answersheet.shift();
      }
      else{
        correct = answersheet.pop();
      }
    }
    else if (counter == 9){ //opening box 9
      correct = true;
      finish();
    }
    else { //attempting to open box 10+
    }
    if (correct){
      addpicture();
      correctcounter += 1;
      document.getElementById("counter").innerHTML = (3 + correctcounter);
    }
    if (correct) {
      document.getElementById(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/box-open.png";
      document.getElementById("ncounter").innerHTML = (6 - correctcounter);
    }
  }

  window.onload = function(){
    setTimeout(function(){
      document.getElementById('box18').click();}, 5000);
    setTimeout(function(){
      document.getElementById('box11').click();}, 10000);
    setTimeout(function(){
      document.getElementById('box16').click();}, 15000);
    setTimeout(function(){
      document.getElementById('box15').click();}, 20000);
    setTimeout(function(){
      document.getElementById('box20').click();}, 25000);
    setTimeout(function(){
      document.getElementById('box13').click();}, 30000);
    };
  

  //correct box found
  function addpicture(){
    //whatever you want to do when they open a 'correct' box
    var fribid = "frib" + (correctcounter + 1);
    var friblink = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_' + fribpics[correctcounter];
    document.getElementById(fribid).src = friblink;
    }

    function finish(){
    //whatever you want to do when they open 9 boxes
  }