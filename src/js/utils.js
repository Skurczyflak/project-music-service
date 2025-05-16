const utils = {}; // eslint-disable-line
const GreenAudioPlayer = window.GreenAudioPlayer; // eslint-disable-line

utils.initPlayers = function (selector) {
  const thisUtils = this;
  thisUtils.selector = selector;
  GreenAudioPlayer.init({
    selector: thisUtils.selector,
    stopOthersOnPlay: true
  });
  //console.log('Players initialized')
};

utils.filenameToArrayWithArtist = function (filename) {
  const Array = filename.split('_');
  const artistName = Array[Array.length - 1].split('.')[0];
  Array.pop();
  Array.push(artistName);
  return Array;
};

utils.toLowerCase = function (array) {
  return array.map((item, index) => array[index] = item.toLowerCase());
};

utils.filterArrays = function (arrayA, arrayB) {
  return arrayA.filter(item => !arrayB.includes(item));
};

utils.filterFileTag = function (array) {
  array.map((item, index) => {
    if (item.includes('-') || item.includes(' ') || item.includes('.')) {
      array.splice(index, 1);
    }
  });
  return array;
};

export default utils;