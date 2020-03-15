'use strict';
(function () {
  var setup = window.setup.setupDialogElement;
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var inputCoatColor = document.querySelector('input[name=coat-color]');
  var inputEyesColor = document.querySelector('input[name=eyes-color]');
  var inputFireballColor = document.querySelector('input[name=fireball-color]');

  window.windowCharacter = {
    inputCoatColor: inputCoatColor,
    inputEyesColor: inputEyesColor,
    inputFireballColor: inputFireballColor
  };

  var defaultDialogCoords;

  function onPopupEscPress(evt) {
    if (evt.target.className === 'setup-user-name') {
      return;
    }
    window.util.isEscEvent(evt, closePopup);
  }

  function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    defaultDialogCoords = {
      x: setup.offsetLeft,
      y: setup.offsetTop
    };
  }

  function closePopup() {
    setup.style.top = defaultDialogCoords.y + 'px';
    setup.style.left = defaultDialogCoords.x + 'px';
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
    window.util.isEnterEvent(evt, closePopup);
  });

  setupOpen.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, openPopup);
  });
})();
