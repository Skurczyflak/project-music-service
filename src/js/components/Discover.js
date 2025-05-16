import { select, settings } from '../settings.js';
import Song from './Song.js';
import utils from '../utils.js';
class Discover {
  constructor() {
    const thisDiscover = this;
    thisDiscover.getElements();
    thisDiscover.getData();
  }

  getElements() {
    const thisDiscover = this;
    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = document.querySelector(select.widgets.discover);
  }

  getData() {
    const thisDiscover = this;
    thisDiscover.data = {};
    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function (rawResponse) {
        return rawResponse.json();
      })
      .then(function (parsedResponse) {
        thisDiscover.data.songs = parsedResponse;
        thisDiscover.initSongs();
        utils.initPlayers(select.widgets.discoverPlayer);
      })
      .catch(function () {
        console.log('Could not fetch data');
      });
  }

  initSongs() {
    const thisDiscover = this;

    // Random song
    const randomSong = thisDiscover.data.songs[Math.floor(Math.random() * thisDiscover.data.songs.length)];
    new Song(randomSong.id, randomSong, thisDiscover.dom.wrapper);
  }
}

export default Discover;