import { select } from '../settings.js';
import Song from './Song.js';
import utils from '../utils.js';
class Discover {
  constructor(data, played) {

    const thisDiscover = this;
    thisDiscover.data = data;
    thisDiscover.played = {};
    thisDiscover.initPlayedSongs();
    thisDiscover.getElements();
    thisDiscover.listenerPlay();
    thisDiscover.initSongs();

  }

  initPlayedSongs(){

    const thisDiscover = this;
    for (let song of thisDiscover.data){
      thisDiscover.played[song.id] = 0;
    }
  }

  getElements() {

    const thisDiscover = this;
    thisDiscover.dom = {};
    thisDiscover.dom.wrapper = document.querySelector(select.widgets.discover);

  }

  listenerPlay() {
    
    const thisDiscover = this;
    const players = document.querySelectorAll(select.widgets.homeWrapper);

    //add listener on audio play
      for(let player of players){
        const audio = player.querySelector('audio');
        audio.addEventListener('play', function(event){
          thisDiscover.played[event.target.parentNode.getAttribute('data-id')]+=1;
        });
      }

  }

  getCategoriesPlayed() {

    const thisDiscover = this;
    const id = thisDiscover.played;
    const data = thisDiscover.data;
    
    for (let i in id) {
      if (id[i] > 0) {
        for (let category of data[i-1].categories) {
          if (thisDiscover.categoriesPlayed[category]) {
            thisDiscover.categoriesPlayed[category] += 1;
          } else {
            thisDiscover.categoriesPlayed[category] = 1;
          }
        }
      }
    }
  }

  initSongs() {

    const thisDiscover = this;
    //event listener for nav-link discover
    const discoverLink = document.querySelector(select.all.discover);
    discoverLink.addEventListener('click', function(event){
      event.preventDefault();
      thisDiscover.dom.wrapper.innerHTML = '';
      thisDiscover.categoriesPlayed = {};
      thisDiscover.getCategoriesPlayed();
      if(Object.keys(thisDiscover.categoriesPlayed).length === 0){
          const randomSong = thisDiscover.data[Math.floor(Math.random() * thisDiscover.data.length)];
          new Song(randomSong.id, randomSong, thisDiscover.dom.wrapper);
          utils.initPlayers(select.widgets.discoverPlayer);
        }else{
          let morePlayedCategory = '';
          let count = 0;
          for (let category in thisDiscover.categoriesPlayed){
            if(thisDiscover.categoriesPlayed[category] > count){
              count = thisDiscover.categoriesPlayed[category];
              morePlayedCategory = category;
            }
          }
          let songLibary = {};
          let i = 0;
          for (let song of thisDiscover.data){
            if (song.categories.indexOf(morePlayedCategory) > -1){
              // add to songLibary
              songLibary[i] = song;
              i++;
            }
          }
          const randomSong = songLibary[Math.floor(Math.random() * Object.keys(songLibary).length)];
          new Song(randomSong.id, randomSong, thisDiscover.dom.wrapper);
          utils.initPlayers(select.widgets.discoverPlayer);
        }
    });
  }

}

export default Discover;