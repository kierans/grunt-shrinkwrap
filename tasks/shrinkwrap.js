/*
 * grunt-shrinkwrap
 * https://github.com/mstuart/grunt-shrinkwrap
 *
 * Copyright (c) 2014 mstuart
 * Licensed under the MIT license.
 */

'use strict';

var shelljs = require('shelljs');

module.exports = function(grunt) {

  grunt.registerTask('shrinkwrap', 'Grunt task for shrinkwrapping your projects dependencies via npm shrinkwrap', function() {
    var result = shelljs.exec('npm shrinkwrap --production');

    if (result.code !== 0) {
      grunt.fatal("shrinkwrapping failed.");
    }
  });

};
