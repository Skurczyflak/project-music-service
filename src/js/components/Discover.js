import { select } from '../settings.js';
import Song from './Song.js';
import utils from '../utils.js';
class Discover {
  constructor(data) {
    const thisDiscover = this;
    thisDiscover.data = data;
    thisDiscover.getElements();
    thisDiscover.initSongs();
    
  }

  getElements() {
    const thisDiscover = this;
    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = document.querySelector(select.widgets.discover);
  }

  initSongs() {
    const thisDiscover = this;

    // Random song
    const randomSong = thisDiscover.data[Math.floor(Math.random() * thisDiscover.data.length)];
    new Song(randomSong.id, randomSong, thisDiscover.dom.wrapper);
    utils.initPlayers(select.widgets.discoverPlayer);
  }
}

export default Discover;