//import { settings } from '../settings.js';

class GetData {
  constructor() {
    this.songs = [];
  }

  // async getData() {
  //   const url = settings.db.url + '/' + settings.db.songs;
  //   try {
  //     const response = await fetch(url);
  //     const data = await response.json();
  //     this.songs = data;
  //     return data;
  //   } catch (error) {
  //     console.error('Could not fetch data:', error);
  //   }
  // }

  async getData() {
  try {
    const response = await fetch('db/app.json');
    const data = await response.json();
    this.songs = data.songs;
    //console.log(this.songs);
    return this.songs;
  } catch (error) {
    console.error('Error loading data:', error);
  }
}

}

export default GetData;