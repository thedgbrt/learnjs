"use strict";
var learnjs = {};

learnjs.problems = [
    {
        description: "What is truth?",
        code: "function problem() { return __; }"
    },
    {
        description: "Simple Math",
        code: "function problem() { return 42 === 6 * __; }"
    }
];

learnjs.applyObject = function(obj, el) {
    for (var key in obj) {
        el.find('[data-name="' + key + '"]').text(obj[key]);
    }
}

learnjs.problemView = function(id) {
    var view = $('.templates .problem-view').clone();
    view.find('.title').text("Problem #" + id);
    learnjs.applyObject(learnjs.problems[id-1], view);
    return view;
}

learnjs.showView = function(hash) {
    if(typeof(hash) === "undefined")
        return false;

    var routes = {
        "#problem": learnjs.problemView
    };
    
    var params = hash.split("-");
    
    var viewFn = routes[params[0]];

    if(viewFn) {
        $(".view-container").empty().append(viewFn(params[1]));
    }
}

learnjs.appOnReady = function() {
    var load = function() {
        return learnjs.showView(window.location.hash);
    }
    $(window).on("hashchange", load);
    load();
}