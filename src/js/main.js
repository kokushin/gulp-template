"use strict";

// npm module
var bxSlider = require('bxslider');

// base
var base = require('./library/base')();

// components
var foo = require('./component/foo');
var bar = require('./component/bar');


$(() => {

  // npm module test
  $('#js-slider').bxSlider();

  // jQuery test
  $('#js-button').on('click', () => {
    alert('Hello, World!');
  });

  // import test 1
  foo();

  // import test 2
  bar();

  // base test
  if ($.ua.isChrome) {
    console.log('is chrome');
  }

});