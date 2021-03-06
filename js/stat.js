'use strict';
(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var GAP = 10;
  var FONT_GAP = 20;
  var BAR_WIDTH = 40;
  var GAP_BEETWEN_COLUMNS = 50;
  var barHeight = CLOUD_HEIGHT - (GAP * 4) - (FONT_GAP * 4);

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
  };

  function getMaxOfArray(numArray) {
    return Math.max.apply(null, numArray);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  window.renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#000';

    ctx.fillText('Ура вы победили!', CLOUD_X + (GAP * 2), CLOUD_Y + GAP + FONT_GAP);
    ctx.fillText('Список результатов:', CLOUD_X + (GAP * 2), CLOUD_Y + GAP + (FONT_GAP * 2));

    ctx.textAlign = 'center';

    var maxTime = getMaxOfArray(times);

    for (var i = 0; i < names.length; i++) {
      if (names[i].localeCompare('Вы') === 0) {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(240, ' + getRandomInt(0, 100) + '%, 50%)';
      }

      ctx.fillText(Math.round(times[i]), CLOUD_X + (GAP_BEETWEN_COLUMNS * (i + 1)) + (BAR_WIDTH * i) + (BAR_WIDTH / 2), CLOUD_Y + CLOUD_HEIGHT - (GAP * 2) - FONT_GAP - ((barHeight * times[i]) / maxTime));
      ctx.fillRect(CLOUD_X + (GAP_BEETWEN_COLUMNS * (i + 1)) + (BAR_WIDTH * i), CLOUD_Y + CLOUD_HEIGHT - GAP - FONT_GAP, BAR_WIDTH, -Math.round(barHeight * (times[i]) / maxTime));
      ctx.fillText(names[i], CLOUD_X + (GAP_BEETWEN_COLUMNS * (i + 1)) + (BAR_WIDTH * i) + (BAR_WIDTH / 2), CLOUD_Y + CLOUD_HEIGHT - GAP);
    }
  };
})();
