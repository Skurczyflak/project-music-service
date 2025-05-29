import { select } from '../settings.js';
import Song from './Song.js';
import utils from '../utils.js';

class Home {

  constructor(data) {
    const thisHome = this;
    thisHome.data = data;
    thisHome.getElements();
    thisHome.getCategoris(data);
    thisHome.initCategories();
    thisHome.initSongs();
    thisHome.initListeners();

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

    getCategoris(data) {
      const thisHome = this;
      let categories = [];
      for (let i of data) {
        for (let j of i.categories) {
          if (categories.indexOf(j) == -1) {
            categories.push(j);
          }
        }
      }
      thisHome.categories = categories;
    }
  
    initCategories() {
      const thisHome = this;
      let html = '<p>Categories:</p>';
      for (let category of thisHome.categories) {
        html += `<p><a href="#${category}">${category}</a>,</p>`;
      }
      html = html.slice(0, -5);
      document.querySelector(select.home.categories).innerHTML = html;
    }

    filterByCategory(category) {
      const thisHome = this;
      let filteredData = [];
      for (let song of thisHome.data) {
        if (song.categories.includes(category)) {
          filteredData.push(song);
        }
      }
      return filteredData;
    }

    initListeners() {

      const players = document.querySelectorAll(select.widgets.homeWrapper); 
      const categories = document.querySelector(select.home.categories);
      const categoryLinks = categories.querySelectorAll('a');

      //add listener on links.
      for (let catLinks of categoryLinks) {
          catLinks.addEventListener('click', function (event) {
          event.preventDefault();
          if(!event.target.classList.contains('active')){
          for (let link of categoryLinks) {
            link.classList.remove('active');
          }
          const category = event.target.getAttribute('href');
          for(let player of players){
            player.classList.add('hidden');
            const spans = player.querySelectorAll('.song-info .categories span');
            for(let span of spans){
              if(span.getAttribute('id') === category){
                player.classList.remove('hidden');
                event.target.classList.add('active');
              }
            }
          }
          }else{
            for(let player of players){
              player.classList.remove('hidden');
            }
            for (let link of categoryLinks) {
              link.classList.remove('active');
            }
          }
          });

        }
  
      }

    }


export default Home;