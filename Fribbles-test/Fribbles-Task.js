//* based on jsPsych v6.x 
/* Fribbles Task */
var timeline = [];
var trial_count = 9;
var test_link = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/'
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    images: [
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/1000pxslidermarkings.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc1-2.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc1-3.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc1-4.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc2-2.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc2-3.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc2-4.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc3-2.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc3-3.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/fc-test/fc3-4.png'
    ]
}
timeline.push(preload)

/////// List stimuli /////////
var test_stimuli = [
    //FC1
    {stimulus: test_link + "fc1-2.png", data: {ftype: "fc1-2"}},
    {stimulus: test_link + "fc1-3.png", data: {ftype: "fc1-3"}},
    {stimulus: test_link + "fc1-4.png", data: {ftype: "fc1-4"}},
    //FC2
    {stimulus: test_link + "fc2-2.png", data: {ftype: "fc2-2"}},
    {stimulus: test_link + "fc2-3.png", data: {ftype: "fc2-3"}},
    {stimulus: test_link + "fc2-4.png", data: {ftype: "fc2-4"}},
    //FC3
    {stimulus: test_link + "fc3-2.png", data: {ftype: "fc3-2"}},
    {stimulus: test_link + "fc3-3.png", data: {ftype: "fc3-3"}},
    {stimulus: test_link + "fc3-4.png", data: {ftype: "fc3-4"}}
];

//test blocks//
var testchoice= {
    type: 'image-slider-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    prompt: '<p style="margin:0px">How likely is this item a <i>Zizu</i>?</p>',
    labels: ['0', '100'],
    slider_width: 1002,
    stimulus_width: 500,
    maintain_aspect_ratio: true,
    button_label: 'continue',
    require_movement: true,
    on_finish: function() {
        var curr_progress_bar_value = jsPsych.getProgressBarCompleted();
        jsPsych.setProgressBar(curr_progress_bar_value + (1/trial_count));
    }
};

var testblock = {
    timeline: [testchoice],
    timeline_variables: test_stimuli,
    randomize_order: true,
    data: jsPsych.timelineVariable('data')
};

timeline.push(testblock);

/* define results for Qualtrics*/

/// FC1
var fc12 = jsPsych.data.get().filter({ftype: "fc1-2"}).select('response').values;
var fc13 = jsPsych.data.get().filter({ftype: "fc1-3"}).select('response').values;
var fc14 = jsPsych.data.get().filter({ftype: "fc1-4"}).select('response').values;
/// FC2
var fc22 = jsPsych.data.get().filter({ftype: "fc2-2"}).select('response').values;
var fc23 = jsPsych.data.get().filter({ftype: "fc2-3"}).select('response').values;
var fc24 = jsPsych.data.get().filter({ftype: "fc2-4"}).select('response').values;
///FC3
var fc32 = jsPsych.data.get().filter({ftype: "fc3-2"}).select('response').values;
var fc33 = jsPsych.data.get().filter({ftype: "fc3-3"}).select('response').values;
var fc34 = jsPsych.data.get().filter({ftype: "fc3-4"}).select('response').values;
///browser interaction data
var browser = jsPsych.data.getInteractionData()

