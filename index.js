"use strict";

var throng = require('throng');
var express = require("express");
var app = express();

function start(id) {
    var port = process.env.PORT || 9000;
    var env = app.get("env");

    app.get('/', function(req, res) {
        res.send("\n\nhello world, I'm the worker " + id + "\n\n");
    });

    app.listen(port, function () {
        console.log("Running in " + env +" on port " + port + " and my worker ID is " + id +".");
    });
}

var WORKERS = process.env.WEB_CONCURRENCY || 1;
throng({
    workers: WORKERS,
    lifetime: Infinity,
    start: start
});


