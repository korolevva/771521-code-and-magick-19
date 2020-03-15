'use strict';
(function () {

  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomElement = function (array) {
    var randomElementIndex = Math.floor(Math.random() * array.length);
    return array[randomElementIndex];
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomElement(window.setup.COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    window.windowCharacter.inputCoatColor.value = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomElement(window.setup.EYE_COLORS);
    wizardEyesElement.style.fill = newColor;
    window.windowCharacter.inputEyesColor.value = newColor;
    wizard.onEyesChange(newColor);
  });

  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  wizardFireballElement.addEventListener('click', function () {
    var newColor = getRandomElement(window.setup.FIREBALL_COLORS);
    wizardFireballElement.style.backgroundColor = newColor;
    window.windowCharacter.inputFireballColor.value = newColor;
    wizard.onEyesChange(newColor);
  });

  window.wizard = wizard;
})();
