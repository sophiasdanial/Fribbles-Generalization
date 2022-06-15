Qualtrics.SurveyEngine.addOnload(function () {

    var qthis = this;

    qthis.hideNextButton();

    var task_github = "https://sophiasdanial.github.io/jsPsych-Navon-Task/";

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

    jQuery("<div id = 'display_stage_background'></div>").appendTo('body');
    jQuery("<div id = 'display_stage'></div>").appendTo('body');
    
    function initExp() {

        jsPsych.init({
            timeline: timeline,
            display_element: 'display_stage',
            auto_update_progress_bar: false,
            show_progress_bar: true,
            on_finish: function (data) {

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

                ////threshold accuracy 
                var accuracy_threshold = []







                // save to qualtrics embedded data
                Qualtrics.SurveyEngine.setEmbeddedData("f1111", f1111);
                Qualtrics.SurveyEngine.setEmbeddedData("f1112", f1112);
                Qualtrics.SurveyEngine.setEmbeddedData("f1113", f1113);

                Qualtrics.SurveyEngine.setEmbeddedData("f1121", f1121);
                Qualtrics.SurveyEngine.setEmbeddedData("f1122", f1122);
                Qualtrics.SurveyEngine.setEmbeddedData("f1123", f1123);

                Qualtrics.SurveyEngine.setEmbeddedData("f1131", f1131);
                Qualtrics.SurveyEngine.setEmbeddedData("f1132", f1132);
                Qualtrics.SurveyEngine.setEmbeddedData("f1133", f1133);

                Qualtrics.SurveyEngine.setEmbeddedData("f1211", f1211);
                Qualtrics.SurveyEngine.setEmbeddedData("f1212", f1212);
                Qualtrics.SurveyEngine.setEmbeddedData("f1213", f1213);

                Qualtrics.SurveyEngine.setEmbeddedData("f1221", f1221);
                Qualtrics.SurveyEngine.setEmbeddedData("f1222", f1222);
                Qualtrics.SurveyEngine.setEmbeddedData("f1223", f1223);

                Qualtrics.SurveyEngine.setEmbeddedData("f1231", f1231);
                Qualtrics.SurveyEngine.setEmbeddedData("f1232", f1232);
                Qualtrics.SurveyEngine.setEmbeddedData("f1233", f1233);

                Qualtrics.SurveyEngine.setEmbeddedData("f1311", f1311);
                Qualtrics.SurveyEngine.setEmbeddedData("f1312", f1312);
                Qualtrics.SurveyEngine.setEmbeddedData("f1313", f1313);

                Qualtrics.SurveyEngine.setEmbeddedData("f1321", f1321);
                Qualtrics.SurveyEngine.setEmbeddedData("f1322", f1322);
                Qualtrics.SurveyEngine.setEmbeddedData("f1323", f1323);

                Qualtrics.SurveyEngine.setEmbeddedData("f1331", f1331);
                Qualtrics.SurveyEngine.setEmbeddedData("f1332", f1332);
                Qualtrics.SurveyEngine.setEmbeddedData("f1333", f1333);

                Qualtrics.SurveyEngine.setEmbeddedData("f2111", f2111);
                Qualtrics.SurveyEngine.setEmbeddedData("f2112", f2112);
                Qualtrics.SurveyEngine.setEmbeddedData("f2113", f2113);

                Qualtrics.SurveyEngine.setEmbeddedData("f2121", f2121);
                Qualtrics.SurveyEngine.setEmbeddedData("f2122", f2122);
                Qualtrics.SurveyEngine.setEmbeddedData("f2123", f2123);

                Qualtrics.SurveyEngine.setEmbeddedData("f2131", f2131);
                Qualtrics.SurveyEngine.setEmbeddedData("f2132", f2132);
                Qualtrics.SurveyEngine.setEmbeddedData("f2133", f2133);

                Qualtrics.SurveyEngine.setEmbeddedData("f2211", f2211);
                Qualtrics.SurveyEngine.setEmbeddedData("f2212", f2212);
                Qualtrics.SurveyEngine.setEmbeddedData("f2213", f2213);

                Qualtrics.SurveyEngine.setEmbeddedData("f2221", f2221);
                Qualtrics.SurveyEngine.setEmbeddedData("f2222", f2222);
                Qualtrics.SurveyEngine.setEmbeddedData("f2223", f2223);

                Qualtrics.SurveyEngine.setEmbeddedData("f2231", f2231);
                Qualtrics.SurveyEngine.setEmbeddedData("f2232", f2232);
                Qualtrics.SurveyEngine.setEmbeddedData("f2233", f2233);

                Qualtrics.SurveyEngine.setEmbeddedData("f2311", f2311);
                Qualtrics.SurveyEngine.setEmbeddedData("f2312", f2312);
                Qualtrics.SurveyEngine.setEmbeddedData("f2313", f2313);

                Qualtrics.SurveyEngine.setEmbeddedData("f2321", f2321);
                Qualtrics.SurveyEngine.setEmbeddedData("f2322", f2322);
                Qualtrics.SurveyEngine.setEmbeddedData("f2323", f2323);

                Qualtrics.SurveyEngine.setEmbeddedData("f2331", f2331);
                Qualtrics.SurveyEngine.setEmbeddedData("f2332", f2332);
                Qualtrics.SurveyEngine.setEmbeddedData("f2333", f2333);

                Qualtrics.SurveyEngine.setEmbeddedData("f3111", f3111);
                Qualtrics.SurveyEngine.setEmbeddedData("f3112", f3112);
                Qualtrics.SurveyEngine.setEmbeddedData("f3113", f3113);

                Qualtrics.SurveyEngine.setEmbeddedData("f3121", f3121);
                Qualtrics.SurveyEngine.setEmbeddedData("f3122", f3122);
                Qualtrics.SurveyEngine.setEmbeddedData("f3123", f3123);

                Qualtrics.SurveyEngine.setEmbeddedData("f3131", f3131);
                Qualtrics.SurveyEngine.setEmbeddedData("f3132", f3132);
                Qualtrics.SurveyEngine.setEmbeddedData("f3133", f3133);

                Qualtrics.SurveyEngine.setEmbeddedData("f3211", f3211);
                Qualtrics.SurveyEngine.setEmbeddedData("f3212", f3212);
                Qualtrics.SurveyEngine.setEmbeddedData("f3213", f3213);

                Qualtrics.SurveyEngine.setEmbeddedData("f3221", f3221);
                Qualtrics.SurveyEngine.setEmbeddedData("f3222", f3222);
                Qualtrics.SurveyEngine.setEmbeddedData("f3223", f3223);

                Qualtrics.SurveyEngine.setEmbeddedData("f3231", f3231);
                Qualtrics.SurveyEngine.setEmbeddedData("f3232", f3232);
                Qualtrics.SurveyEngine.setEmbeddedData("f3233", f3233);


                Qualtrics.SurveyEngine.setEmbeddedData("f3311", f3311);
                Qualtrics.SurveyEngine.setEmbeddedData("f3312", f3312);
                Qualtrics.SurveyEngine.setEmbeddedData("f3313", f3313);

                Qualtrics.SurveyEngine.setEmbeddedData("f3321", f3321);
                Qualtrics.SurveyEngine.setEmbeddedData("f3322", f3322);
                Qualtrics.SurveyEngine.setEmbeddedData("f3323", f3323);

                Qualtrics.SurveyEngine.setEmbeddedData("f3331", f3331);
                Qualtrics.SurveyEngine.setEmbeddedData("f3332", f3332);
                Qualtrics.SurveyEngine.setEmbeddedData("f3333", f3333);

                Qualtrics.SurveyEngine.setEmbeddedData("threshold", accuracy_threshold);


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