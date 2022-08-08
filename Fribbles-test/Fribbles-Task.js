//* based on jsPsych v6.x 
/* Fribbles Task */
var timeline = [];
var trial_count = 20;
var test_link = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/'
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    images: [
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/1000pxslidermarkings.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1312.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2132.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2311.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3213.png',

        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc3_1312.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc3_2132.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc3_2311.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc3_3213.png',

        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_1132.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_1211.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_1312.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_1332.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_2121.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_2133.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_2231.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_2233.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_2321.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_3221.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_3313.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc13_12232.png'
    ]
}
timeline.push(preload)

/////// List stimuli /////////
// note - test stimuli contains either Head 1 or Leg 1
var test_stimuli = [
    //FC1
    {stimulus: test_link + "Fc1_1321.png", data: {ftype: "fc1-1321"}},
    {stimulus: test_link + "Fc1_2132.png", data: {ftype: "fc1-2132"}},
    {stimulus: test_link + "Fc1_2311.png", data: {ftype: "fc1-2311"}},
    {stimulus: test_link + "Fc1_3213.png", data: {ftype: "fc1-3213"}},
    //FC3
    {stimulus: test_link + "Fc3_1321.png", data: {ftype: "fc3-1321"}},
    {stimulus: test_link + "Fc3_2132.png", data: {ftype: "fc3-2132"}},
    {stimulus: test_link + "Fc3_2311.png", data: {ftype: "fc3-2311"}},
    {stimulus: test_link + "Fc3_3213.png", data: {ftype: "fc3-3213"}},
    //FC13_1
    {stimulus: test_link + "Fc13_1132.png", data: {ftype: "1132"}},
    {stimulus: test_link + "Fc13_1211.png", data: {ftype: "1211"}},
    {stimulus: test_link + "Fc13_1312.png", data: {ftype: "1312"}},
    {stimulus: test_link + "Fc13_1332.png", data: {ftype: "1332"}},
    //FC13_2
    {stimulus: test_link + "Fc13_2121.png", data: {ftype: "2121"}},
    {stimulus: test_link + "Fc13_2133.png", data: {ftype: "2133"}},
    {stimulus: test_link + "Fc13_2231.png", data: {ftype: "2231"}},
    {stimulus: test_link + "Fc13_2233.png", data: {ftype: "2233"}},
    {stimulus: test_link + "Fc13_2321.png", data: {ftype: "2321"}},
    //FC13_3
    {stimulus: test_link + "Fc13_3221.png", data: {ftype: "3221"}},
    {stimulus: test_link + "Fc13_3313.png", data: {ftype: "3313"}},
    {stimulus: train_link + "Fc13_12232.png", data: {ftype: "12232"}}
];

//test blocks//
var testchoice= {
    type: 'image-slider-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    prompt: '<p style="margin:0px">How likely is this item a <i>Zizu</i>?</p>',
    labels: ['0', '100'],
    slider_width: 1002,
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
var fc11 = jsPsych.data.get().filter({ftype: "fc1-1321"}).select('response').values;
var fc12 = jsPsych.data.get().filter({ftype: "fc1-2132"}).select('response').values;
var fc13 = jsPsych.data.get().filter({ftype: "fc1-2311"}).select('response').values;
var fc14 = jsPsych.data.get().filter({ftype: "fc1-3213"}).select('response').values;
/// FC3
var fc31 = jsPsych.data.get().filter({ftype: "fc3-1321"}).select('response').values;
var fc32 = jsPsych.data.get().filter({ftype: "fc3-2132"}).select('response').values;
var fc33 = jsPsych.data.get().filter({ftype: "fc3-2311"}).select('response').values;
var fc34 = jsPsych.data.get().filter({ftype: "fc3-3213"}).select('response').values;
///FC13_1
var f1132 = jsPsych.data.get().filter({ftype: "1132"}).select('response').values;
var f1211 = jsPsych.data.get().filter({ftype: "1211"}).select('response').values;
var f1312 = jsPsych.data.get().filter({ftype: "1312"}).select('response').values;
///FC13_2
var f2121 = jsPsych.data.get().filter({ftype: "2121"}).select('response').values;
var f2133 = jsPsych.data.get().filter({ftype: "2133"}).select('response').values;
var f2231 = jsPsych.data.get().filter({ftype: "2231"}).select('response').values;
var f2233 = jsPsych.data.get().filter({ftype: "2233"}).select('response').values;
var f2321 = jsPsych.data.get().filter({ftype: "2321"}).select('response').values;
///FC13_3
var f3221 = jsPsych.data.get().filter({ftype: "3221"}).select('response').values;
var f3313 = jsPsych.data.get().filter({ftype: "3313"}).select('response').values;
var f12232= jsPsych.data.get().filter({ftype: "12232"}).select('response').values;

///threshold accuracy
var ex_sum = Number(fc11) + Number(fc12) + Number(fc13) + Number(fc14);
var thresh = test_acc(ex_sum);
function test_acc(ex_sum) {
    var accuracy_threshold = 0;
    if (ex_sum < 200) {
        accuracy_threshold = 0;
    } else if (ex_sum >= 200) {
        accuracy_threshold = 1;
    } return accuracy_threshold;
};

