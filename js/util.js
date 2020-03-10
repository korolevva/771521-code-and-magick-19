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
  getRandomElement: function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  }
};
