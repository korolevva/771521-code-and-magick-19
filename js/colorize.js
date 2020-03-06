'use strict';
(function () {
  window.colorize = {
    getRandomColor: function (arrayColors) {
      return arrayColors[window.util.getRandomInt(0, arrayColors.length - 1)];
    }
  };

  var colorize = function (element, arrayColors, inputColor) {
    element.addEventListener('click', function () {
      var color = window.colorize.getRandomColor(arrayColors);
      if (element.tagName.toLowerCase() === 'div') {
        element.style.backgroundColor = color;
      } else {
        element.style.fill = color;
      }
      inputColor.value = color;
    });
  };

  colorize(window.windowCharacter.wizardCoat, window.setup.COAT_COLORS, window.windowCharacter.inputCoatColor);
  colorize(window.windowCharacter.wizarsEyes, window.setup.EYE_COLORS, window.windowCharacter.inputEyesColor);
  colorize(window.windowCharacter.fireball, window.setup.FIREBALL_COLORS, window.windowCharacter.inputFireballColor);
})();
