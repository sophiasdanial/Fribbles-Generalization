Qualtrics.SurveyEngine.addOnload(function () {

    /*Place your JavaScript here to run when the page loads*/


    var qthis = this;

    qthis.hideNextButton();

    
    var task_github = "https://sophiasdanial.github.io/jsPsych-Navon-Task/";
    var requiredResources = [
        task_github + "js/jspsych/jspsych.js",
        task_github + "js/jspsych/plugins/jspsych-html-keyboard-response.js",
        task_github + "js/jspsych/plugins/jspsych-image-slider-response.js",
		task_github + "js/jspsych/plugins/jspsych-preload.js",
        task_github + "js/jspsych/plugins/jspsych-fullscreen.js",
        "https://sophiasdanial.github.io/Fribbles-Generalization/Fribbles-test/Fribbles-Fb1.js"
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