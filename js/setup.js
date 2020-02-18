'use strict';

var FIRST_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var LAST_NAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYE_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];


// var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

function getFullName() {
  if (getRandomInt(0, 1) === 0) {
    return FIRST_NAMES[getRandomInt(0, FIRST_NAMES.length - 1)] + ' ' + LAST_NAMES[getRandomInt(0, LAST_NAMES.length - 1)];
  } else {
    return LAST_NAMES[getRandomInt(0, LAST_NAMES.length - 1)] + ' ' + FIRST_NAMES[getRandomInt(0, FIRST_NAMES.length - 1)];
  }
}

function getCoatColor() {
  return COAT_COLORS[getRandomInt(0, COAT_COLORS.length)];
}

function geteyesColor() {
  return EYE_COLORS[getRandomInt(0, EYE_COLORS.length)];
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function createArrayOfObjects(countObjects) {
  var arr = [];

  for (var i = 1; i <= countObjects; i++) {
    arr.push({'name': getFullName(), 'coatColor': getCoatColor(), 'eyesColor': geteyesColor()});
  }

  return arr;
}

var wizards = createArrayOfObjects(4);

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
document.querySelector('.setup-similar').classList.remove('hidden');

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.querySelector('.setup-wizard .wizard-coat');
var fireball = document.querySelector('.setup-fireball-wrap');
var wizarsEyes = document.querySelector('.setup-wizard .wizard-eyes');

function onPopupEscPress(evt) {
  if (evt.target.className === 'setup-user-name') {
    return;
  }

  if (evt.key === 'Escape') {
    setup.classList.add('hidden');
  }
}

function openPopup() {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    closePopup();
  }
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === 'Enter') {
    openPopup();
  }
});

function paintCoat() {
  var coatColor = COAT_COLORS[getRandomInt(0, COAT_COLORS.length - 1)];
  wizardCoat.style.fill = coatColor;
  var inputCoatColor = document.querySelector('input[name=coat-color]');
  inputCoatColor.value = coatColor;
}

function paintEyes() {
  var eyesColor = EYE_COLORS[getRandomInt(0, EYE_COLORS.length - 1)];
  wizarsEyes.style.fill = eyesColor;
  var inputEyesColor = document.querySelector('input[name=eyes-color]');
  inputEyesColor.value = eyesColor;
}

function paintFireball() {
  var fireballColor = FIREBALL_COLORS[getRandomInt(0, FIREBALL_COLORS.length - 1)];
  fireball.style.backgroundColor = fireballColor;
  var inputFireballColor = document.querySelector('input[name=fireball-color]');
  inputFireballColor.value = fireballColor;
}

wizardCoat.addEventListener('click', paintCoat);
wizarsEyes.addEventListener('click', paintEyes);
fireball.addEventListener('click', paintFireball);
