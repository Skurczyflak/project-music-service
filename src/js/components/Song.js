import { select } from '../settings.js';
class Song {
  constructor(id, data) {
    const thisSong = this;
    thisSong.id = id;
    thisSong.data = data;
    thisSong.getElements();
    thisSong.renderInHome();
  }

  getElements() {
    const thisSong = this;
    thisSong.dom = {};
    thisSong.dom.wrapper = document.querySelector(select.widgets.song);
    thisSong.dom.homeWrapper = document.querySelector(select.widgets.home);

  }

  createSongHTML(song) {

    //split filename to get the artist of the song
    const artist = song.filename.split('_');
    const artistName = artist[artist.length - 1].split('.')[0];
    artist.pop();
    artist.push(artistName);
    const title = song.title.split(' ');
    artist.map((item, index) => artist[index] = item.toLowerCase());
    title.map((item, index) => title[index] = item.toLowerCase());
    for (let i = 0; i < title.length; i++) {
      if (artist.includes(title[i])) {
        artist.splice(artist.indexOf(title[i]), 1);
      }
    }
    artist.map((item, index) => {
      if (item.includes('-') || item.includes(' ') || item.includes('.')) {
        artist.splice(index, 1);
      }
    });
    song.artist = artist.join(' ');

    return `<div class="player-wrapper">
                <h4>${song.artist} - ${song.title}</h4>
                <div class="ready-player-${song.id} player" data-id="${song.id}">
                    <audio crossorigin>
                        <source src="songs/${song.filename}" type="audio/mp3">
                    </audio>
                </div>
                <div class="song-info">
                    <p>categories: ${song.categories}</p>
                    <p>#${song.ranking} in the ranking</p>
                </div>
            </div>
        `;
  }

  render(wrapper){
    const thisSong = this;
    wrapper.insertAdjacentHTML('beforeend', thisSong.createSongHTML(thisSong.data));
  }

  renderInHome() {
    const thisSong = this;
    thisSong.render(thisSong.dom.homeWrapper);
  }
    
}
export default Song;