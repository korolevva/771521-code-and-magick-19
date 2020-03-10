'use strict';
(function () {

  var colorize = function (element, arrayColors, inputColor) {
    element.addEventListener('click', function () {
      var color = window.util.getRandomElement(arrayColors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      inputColor.value = color;
    });
  };

  window.colorize = colorize;

  colorize(window.windowCharacter.wizardCoat, window.setup.COAT_COLORS, window.windowCharacter.inputCoatColor);
  colorize(window.windowCharacter.wizarsEyes, window.setup.EYE_COLORS, window.windowCharacter.inputEyesColor);
  colorize(window.windowCharacter.fireball, window.setup.FIREBALL_COLORS, window.windowCharacter.inputFireballColor);
})();
