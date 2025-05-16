const utils = {}; // eslint-disable-line
const GreenAudioPlayer = window.GreenAudioPlayer; // eslint-disable-line

utils.initPlayers = function (selector) {
  const thisUtils = this;
  thisUtils.selector = selector;
  GreenAudioPlayer.init({
    selector: thisUtils.selector,
    stopOthersOnPlay: true
  });
  //console.log('Players initialized');
};

export default utils;