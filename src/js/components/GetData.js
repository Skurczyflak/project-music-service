import { settings } from '../settings.js';

class GetData {
  constructor() {
    this.songs = [];
  }

  async getData() {
    const url = settings.db.url + '/' + settings.db.songs;
    try {
      const response = await fetch(url);
      const data = await response.json();
      this.songs = data;
      return data;
    } catch (error) {
      console.error('Could not fetch data:', error);
    }
  }
}

export default GetData;