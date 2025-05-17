import { select, settings } from '../settings.js';
import Song from './Song.js';
import utils from '../utils.js';

class Home {

  constructor() {
    const thisHome = this;
    thisHome.getElements();
    thisHome.getData();
  }

  getElements() {
    const thisHome = this;
    thisHome.dom = {};
    thisHome.dom.wrapper = document.querySelector(select.widgets.home);
  }

  getData(){
    const thisHome = this;
    thisHome.data = {};
    const url = settings.db.url + '/' + settings.db.songs;

    fetch(url)
      .then(function(rawResponse){
        return rawResponse.json();
      })
      .then(function(parsedResponse){
        thisHome.data.songs = parsedResponse;
        thisHome.initSongs();
        utils.initPlayers(select.widgets.homePlayer);
      })
      .catch(function(){
        console.log('Could not fetch data');
      });
  }

  initSongs() {
    const thisHome = this;
    for(let song of thisHome.data.songs){
      new Song(song.id, song, thisHome.dom.wrapper);
    }
  }

}

export default Home;