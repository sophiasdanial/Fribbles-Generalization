//* based on jsPsych v6.x 
/* Fribbles Task */
var timeline = [];
var trial_count = 81;
var test_link = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/'
var train_link = 'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/'
var preload = {
    type: 'preload',
    show_progress_bar: true,
    message: 'Loading images... Please wait',
    images: [
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/1000pxslidermarkings.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_1111.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1112.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1113.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1121.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1122.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1123.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1131.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1132.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1133.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1211.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_1212.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1213.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1221.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1222.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1223.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1231.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1232.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1233.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1311.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1312.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_1313.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1321.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1322.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1323.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1331.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1332.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_1333.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2111.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2112.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2113.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2121.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2122.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_2123.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2131.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2132.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2133.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2211.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2212.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2213.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_2221.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2222.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2223.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2231.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2232.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2233.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2311.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2312.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2313.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2321.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_2322.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2323.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2331.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2332.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_2333.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3111.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3112.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3113.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3121.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3122.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3123.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3131.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_3132.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3133.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3211.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3212.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3213.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3221.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3222.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3223.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3231.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3232.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_3233.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3311.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3312.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3313.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3321.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3322.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3323.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-training/Fc1_3331.png',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3332.jpg',
        'https://sophiasdanial.github.io/Fribbles-Generalization/images/Fc1-test/Fc1_3333.jpg'
    ]
}
timeline.push(preload)

/////// List stimuli /////////
// note - test stimuli contains either Head 1 or Leg 1
var test_stimuli = [
    {stimulus: train_link + "Fc1_1111.png", data: {ftype: "1111"}},
    {stimulus: test_link + "Fc1_1112.jpg", data: {ftype: "1112"}},
    {stimulus: test_link + "Fc1_1113.jpg", data: {ftype: "1113"}},
    //112
    {stimulus: test_link + "Fc1_1121.jpg", data: {ftype: "1121"}},
    {stimulus: test_link + "Fc1_1122.jpg", data: {ftype: "1122"}},
    {stimulus: test_link + "Fc1_1123.jpg", data: {ftype: "1123"}},
    //113
    {stimulus: test_link + "Fc1_1131.jpg", data: {ftype: "1131"}},
    {stimulus: test_link + "Fc1_1132.jpg", data: {ftype: "1132"}},
    {stimulus: test_link + "Fc1_1133.jpg", data: {ftype: "1133"}},
    //121
    {stimulus: test_link + "Fc1_1211.jpg", data: {ftype: "1211"}},
    {stimulus: train_link + "Fc1_1212.png", data: {ftype: "1212"}},
    {stimulus: test_link + "Fc1_1213.jpg", data: {ftype: "1213"}},
    //122
    {stimulus: test_link + "Fc1_1221.jpg", data: {ftype: "1221"}},
    {stimulus: test_link + "Fc1_1222.jpg", data: {ftype: "1222"}},
    {stimulus: test_link + "Fc1_1223.jpg", data: {ftype: "1223"}},
    //123
    {stimulus: test_link + "Fc1_1231.jpg", data: {ftype: "1231"}},
    {stimulus: test_link + "Fc1_1232.jpg", data: {ftype: "1232"}},
    {stimulus: test_link + "Fc1_1233.jpg", data: {ftype: "1233"}},
    //131
    {stimulus: test_link + "Fc1_1311.jpg", data: {ftype: "1311"}},
    {stimulus: test_link + "Fc1_1312.jpg", data: {ftype: "1312"}},
    {stimulus: train_link + "Fc1_1313.png", data: {ftype: "1313"}},
    //132
    {stimulus: test_link + "Fc1_1321.jpg", data: {ftype: "1321"}},
    {stimulus: test_link + "Fc1_1322.jpg", data: {ftype: "1322"}},
    {stimulus: test_link + "Fc1_1323.jpg", data: {ftype: "1323"}},
    //133
    {stimulus: test_link + "Fc1_1331.jpg", data: {ftype: "1331"}},
    {stimulus: test_link + "Fc1_1332.jpg", data: {ftype: "1332"}},
    {stimulus: test_link + "Fc1_1333.jpg", data: {ftype: "1333"}},
    //////////
    {stimulus: test_link + "Fc1_2111.jpg", data: {ftype: "2111"}},
    {stimulus: test_link + "Fc1_2112.jpg", data: {ftype: "2112"}},
    {stimulus: test_link + "Fc1_2113.jpg", data: {ftype: "2113"}},
    //212
    {stimulus: test_link + "Fc1_2121.jpg", data: {ftype: "2121"}},
    {stimulus: test_link + "Fc1_2122.jpg", data: {ftype: "2122"}},
    {stimulus: train_link + "Fc1_2123.png", data: {ftype: "2123"}},
    //213
    {stimulus: test_link + "Fc1_2131.jpg", data: {ftype: "2131"}},
    {stimulus: test_link + "Fc1_2132.jpg", data: {ftype: "2132"}},
    {stimulus: test_link + "Fc1_2133.jpg", data: {ftype: "2133"}},
    //221
    {stimulus: test_link + "Fc1_2211.jpg", data: {ftype: "2211"}},
    {stimulus: test_link + "Fc1_2212.jpg", data: {ftype: "2212"}},
    {stimulus: test_link + "Fc1_2213.jpg", data: {ftype: "2213"}},
    //222
    {stimulus: train_link + "Fc1_2221.png", data: {ftype: "2221"}},
    {stimulus: test_link + "Fc1_2222.jpg", data: {ftype: "2222"}},
    {stimulus: test_link + "Fc1_2223.jpg", data: {ftype: "2223"}},
    //223
    {stimulus: test_link + "Fc1_2231.jpg", data: {ftype: "2231"}},
    {stimulus: test_link + "Fc1_2232.jpg", data: {ftype: "2232"}},
    {stimulus: test_link + "Fc1_2233.jpg", data: {ftype: "2233"}},
    //231
    {stimulus: test_link + "Fc1_2311.jpg", data: {ftype: "2311"}},
    {stimulus: test_link + "Fc1_2312.jpg", data: {ftype: "2312"}},
    {stimulus: test_link + "Fc1_2313.jpg", data: {ftype: "2313"}},
    //232
    {stimulus: test_link + "Fc1_2321.jpg", data: {ftype: "2321"}},
    {stimulus: train_link + "Fc1_2322.png", data: {ftype: "2322"}},
    {stimulus: test_link + "Fc1_2323.jpg", data: {ftype: "2323"}},
    //233
    {stimulus: test_link + "Fc1_2331.jpg", data: {ftype: "2331"}},
    {stimulus: test_link + "Fc1_2332.jpg", data: {ftype: "2332"}},
    {stimulus: test_link + "Fc1_2333.jpg", data: {ftype: "2333"}},
    //////////
    {stimulus: test_link + "Fc1_3111.jpg", data: {ftype: "3111"}},
    {stimulus: test_link + "Fc1_3112.jpg", data: {ftype: "3112"}},
    {stimulus: test_link + "Fc1_3113.jpg", data: {ftype: "3113"}},
    //312
    {stimulus: test_link + "Fc1_3121.jpg", data: {ftype: "3121"}},
    {stimulus: test_link + "Fc1_3122.jpg", data: {ftype: "3122"}},
    {stimulus: test_link + "Fc1_3123.jpg", data: {ftype: "3123"}},
    //313
    {stimulus: test_link + "Fc1_3131.jpg", data: {ftype: "3131"}},
    {stimulus: train_link + "Fc1_3132.png", data: {ftype: "3132"}},
    {stimulus: test_link + "Fc1_3133.jpg", data: {ftype: "3133"}},
    //321
    {stimulus: test_link + "Fc1_3211.jpg", data: {ftype: "3211"}},
    {stimulus: test_link + "Fc1_3212.jpg", data: {ftype: "3212"}},
    {stimulus: test_link + "Fc1_3213.jpg", data: {ftype: "3213"}},
    //322
    {stimulus: test_link + "Fc1_3221.jpg", data: {ftype: "3221"}},
    {stimulus: test_link + "Fc1_3222.jpg", data: {ftype: "3222"}},
    {stimulus: test_link + "Fc1_3223.jpg", data: {ftype: "3223"}},
    //323
    {stimulus: test_link + "Fc1_3231.jpg", data: {ftype: "3231"}},
    {stimulus: test_link + "Fc1_3232.jpg", data: {ftype: "3232"}},
    {stimulus: train_link + "Fc1_3233.png", data: {ftype: "3233"}},
    //331
    {stimulus: test_link + "Fc1_3311.jpg", data: {ftype: "3312"}},
    {stimulus: test_link + "Fc1_3312.jpg", data: {ftype: "3312"}},
    {stimulus: test_link + "Fc1_3313.jpg", data: {ftype: "3313"}},
    //332
    {stimulus: test_link + "Fc1_3321.jpg", data: {ftype: "3321"}},
    {stimulus: test_link + "Fc1_3322.jpg", data: {ftype: "3322"}},
    {stimulus: test_link + "Fc1_3323.jpg", data: {ftype: "3323"}},
    //333
    {stimulus: train_link + "Fc1_3331.png", data: {ftype: "3331"}},
    {stimulus: test_link + "Fc1_3332.jpg", data: {ftype: "3332"}},
    {stimulus: test_link + "Fc1_3333.jpg", data: {ftype: "3333"}}
];

//test blocks//
var testchoice= {
    type: 'image-slider-response',
    stimulus: jsPsych.timelineVariable('stimulus'),
    data: jsPsych.timelineVariable('data'),
    prompt: '<p style="margin:0px">How likely is this item from the category <i>[Zizu]</i>?</p>',
    labels: ['0', '100'],
    slider_width: 1002,
    button_label: 'continue',
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

/// f111_
var f1111 = jsPsych.data.get().filter({ftype: "1111"}).select('response').values;
var f1112 = jsPsych.data.get().filter({ftype: "1112"}).select('response').values;
var f1113 = jsPsych.data.get().filter({ftype: "1113"}).select('response').values;
///f112_
var f1121 = jsPsych.data.get().filter({ftype: "1121"}).select('response').values;
var f1122 = jsPsych.data.get().filter({ftype: "1122"}).select('response').values;
var f1123 = jsPsych.data.get().filter({ftype: "1123"}).select('response').values;
///f113_
var f1131 = jsPsych.data.get().filter({ftype: "1131"}).select('response').values;
var f1132 = jsPsych.data.get().filter({ftype: "1132"}).select('response').values;
var f1133 = jsPsych.data.get().filter({ftype: "1133"}).select('response').values;
///f121_
var f1211 = jsPsych.data.get().filter({ftype: "1211"}).select('response').values;
var f1212 = jsPsych.data.get().filter({ftype: "1212"}).select('response').values;
var f1213 = jsPsych.data.get().filter({ftype: "1213"}).select('response').values;
///f122_
var f1221 = jsPsych.data.get().filter({ftype: "1221"}).select('response').values;
var f1222 = jsPsych.data.get().filter({ftype: "1222"}).select('response').values;
var f1223 = jsPsych.data.get().filter({ftype: "1223"}).select('response').values;
///f123_
var f1231 = jsPsych.data.get().filter({ftype: "1231"}).select('response').values;
var f1232 = jsPsych.data.get().filter({ftype: "1232"}).select('response').values;
var f1233 = jsPsych.data.get().filter({ftype: "1233"}).select('response').values;
///f131_
var f1311 = jsPsych.data.get().filter({ftype: "1311"}).select('response').values;
var f1312 = jsPsych.data.get().filter({ftype: "1312"}).select('response').values;
var f1313 = jsPsych.data.get().filter({ftype: "1313"}).select('response').values;
///f132_
var f1321 = jsPsych.data.get().filter({ftype: "1321"}).select('response').values;
var f1322 = jsPsych.data.get().filter({ftype: "1322"}).select('response').values;
var f1323 = jsPsych.data.get().filter({ftype: "1323"}).select('response').values;
///f133_
var f1331 = jsPsych.data.get().filter({ftype: "1331"}).select('response').values;
var f1332 = jsPsych.data.get().filter({ftype: "1332"}).select('response').values;
var f1333 = jsPsych.data.get().filter({ftype: "1333"}).select('response').values;
///f211_
var f2111 = jsPsych.data.get().filter({ftype: "2111"}).select('response').values;
var f2112 = jsPsych.data.get().filter({ftype: "2112"}).select('response').values;
var f2113 = jsPsych.data.get().filter({ftype: "2113"}).select('response').values;
///f212_
var f2121 = jsPsych.data.get().filter({ftype: "2121"}).select('response').values;
var f2122 = jsPsych.data.get().filter({ftype: "2122"}).select('response').values;
var f2123 = jsPsych.data.get().filter({ftype: "2123"}).select('response').values;
///f213_
var f2131 = jsPsych.data.get().filter({ftype: "2131"}).select('response').values;
var f2132 = jsPsych.data.get().filter({ftype: "2132"}).select('response').values;
var f2133 = jsPsych.data.get().filter({ftype: "2133"}).select('response').values;
///f221_
var f2211 = jsPsych.data.get().filter({ftype: "2211"}).select('response').values;
var f2212 = jsPsych.data.get().filter({ftype: "2212"}).select('response').values;
var f2213 = jsPsych.data.get().filter({ftype: "2213"}).select('response').values;
///f222_
var f2221 = jsPsych.data.get().filter({ftype: "2221"}).select('response').values;
var f2222 = jsPsych.data.get().filter({ftype: "2222"}).select('response').values;
var f2223 = jsPsych.data.get().filter({ftype: "2223"}).select('response').values;
///f223_
var f2231 = jsPsych.data.get().filter({ftype: "2231"}).select('response').values;
var f2232 = jsPsych.data.get().filter({ftype: "2232"}).select('response').values;
var f2233 = jsPsych.data.get().filter({ftype: "2233"}).select('response').values;
///f231_
var f2311 = jsPsych.data.get().filter({ftype: "2311"}).select('response').values;
var f2312 = jsPsych.data.get().filter({ftype: "2312"}).select('response').values;
var f2313 = jsPsych.data.get().filter({ftype: "2313"}).select('response').values;
///f232_
var f2321 = jsPsych.data.get().filter({ftype: "2321"}).select('response').values;
var f2322 = jsPsych.data.get().filter({ftype: "2322"}).select('response').values;
var f2323 = jsPsych.data.get().filter({ftype: "2323"}).select('response').values;
///f233
var f2331 = jsPsych.data.get().filter({ftype: "2331"}).select('response').values;
var f2332 = jsPsych.data.get().filter({ftype: "2332"}).select('response').values;
var f2333 = jsPsych.data.get().filter({ftype: "2333"}).select('response').values;
///f311_
var f3111 = jsPsych.data.get().filter({ftype: "3111"}).select('response').values;
var f3112 = jsPsych.data.get().filter({ftype: "3112"}).select('response').values;
var f3113 = jsPsych.data.get().filter({ftype: "3113"}).select('response').values;
///f312
var f3121 = jsPsych.data.get().filter({ftype: "3121"}).select('response').values;
var f3122 = jsPsych.data.get().filter({ftype: "3122"}).select('response').values;
var f3123 = jsPsych.data.get().filter({ftype: "3123"}).select('response').values;
///f313_
var f3131 = jsPsych.data.get().filter({ftype: "3131"}).select('response').values;
var f3132 = jsPsych.data.get().filter({ftype: "3132"}).select('response').values;
var f3133 = jsPsych.data.get().filter({ftype: "3133"}).select('response').values;
///f321
var f3211 = jsPsych.data.get().filter({ftype: "3211"}).select('response').values;
var f3212 = jsPsych.data.get().filter({ftype: "3212"}).select('response').values;
var f3213 = jsPsych.data.get().filter({ftype: "3213"}).select('response').values;
///f322
var f3221 = jsPsych.data.get().filter({ftype: "3221"}).select('response').values;
var f3222 = jsPsych.data.get().filter({ftype: "3222"}).select('response').values;
var f3223 = jsPsych.data.get().filter({ftype: "3223"}).select('response').values;
///f323_
var f3231 = jsPsych.data.get().filter({ftype: "3231"}).select('response').values;
var f3232 = jsPsych.data.get().filter({ftype: "3232"}).select('response').values;
var f3233 = jsPsych.data.get().filter({ftype: "3233"}).select('response').values;
///f331_
var f3311 = jsPsych.data.get().filter({ftype: "3311"}).select('response').values;
var f3312 = jsPsych.data.get().filter({ftype: "3312"}).select('response').values;
var f3313 = jsPsych.data.get().filter({ftype: "3313"}).select('response').values;
///f332_
var f3321 = jsPsych.data.get().filter({ftype: "3321"}).select('response').values;
var f3322 = jsPsych.data.get().filter({ftype: "3322"}).select('response').values;
var f3323 = jsPsych.data.get().filter({ftype: "3323"}).select('response').values;
///f333_
var f3331 = jsPsych.data.get().filter({ftype: "3331"}).select('response').values;
var f3332 = jsPsych.data.get().filter({ftype: "3332"}).select('response').values;
var f3333 = jsPsych.data.get().filter({ftype: "3333"}).select('response').values;

///threshold accuracy
var ex_sum = Number(f1111) + Number(f1212) + Number(f1313) + Number(f2123) + Number(f2221) + Number(f2322) + Number(f3132) + Number(f3233) + Number(f3331);
var thresh = test_acc(ex_sum);
function test_acc(ex_sum) {
    var accuracy_threshold = 0;
    if (ex_sum < 630) {
        accuracy_threshold = 0;
    } else if (ex_sum >= 630) {
        accuracy_threshold = 1;
    } return accuracy_threshold;
};

