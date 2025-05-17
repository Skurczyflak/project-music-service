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

utils.oneToUpercase = function (array){
  for (const className of array){
    const wrapper = document.querySelector(className);
    wrapper.style.textTransform = 'uppercase';
  }
};

utils.nameCapitalize = function (str){
  const array = str.split(' ');
  const name = [];

  for(const i in array){
    name.push(array[i].charAt(0).toUpperCase() + array[i].slice(1)); 
  }
  return name.join(' ');
};

utils.listToUpercase = function (array){
  for (const classNames of array){
    const wrapper = document.querySelectorAll(classNames);
    [].forEach.call(wrapper, function(div) {
      // do whatever
      div.style.textTransform = 'uppercase';
    });

  }
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