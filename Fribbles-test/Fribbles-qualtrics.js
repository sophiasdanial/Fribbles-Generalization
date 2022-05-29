Qualtrics.SurveyEngine.addOnload(function () {

    /*Place your JavaScript here to run when the page loads*/

    /* Change 1: Hiding the Next button */
    // Retrieve Qualtrics object and save in qthis
    var qthis = this;

    // Hide buttons
    qthis.hideNextButton();

    /* Change 2: Defining and load required resources */
    // https://cdn.jsdelivr.net/gh/<github-username>/<repository-name>/<experiment-folder>
    var task_github = "https://sophiasdanial.github.io/jsPsych-Navon-Task/";

    // requiredResources must include all the JS files that demo-simple-rt-task-transformed.html uses.
    var requiredResources = [
        task_github + "js/jspsych/jspsych.js",
        task_github + "js/jspsych/plugins/jspsych-html-keyboard-response.js",
        task_github + "js/jspsych/plugins/jspsych-image-slider-response.js",
		task_github + "js/jspsych/plugins/jspsych-preload.js",
        "https://sophiasdanial.github.io/Fribbles-Generalization/Fribbles-test/Fribbles-Task.js"
    ];

    function loadScript(idx) {
        console.log("Loading ", requiredResources[idx]);
        jQuery.getScript(requiredResources[idx], function () {
            if ((idx + 1) < requiredResources.length) {
                loadScript(idx + 1);
            } else {
                initExp();
            }
        });
    }

    if (window.Qualtrics && (!window.frameElement || window.frameElement.id !== "mobile-preview-view")) {
        loadScript(0);
    }

    /* Change 3: Appending the display_stage Div using jQuery */
    // jQuery is loaded in Qualtrics by default
    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<h1></h1>").appendTo('body');
    jQuery("<div class = 'row'></div>").appendTo('body');
    jQuery("<frib></frib>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');
    
    /* Change 4: Wrapping jsPsych.init() in a function */
    function initExp() {

        jsPsych.init({
            timeline: timeline,
            display_element: 'display_stage',
            on_finish: function (data) {
                /* Change 5: Summarizing and save the results to Qualtrics */
                // summarize the results
                
                /// f111_
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
                ///f112_
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
                ///f113_
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
                ///f121_
                var f1212 = jsPsych.data.get().filter({
                    leg_type: "1",
                    tail2_type: "2",
                    tail1_type: "1",
                    head_type: "2"
                }).select('response').values;
                var f1213 = jsPsych.data.get().filter({
                    leg_type: "1",
                    tail2_type: "2",
                    tail1_type: "1",
                    head_type: "3"
                }).select('response').values;
                ///f122_
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
                ///f123_
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
                ///f131_
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
                ///f132_
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
                ///f133_
                var f1332 = jsPsych.data.get().filter({
                    leg_type: "1",
                    tail2_type: "3",
                    tail1_type: "3",
                    head_type: "2"
                }).select('response').values;
                var f1333 = jsPsych.data.get().filter({
                    leg_type: "1",
                    tail2_type: "3",
                    tail1_type: "3",
                    head_type: "3"
                }).select('response').values;
                ///f21__
                var f2111 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "1",
                    tail1_type: "1",
                    head_type: "1"
                }).select('response').values;
                var f2121 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "1",
                    tail1_type: "2",
                    head_type: "1"
                }).select('response').values;
                var f2131 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "1",
                    tail1_type: "3",
                    head_type: "1"
                }).select('response').values;
                ///f22__
                var f2211 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "2",
                    tail1_type: "1",
                    head_type: "1"
                }).select('response').values;
                var f2221 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "2",
                    tail1_type: "2",
                    head_type: "1"
                }).select('response').values;
                var f2231 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "2",
                    tail1_type: "3",
                    head_type: "1"
                }).select('response').values;
                ///f23__
                var f2311 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "3",
                    tail1_type: "1",
                    head_type: "1"
                }).select('response').values;
                var f2321 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "3",
                    tail1_type: "2",
                    head_type: "1"
                }).select('response').values;
                var f2331 = jsPsych.data.get().filter({
                    leg_type: "2",
                    tail2_type: "3",
                    tail1_type: "3",
                    head_type: "1"
                }).select('response').values;
                ///f31__
                var f3111 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "1",
                    tail1_type: "1",
                    head_type: "1"
                }).select('response').values;
                var f3121 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "1",
                    tail1_type: "2",
                    head_type: "1"
                }).select('response').values;
                var f3131 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "1",
                    tail1_type: "3",
                    head_type: "1"
                }).select('response').values;
                ///f32__
                var f3211 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "2",
                    tail1_type: "1",
                    head_type: "1"
                }).select('response').values;
                var f3221 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "2",
                    tail1_type: "2",
                    head_type: "1"
                }).select('response').values;
                var f3231 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "2",
                    tail1_type: "3",
                    head_type: "1"
                }).select('response').values;
                ///f33__
                var f3311 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "3",
                    tail1_type: "1",
                    head_type: "1"
                }).select('response').values;
                var f3321 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "3",
                    tail1_type: "2",
                    head_type: "1"
                }).select('response').values;
                var f3331 = jsPsych.data.get().filter({
                    leg_type: "3",
                    tail2_type: "3",
                    tail1_type: "3",
                    head_type: "1"
                }).select('response').values;

                // save to qualtrics embedded data
                Qualtrics.SurveyEngine.setEmbeddedData("f1112", f1112);
                Qualtrics.SurveyEngine.setEmbeddedData("f1113", f1113);
                Qualtrics.SurveyEngine.setEmbeddedData("f1122", f1122);
                Qualtrics.SurveyEngine.setEmbeddedData("f1123", f1123);
                Qualtrics.SurveyEngine.setEmbeddedData("f1132", f1132);
                Qualtrics.SurveyEngine.setEmbeddedData("f1132", f1132);
                Qualtrics.SurveyEngine.setEmbeddedData("f1133", f1133);
                Qualtrics.SurveyEngine.setEmbeddedData("f1212", f1212);
                Qualtrics.SurveyEngine.setEmbeddedData("f1213", f1213);
                Qualtrics.SurveyEngine.setEmbeddedData("f1222", f1222);
                Qualtrics.SurveyEngine.setEmbeddedData("f1223", f1223);
                Qualtrics.SurveyEngine.setEmbeddedData("f1232", f1232);
                Qualtrics.SurveyEngine.setEmbeddedData("f1233", f1233);
                Qualtrics.SurveyEngine.setEmbeddedData("f1312", f1312);
                Qualtrics.SurveyEngine.setEmbeddedData("f1313", f1313);
                Qualtrics.SurveyEngine.setEmbeddedData("f1322", f1322);
                Qualtrics.SurveyEngine.setEmbeddedData("f1323", f1323);
                Qualtrics.SurveyEngine.setEmbeddedData("f1332", f1332);
                Qualtrics.SurveyEngine.setEmbeddedData("f1333", f1333);
                Qualtrics.SurveyEngine.setEmbeddedData("f2111", f2111);
                Qualtrics.SurveyEngine.setEmbeddedData("f2121", f2121);
                Qualtrics.SurveyEngine.setEmbeddedData("f2131", f2131);
                Qualtrics.SurveyEngine.setEmbeddedData("f2211", f2211);
                Qualtrics.SurveyEngine.setEmbeddedData("f2221", f2221);
                Qualtrics.SurveyEngine.setEmbeddedData("f2231", f2231);
                Qualtrics.SurveyEngine.setEmbeddedData("f2311", f2311);
                Qualtrics.SurveyEngine.setEmbeddedData("f2321", f2321);
                Qualtrics.SurveyEngine.setEmbeddedData("f2331", f2331);
                Qualtrics.SurveyEngine.setEmbeddedData("f3111", f3111);
                Qualtrics.SurveyEngine.setEmbeddedData("f3121", f3121);
                Qualtrics.SurveyEngine.setEmbeddedData("f3131", f3131);
                Qualtrics.SurveyEngine.setEmbeddedData("f3211", f3211);
                Qualtrics.SurveyEngine.setEmbeddedData("f3221", f3221);
                Qualtrics.SurveyEngine.setEmbeddedData("f3231", f3231);
                Qualtrics.SurveyEngine.setEmbeddedData("f3311", f3311);
                Qualtrics.SurveyEngine.setEmbeddedData("f3321", f3321);
                Qualtrics.SurveyEngine.setEmbeddedData("f3331", f3331);

                /* Change 6: Adding the clean up and continue functions.*/
                // clear the stage
                jQuery('#display_stage').remove();
                jQuery('#display_stage_background').remove();

                // simulate click on Qualtrics "next" button, making use of the Qualtrics JS API
                qthis.clickNextButton();
            }
        });
    }
});

Qualtrics.SurveyEngine.addOnReady(function () {
    /*Place your JavaScript here to run when the page is fully displayed*/

});

Qualtrics.SurveyEngine.addOnUnload(function () {
    /*Place your JavaScript here to run when the page is unloaded*/

});