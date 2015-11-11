var paths=require('../../config/paths.js');
var async = require(paths.node_module+'async');

module.exports = function (DB, callback){
    var Factroy = "";
    walk('app/user', function(err, files) {
        if (err) throw err;
        var script='\n';
        async.eachSeries(files, function (file, cb) {
            script=script+'<script type="text/javascript" src="'+file.replace("app/user", "/js")+'"></script>\n';
            cb();
        }, function (err) {
            if (err) { throw err; }
            callback({factoryList:Factroy, extjs_app_scripts:script})
        });
    });
};

var fs = require('fs');
var walk = function(dir, done) {
    var results = [];
    fs.readdir(dir, function(err, list) {
        if (err) return done(err);
        var i = 0;
        (function next() {
            var file = list[i++];
            if (!file) return done(null, results);
            file = dir + '/' + file;
            fs.stat(file, function(err, stat) {
                if (stat && stat.isDirectory()) {
                    walk(file, function(err, res) {
                        results = results.concat(res);
                        next();
                    });
                } else {
                    results.push(file);
                    next();
                }
            });
        })();
    });
};
