Qualtrics.SurveyEngine.addOnload(function()
{
    
});

Qualtrics.SurveyEngine.addOnReady(function()
{
    this.hideNextButton();
    var that = this;
	
//declaring variables
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

    function change(buttonid) {
    if (opened.includes(buttonid) || counter >= 8){}
    else {
    opened.push(buttonid);
        addCount(buttonid);
    }}

    function addCount(buttonid) {
        counter += 1;
        console.log(counter);
        var correct = false;
        if(counter == 1){ //opening box 1
            correct = true;
        }
        else if(counter < 8){ //opening boxes 2-7
            var determiner = Math.random()
            if(determiner > 0.5){correct = answersheet.shift();}
            else{correct = answersheet.pop();}
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
            jQuery("#counter").innerHTML = (1 + correctcounter);
        }
        if (correct) {
        jQuery(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/found.png";
        }
        else {
            jQuery(buttonid).src = "https://sophiasdanial.github.io/Fribbles-Generalization/images/whoops.png";
            jQuery("#ncounter").innerHTML = (8 - counter);
        }
    }

    //correct box found
    function addpicture(){
    //whatever you want to do when they open a 'correct' box
    var fribid = "frib" + (correctcounter + 1);
    var friblink = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-training/' + fribpics[correctcounter];
    jQuery(fribid).src = friblink;
    }

    function finish(){that.clickNextButton();}

    //declare each element{
    jQuery("#box1").click(function(event){
        change('box1');
    });
    jQuery("#box2").click(function(event){
    change('box2');
    });
    jQuery("#box3").click(function(event){
        change('box3');
    });
    jQuery("#box4").click(function(event){
    change('box4');
    });
    jQuery("#box5").click(function(event){
    change('box5');
    });
    jQuery("#box6").click(function(event){
        change('box6');
    });
    jQuery("#box7").click(function(event){
        change('box7');
    });
    jQuery("#box8").click(function(event){
    change('box8');
    });
    jQuery("#box9").click(function(event){
        change('box9');
    });
    jQuery("#box10").click(function(event){
        change('box10');
    })
    jQuery("#box11").click(function(event){
        change('box11');
    });
    jQuery("#box12").click(function(event){
        change('box12');
    });
    jQuery("#box13").click(function(event){
        change('box13');
    });
    jQuery("#box14").click(function(event){
    change('box14');
    });
    jQuery("#box15").click(function(event){
    change('box15');
    });
    jQuery("#box16").click(function(event){
        change('box16');
    });
  
  
});

Qualtrics.SurveyEngine.addOnUnload(function()
{
	/*Place your JavaScript here to run when the page is unloaded*/

});