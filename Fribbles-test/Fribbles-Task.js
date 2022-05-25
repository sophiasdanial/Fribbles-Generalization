//* based on jsPsych v6.x 
/* Fribbles Task */
var timeline = [];
var test_link = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/'
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
    {
    stimulus: test_link + "Fc1_1112.jpg",
    data: {
        leg_type: "1",
        tail2_type: "1",
        tail1_type: "1",
        head_type: "2"}
    },
    {
    stimulus: test_link + "Fc1_1113.jpg",
    data: {
        leg_type: "1",
        tail2_type: "1",
        tail1_type: "1",
        head_type: "3"
        }
    },
    {
        stimulus: test_link + "Fc1_1122.jpg",
        data: {
            head_type: "1",
            tail2_type: "1",
            tail1_type: "2",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1123.jpg",
        data: {
            head_type: "1",
            tail2_type: "1",
            tail1_type: "2",
            leg_type: "3"}
        },
    {   stimulus: test_link + "Fc1_1132.jpg",
        data: {
            head_type: "1",
            tail2_type: "1",
            tail1_type: "3",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1133.jpg",
        data: {
            head_type: "1",
            tail2_type: "1",
            tail1_type: "3",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_1212.jpg",
        data: {
            head_type: "1",
            tail2_type: "2",
            tail1_type: "1",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1213.jpg",
        data: {
            head_type: "1",
            tail2_type: "2",
            tail1_type: "1",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_1222.jpg",
        data: {
            head_type: "1",
            tail2_type: "2",
            tail1_type: "2",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1223.jpg",
        data: {
            head_type: "1",
            tail2_type: "2",
            tail1_type: "2",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_1232.jpg",
        data: {
            head_type: "1",
            tail2_type: "2",
            tail1_type: "3",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1233.jpg",
        data: {
            head_type: "1",
            tail2_type: "2",
            tail1_type: "3",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_1312.jpg",
        data: {
            head_type: "1",
            tail2_type: "3",
            tail1_type: "1",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1313.jpg",
        data: {
            head_type: "1",
            tail2_type: "3",
            tail1_type: "1",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_1322.jpg",
        data: {
            head_type: "1",
            tail2_type: "3",
            tail1_type: "2",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1323.jpg",
        data: {
            head_type: "1",
            tail2_type: "3",
            tail1_type: "2",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_1332.jpg",
        data: {
            head_type: "1",
            tail2_type: "3",
            tail1_type: "3",
            leg_type: "2"}
        },
    {
        stimulus: test_link + "Fc1_1333.jpg",
        data: {
            head_type: "1",
            tail2_type: "3",
            tail1_type: "3",
            leg_type: "3"}
        },
    {
        stimulus: test_link + "Fc1_2111.jpg",
        data: {
            head_type: "2",
            tail2_type: "1",
            tail1_type: "1",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2121.jpg",
        data: {
            head_type: "2",
            tail2_type: "1",
            tail1_type: "2",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2131.jpg",
        data: {
            head_type: "2",
            tail2_type: "1",
            tail1_type: "3",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2211.jpg",
        data: {
            head_type: "2",
            tail2_type: "2",
            tail1_type: "1",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2221.jpg",
        data: {
            head_type: "2",
            tail2_type: "2",
            tail1_type: "2",
            leg_type: "1"}
        },        
    {
        stimulus: test_link + "Fc1_2231.jpg",
        data: {
            head_type: "2",
            tail2_type: "2",
            tail1_type: "3",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2311.jpg",
        data: {
            head_type: "2",
            tail2_type: "3",
            tail1_type: "1",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2321.jpg",
        data: {
            head_type: "2",
            tail2_type: "3",
            tail1_type: "2",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_2331.jpg",
        data: {
            head_type: "2",
            tail2_type: "3",
            tail1_type: "3",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3111.jpg",
        data: {
            head_type: "3",
            tail2_type: "1",
            tail1_type: "1",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3121.jpg",
        data: {
            head_type: "3",
            tail2_type: "1",
            tail1_type: "2",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3131.jpg",
        data: {
            head_type: "3",
            tail2_type: "1",
            tail1_type: "3",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3211.jpg",
        data: {
            head_type: "3",
            tail2_type: "2",
            tail1_type: "1",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3221.jpg",
        data: {
            head_type: "3",
            tail2_type: "2",
            tail1_type: "2",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3231.jpg",
        data: {
            head_type: "3",
            tail2_type: "2",
            tail1_type: "3",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3311.jpg",
        data: {
            head_type: "3",
            tail2_type: "3",
            tail1_type: "1",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3321.jpg",
        data: {
            head_type: "3",
            tail2_type: "3",
            tail1_type: "2",
            leg_type: "1"}
        },
    {
        stimulus: test_link + "Fc1_3331.jpg",
        data: {
            head_type: "3",
            tail2_type: "3",
            tail1_type: "3",
            leg_type: "1"}
        }
];
//test blocks//
var testchoice= {
    type: 'image-slider-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    prompt: '<p>How likely is this item from the category <i>[Zizu]</i>?</p>',
    labels: ['Very Unlikely', 'Very Likely'],
    slider_width: 1000,
    button_label: 'Continue',
};

var testblock = {
    timeline: [testchoice],
    timeline_variables: test_stimuli,
    randomize_order: true,
    data: {
        test_part: 'test'
    }
};

timeline.push(testblock);

/* define results for Qualtrics*/

var total_trials = jsPsych.data.get().filter({
    test_part: 'test'
});

var f1112 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "1",
    tail1_type: "1",
    head_type: "2"
}).select('response').values;
var f1113 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "1",
    tail1_type: "1",
    head_type: "3"
}).select('response').values;
var f1122 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "1",
    tail1_type: "2",
    head_type: "2"
}).select('response').values;
var f1123 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "1",
    tail1_type: "2",
    head_type: "3"
}).select('response').values;
var f1132 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "1",
    tail1_type: "3",
    head_type: "2"
}).select('response').values;
var f1133 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "1",
    tail1_type: "3",
    head_type: "3"
}).select('response').values;

var f1213 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "2",
    tail1_type: "1",
    head_type: "3"
}).select('response').values;
var f1222 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "2",
    tail1_type: "2",
    head_type: "2"
}).select('response').values;
var f1223 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "2",
    tail1_type: "2",
    head_type: "3"
}).select('response').values;
var f1232 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "2",
    tail1_type: "3",
    head_type: "2"
}).select('response').values;
var f1233 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "2",
    tail1_type: "3",
    head_type: "3"
}).select('response').values;

var f1312 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "3",
    tail1_type: "1",
    head_type: "2"
}).select('response').values;
var f1313 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "3",
    tail1_type: "1",
    head_type: "3"
}).select('response').values;
var f1322 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "3",
    tail1_type: "2",
    head_type: "2"
}).select('response').values;
var f1323 = jsPsych.data.get().filter({
    leg_type: "1",
    tail2_type: "3",
    tail1_type: "2",
    head_type: "3"
}).select('response').values;
