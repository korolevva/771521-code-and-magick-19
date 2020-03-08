'use strict';
(function () {
  var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var COUNT_WIZARDS = 4;
  var setupDialogElement = document.querySelector('.setup');
  window.setup = {
    FIRST_NAMES: FIRST_NAMES,
    LAST_NAMES: LAST_NAMES,
    COAT_COLORS: COAT_COLORS,
    EYE_COLORS: EYE_COLORS,
    FIREBALL_COLORS: FIREBALL_COLORS,
    COUNT_WIZARDS: COUNT_WIZARDS,
    setupDialogElement: setupDialogElement,
  };
})();
