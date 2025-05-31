import { select, classNames } from '../settings.js';
import utils from '../utils.js';
import Song from './Song.js';

class Search {

  constructor(data) {
    const thisSearch = this;
    thisSearch.data = data;
    thisSearch.getElements();
    thisSearch.getCategoris(data);
    thisSearch.initCategories();
    thisSearch.initSearch();
  }

  getElements() {
    const thisSearch = this;
    thisSearch.dom = {};
    thisSearch.dom.wrapper = document.querySelector(select.widgets.search);
    thisSearch.dom.form = document.querySelector(select.search.form);
    thisSearch.dom.input = document.querySelector(select.search.input);
    thisSearch.dom.result = document.querySelector(select.search.result);
    thisSearch.dom.count = document.querySelector(select.search.count);
    thisSearch.dom.categories = document.querySelector(select.search.categories);
  }

  initSearch() {
    const thisSearch = this;
    thisSearch.dom.form.addEventListener('submit', function(event) {
      event.preventDefault();
      //clear previous results
      thisSearch.dom.wrapper.innerHTML = '';
      thisSearch.search(thisSearch.dom.input.value, thisSearch.dom.categories.value);

      if (thisSearch.dom.input.value !== '') {
        thisSearch.dom.result.classList.add(classNames.search.active);
      }else if (thisSearch.dom.input.value === '' && thisSearch.dom.categories.value !== 'all') {
        thisSearch.dom.result.classList.add(classNames.search.active);
      }else if (thisSearch.dom.input.value === '') {
        thisSearch.dom.result.classList.remove(classNames.search.active);
      }
    });
  }

  getCategoris(data) {
      const thisSearch = this;
      let categories = [];
      for (let i of data) {
        for (let j of i.categories) {
          if (categories.indexOf(j) == -1) {
            categories.push(j);
          }
        }
      }
      thisSearch.categories = categories;
    }

  initCategories() {
    const thisSearch = this;
    let html = '<option value="all"></option>';
    for (let category of thisSearch.categories) {
      html += `<option value="${category}">${category}</option>`;
    }
    document.querySelector(select.search.categories).innerHTML = html;
  }

  search(searchTerm, category) {
    const thisSearch = this;
    const searchResult = [];
    //console.log(searchTerm);
    //console.log(thisSearch.data);
    //console.log(category);
    function cleanSearchTerm(searchTerm) {
      const lowerCaseSearchTerm = searchTerm.toLowerCase();
      const trimmedSearchTerm = lowerCaseSearchTerm.trim();
      return trimmedSearchTerm;
    }

    function cleanSongArtist(filename, title) {
      const artist = utils.filenameToArrayWithArtist(filename);
      utils.toLowerCase(artist);
      const noTitle = utils.filterArrays(artist, title);
      utils.filterFileTag(noTitle);
      return noTitle;
    }

    if ( searchTerm !== ''  && category === 'all') {

      for (let song of thisSearch.data) {
        const title = song.title.split(' ');
        utils.toLowerCase(title);
        const artist = cleanSongArtist(song.filename, title);
        if (artist.indexOf(cleanSearchTerm(searchTerm)) > -1 || title.indexOf(cleanSearchTerm(searchTerm)) > -1) {
          searchResult.push(song);
        }
      }
      const songCount = searchResult.length;
          
      for(let song of searchResult) {
        //console.log(searchResult);
        new Song(song.id, song, thisSearch.dom.wrapper);
      }
      utils.initPlayers(select.widgets.searchPlayer);
      thisSearch.dom.count.innerHTML = songCount;

    } else if( searchTerm === '' && category !== 'all') {
      let count = 0;
      //console.log(category);
     for(let song of thisSearch.data) {
      if (song.categories.includes(category)) {
        count++;
        new Song(song.id, song, thisSearch.dom.wrapper);
      }
     }
     utils.initPlayers(select.widgets.searchPlayer);
     thisSearch.dom.count.innerHTML = count;

    } else if( searchTerm !== '' && category !== 'all') {
      let count = 0;
      //console.log(category);
      //console.log(searchTerm);

      for (let song of thisSearch.data) {
        const title = song.title.split(' ');
        utils.toLowerCase(title);
        const artist = cleanSongArtist(song.filename, title);
        if (artist.indexOf(cleanSearchTerm(searchTerm)) > -1 || title.indexOf(cleanSearchTerm(searchTerm)) > -1) {
          searchResult.push(song);
        }
      }

      for (let song of searchResult) {
        if (song.categories.includes(category)) {
          new Song(song.id, song, thisSearch.dom.wrapper);
          count++;
        }
      }
      utils.initPlayers(select.widgets.searchPlayer);
      thisSearch.dom.count.innerHTML = count;

    } else if ( searchTerm === '' && category === 'all') {

      for (let song of thisSearch.data) {
        new Song(song.id, song, thisSearch.dom.wrapper);
      }
      utils.initPlayers(select.widgets.searchPlayer);
      thisSearch.dom.count.innerHTML = thisSearch.data.length;
    }

  }
}

export default Search;