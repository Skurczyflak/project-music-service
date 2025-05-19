import { select } from '../settings.js';
import Song from './Song.js';
import utils from '../utils.js';

class Home {

  constructor(data) {
    const thisHome = this;
    thisHome.data = data;
    thisHome.getElements();
    thisHome.initSongs();
  }

  getElements() {
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.widgets.home);
  }

  initSongs() {
    const thisHome = this;
    for(let song of thisHome.data){
      new Song(song.id, song, thisHome.dom.wrapper);
    }
    utils.initPlayers(select.widgets.homePlayer);
  }

}

export default Home;