var counter = 0;
var answersheet = new Array;
var opened = new Array;
var correctboxes = 3;
var wrongboxes = 5;
var correctcounter = 0;
var fribpics = new Array;
fribpics = [
  'fc2-1.png',
  'fc3-1.png',
  'fc1-1.png'
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

//declare each element{
jQuery("#box1").click(function(event){
if (opened.includes('box1') || counter >= 8){}
else {
console.log(counter);
opened.push('box1');
 function addCount(){
    counter += 1;
  var correct = false;
  if(counter == 1){ //opening box 1
    correct = true;
  }
  else if(counter < 8){ //opening boxes 2-7
    var determiner = Math.random()
    if(determiner > 0.5){
      correct = answersheet.shift();
    }
    else{
      correct = answersheet.pop();
    }
  }
  else if (counter == 8){ //opening box 8
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
    document.getElementById('box1').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
  }
  else {
    document.getElementById('box1').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
  }
  document.getElementById("ncounter").innerHTML = (8 - counter);
 };
};
})
jQuery("#box2").click(function(event){
if (opened.includes('box2') || counter >= 8){}
else {
console.log(counter);
opened.push('box2');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box2').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box2').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box3").click(function(event){
if (opened.includes('box3') || counter >= 8){}
else {
console.log(counter)
opened.push('box3');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box3').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box3').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box4").click(function(event){
if (opened.includes('box4') || counter >= 8){}
else {
console.log(counter);
opened.push('box4');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box4').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box4').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box5").click(function(event){
if (opened.includes('box5') || counter >= 8){}
else {
console.log(counter);
opened.push('box5');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box5').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box5').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box6").click(function(event){
if (opened.includes('box6') || counter >= 8){}
else {
opened.push('box6');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box6').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box6').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box7").click(function(event){
if (opened.includes('box7') || counter >= 8){}
else {
opened.push('box7');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box7').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box7').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box8").click(function(event){
if (opened.includes('box8') || counter >= 8){}
else {
opened.push('box8');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box8').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box8').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box9").click(function(event){
if (opened.includes('box9') || counter >= 8){}
else {
opened.push('box9');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box9').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box9').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box10").click(function(event){
if (opened.includes('box10') || counter >= 8){}
else {
opened.push('box10');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box10').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box10').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box11").click(function(event){
if (opened.includes('box11') || counter >= 8){}
else {
opened.push('box11');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
        correct = true;
        finish();
      }
      else { //attempting to open box 9+
      }
      if (correct){
        (function(){that.clickNextButton();}).delay(5);
        correctcounter += 1;
        document.getElementById("counter").innerHTML = (1 + correctcounter);
      }
      if (correct) {
        document.getElementById('box11').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box11').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box12").click(function(event){
if (opened.includes('box12') || counter >= 8){}
else {
opened.push('box12');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box12').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box12').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box13").click(function(event){
if (opened.includes('box13') || counter >= 8){}
else {
opened.push('box13');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box13').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box13').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box14").click(function(event){
if (opened.includes('box14') || counter >= 8){}
else {
opened.push('box14');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box14').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box14').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box15").click(function(event){
if (opened.includes('box15') || counter >= 8){}
else {
opened.push('box15');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box15').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box15').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})
jQuery("#box16").click(function(event){
if (opened.includes('box16') || counter >= 8){}
else {
opened.push('box16');
    function addCount(){
        counter += 1;
      var correct = false;
      if(counter == 1){ //opening box 1
        correct = true;
      }
      else if(counter < 8){ //opening boxes 2-7
        var determiner = Math.random()
        if(determiner > 0.5){
          correct = answersheet.shift();
        }
        else{
          correct = answersheet.pop();
        }
      }
      else if (counter == 8){ //opening box 8
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
        document.getElementById('box16').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
      }
      else {
        document.getElementById('box16').src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
      }
      document.getElementById("ncounter").innerHTML = (8 - counter);
     };
  };
})

//correct box found
function addpicture(){
//whatever you want to do when they open a 'correct' box
var fribid = "frib" + (correctcounter + 1);
var friblink = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-training/' + fribpics[correctcounter];
document.getElementById(fribid).src = friblink;
}