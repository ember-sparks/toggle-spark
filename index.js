/* jshint node: true */
'use strict';

var nesting = require('postcss-nesting');
var autoprefixer = require('autoprefixer');

module.exports = {
  name: 'ember-toggle-spark',

  options: {
    cssModules: {
      plugins: [
        nesting(),
        autoprefixer('last 2 versions'),
      ]
    },
  },
};
