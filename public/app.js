"use strict";
var learnjs = {};

learnjs.problemView = function(id) {
    return $('<div class="problem-view">').text("Problem #" + id + " coming soon!");
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