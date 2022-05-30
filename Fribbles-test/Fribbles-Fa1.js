//* based on jsPsych v6.x 
/* Fribbles Task (examples)*/
var timeline = [];
var test_link = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fa1/'
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    auto_preload: true
}
timeline.push(preload)

/////// List stimuli /////////
// note - test stimuli contains either Head 1 or Leg 1
var test_stimuli = [
    {stimulus: test_link + "Fa1_2121.jpg"},
    {stimulus: test_link + "Fa1_1322.jpg"},
    {stimulus: test_link + "Fa1_3221.jpg"}    
];
//test blocks//
var testchoice= {
    type: 'image-slider-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    prompt: '<p>How likely is this item from the category <i>[beeba]</i>?</p>',
    labels: ['Very Unlikely', 'Very Likely'],
    slider_width: 1000,
    button_label: 'Continue',
};

var testblock = {
    timeline: [testchoice],
    timeline_variables: test_stimuli,
    randomize_order: true,
};

timeline.push(testblock);