Qualtrics.SurveyEngine.addOnload(function () {

    var qthis = this;

    qthis.hideNextButton();

    var task_github = "https://sophiasdanial.github.io/jsPsych-Navon-Task/";

    var requiredResources = [
        task_github + "js/jspsych/jspsych.js",
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

    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');
    
    function initExp() {

        jsPsych.init({
            timeline: timeline,
            display_element: 'display_stage',
            auto_update_progress_bar: false,
            show_progress_bar: true,
            on_finish: function (data) {

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

                var browser = jsPsych.data.getInteractionData()

                // save to qualtrics embedded data
                Qualtrics.SurveyEngine.setEmbeddedData("fc12", fc12);
                Qualtrics.SurveyEngine.setEmbeddedData("fc13", fc13);
                Qualtrics.SurveyEngine.setEmbeddedData("fc14", fc14);

                Qualtrics.SurveyEngine.setEmbeddedData("fc22", fc22);
                Qualtrics.SurveyEngine.setEmbeddedData("fc23", fc23);
                Qualtrics.SurveyEngine.setEmbeddedData("fc24", fc24);

                Qualtrics.SurveyEngine.setEmbeddedData("fc32", fc32);
                Qualtrics.SurveyEngine.setEmbeddedData("fc33", fc33);
                Qualtrics.SurveyEngine.setEmbeddedData("fc34", fc34);

                Qualtrics.SurveyEngine.setEmbeddedData("browser", browser);

                jQuery('#display_stage').remove();
                jQuery('#display_stage_background').remove();

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