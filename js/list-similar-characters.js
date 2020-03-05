'use strict';

(function () {
  var similarListElement = document.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  function getRandomFullName(firstNames, lastNames) {
    if (window.util.getRandomInt(0, 1) === 0) {
      return firstNames[window.util.getRandomInt(0, firstNames.length - 1)] + ' ' + lastNames[window.util.getRandomInt(0, lastNames.length - 1)];
    } else {
      return lastNames[window.util.getRandomInt(0, lastNames.length - 1)] + ' ' + firstNames[window.util.getRandomInt(0, firstNames.length - 1)];
    }
  }

  function createArrayOfObjects(countObjects) {
    var arr = [];

    for (var i = 1; i <= countObjects; i++) {
      arr.push({'name': getRandomFullName(window.setup.FIRST_NAMES, window.setup.LAST_NAMES), 'coatColor': window.colorize.getRandomColor(window.setup.COAT_COLORS), 'eyesColor': window.colorize.getRandomColor(window.setup.EYE_COLORS)});
    }

    return arr;
  }

  var wizards = createArrayOfObjects(window.setup.COUNT_WIZARDS);

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  similarListElement.appendChild(fragment);
})();
