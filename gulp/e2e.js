/**
 * Created by rca733 on 9/13/15.
 */
'use strict';

var path = require('path');
var gulp = require('gulp');
var conf = require('./conf');
var protractor = require('gulp-protractor');

var $ = require('gulp-load-plugins');

// Downloads the selenium webdriver
gulp.task('webdriver-update', protractor.webdriver_update);

gulp.task('webdriver-standalone', protractor.webdriver_standalone);

function runProtractor (done) {
    var params = process.argv;
    var args = params.length > 3 ? [params[3], params[4]] : [];

    gulp.src(path.join(conf.paths.e2e, '/**/*.js'))
        .pipe(protractor.protractor({
            configFile: 'protractor.conf.js',
            args: args
        }))
        .on('error', function (err) {
            // Make sure failed tests cause gulp to exit non-zero
            throw err;
        })
        .on('end', function () {
            // Close browser sync server
            done();
        });
}

gulp.task('protractor', ['protractor:src']);
gulp.task('protractor:src', [ 'webdriver-update'], runProtractor);
gulp.task('protractor:dist', ['serve:e2e-dist', 'webdriver-update'], runProtractor);
