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
  var config = grunt.config('shrinkwrap'),
      env = config.dev ? "--dev" : "--production";

  exec(grunt, 'npm shrinkwrap ' + env, 'shrinkwrapping failed.');
}

function dedupe(grunt) {
  exec(grunt, 'npm dedupe', 'dedupe failed.');
}

function prune(grunt) {
  exec(grunt, 'npm prune', 'prune failed');
}

module.exports = function(grunt) {
  grunt.registerTask('shrinkwrap', 'Grunt task for shrinkwrapping your projects dependencies via npm shrinkwrap', function() {
    var config = grunt.config('shrinkwrap');

    if (config.prune) {
      prune(grunt);
    }

    if (config.dedupe) {
      dedupe(grunt);
    }

    shrinkwrap(grunt);
  });
};
