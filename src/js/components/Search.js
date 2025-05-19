import { select, classNames } from '../settings.js';
import utils from '../utils.js';
import Song from './Song.js';

class Search {

  constructor(data) {
    const thisSearch = this;
    thisSearch.data = data;
    thisSearch.getElements();
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
  }

  initSearch() {
    const thisSearch = this;
    thisSearch.dom.form.addEventListener('submit', function(event) {
      event.preventDefault();
      //clear previous results
      thisSearch.dom.wrapper.innerHTML = '';
      thisSearch.search(thisSearch.dom.input.value);

      if (thisSearch.dom.input.value !== '') {
        thisSearch.dom.result.classList.add(classNames.search.active);
      }else {
        thisSearch.dom.result.classList.remove(classNames.search.active);
      }
    });
  }

  search(searchTerm) {
    const thisSearch = this;
    const searchResult = [];
    //console.log(searchTerm);
    //console.log(thisSearch.data);

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
      new Song(song.id, song, thisSearch.dom.wrapper);
    }
    utils.initPlayers(select.widgets.searchPlayer);
    thisSearch.dom.count.innerHTML = songCount;

  }
}

export default Search;