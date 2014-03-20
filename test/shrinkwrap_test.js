'use strict';

var grunt = require('grunt');

exports.shrinkwrap = {
  setUp: function(done) {
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var expected = grunt.file.read('test/expected/npm-shrinkwrap.json');
    var actual = grunt.file.read('npm-shrinkwrap.json');

    test.equal(actual, expected, 'should have generated an npm-shrinkwrap.json');

    test.done();
  }
};
