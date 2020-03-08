'use strict';
var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';
window.util = {
  isEscEvent: function (evt, action) {
    if (evt.key === ESC_KEY) {
      action();
    }
  },
  isEnterEvent: function (evt, action) {
    if (evt.key === ENTER_KEY) {
      action();
    }
  },
  getRandomInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};
