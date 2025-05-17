import { select } from '../settings.js';
import utils from '../utils.js';
class Song {
  constructor(id, data, wrapper) {
    const thisSong = this;
    thisSong.id = id;
    thisSong.data = data;
    thisSong.wrapper = wrapper;
    thisSong.getElements();
    thisSong.render(thisSong.wrapper);
  }

  getElements() {
    const thisSong = this;
    thisSong.dom = {};
    thisSong.dom.wrapper = document.querySelector(select.widgets.song);
  }

  createSongHTML(song) {

    const artist = utils.filenameToArrayWithArtist(song.filename);
    const title = song.title.split(' ');
    utils.toLowerCase(artist);
    utils.toLowerCase(title);
    const noTitle = utils.filterArrays(artist, title);
    song.artist = utils.filterFileTag(noTitle).join(' ');
    song.artist = utils.nameCapitalize(song.artist);

    return `<div class="player-wrapper">
                <h4>${song.artist} - ${song.title}</h4>
                <div class="ready-player-${song.id} player" data-id="${song.id}">
                    <audio crossorigin>
                        <source src="songs/${song.filename}" type="audio/mp3">
                    </audio>
                </div>
                <div class="song-info">
                    <p>Categories: ${song.categories}</p>
                    <p>#${song.ranking} in the ranking</p>
                </div>
            </div>
        `;
  }

  render(wrapper){
    const thisSong = this;
    wrapper.insertAdjacentHTML('beforeend', thisSong.createSongHTML(thisSong.data));
  }

}
export default Song;