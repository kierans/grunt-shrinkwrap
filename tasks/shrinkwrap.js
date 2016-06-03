/*
 * grunt-shrinkwrap
 * https://github.com/mstuart/grunt-shrinkwrap
 *
 * Copyright (c) 2014 mstuart
 * Licensed under the MIT license.
 */

'use strict';

var shelljs = require('shelljs');

function exec(grunt, cmd, errorMsg) {
  var result = shelljs.exec(cmd);

  if (result.code !== 0) {
    grunt.fatal(errorMsg);
  }
}

function shrinkwrap(grunt) {
  exec(grunt, 'npm shrinkwrap --production', 'shrinkwrapping failed.');
}

function dedupe(grunt) {
  exec(grunt, 'npm dedupe', 'dedupe failed.');
}

module.exports = function(grunt) {
  grunt.registerTask('shrinkwrap', 'Grunt task for shrinkwrapping your projects dependencies via npm shrinkwrap', function() {
    var config = grunt.config('shrinkwrap');

    if (config.dedupe) {
      dedupe(grunt);
    }

    shrinkwrap(grunt);
  });
};
