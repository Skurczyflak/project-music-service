export const select = {
  containerOf: {
    nav: '.nav-links li a',
    pages: '.main-content',
    home: '.home-page',
    search: '.search-page',
    discover: '.discover-page',
    songs: '.songs-wrapper',
  },
  all: {
    navActive: '.nav-links > li > a .active',
    pageActive: '.main-content > section > .active',
    discover: '#discover-nav-link',
  },
  widgets: {
    home: '#home > .songs-wrapper',
    search: '#search > .songs-wrapper',
    discover: '#discover > .songs-wrapper',
    homeWrapper: '#home > .songs-wrapper > .player-wrapper',
    homePlayer: '#home > .songs-wrapper >.player-wrapper > .player',
    discoverPlayer: '#discover > .songs-wrapper >.player-wrapper > .player',
    searchPlayer: '#search > .songs-wrapper >.player-wrapper > .player',
  },
  search: {
    input: '.search-page #search-input',
    submit: '.search-page .btn-search',
    result: '.search-page .search-result',
    count: '.search-page .search-result .search-count',
    form: '.search-page .search-container',
    categories: '.search-page .search-options select',
  },
  home: {
    categories: '.home-page .categories-wrapper',
    subscribeBtn: '.home-page .btn-subscribe',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  search: {
    active: 'active',
  },
  toUpercase: [
    '.section-title',
    '.section-subtitle',
    '.wrapper-text h1',
    '.wrapper-text h2',
    '.subscribe .subscribe-title',
    '.btn-subscribe',
    '.artist-name .first-name',
    '.artist-name .last-name', 
    '.search-container .btn-search',
  ],
  listToUpercase:[ 
    '.nav-links li a',
    '.search-container .search-options label',
  ],
  pages: {
    active: 'active',
  },
  player: {
    hidden: 'hidden',
  }};
export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    songs: 'songs',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  },
};