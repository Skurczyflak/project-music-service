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
  },
  widgets: {
    home: '#home > .songs-wrapper',
    search: '#search > .songs-wrapper',
    discover: '#discover > .songs-wrapper',
    player: '.player',
  },
  search: {
    input: '.search-page #search-input',
    submit: '.search-page .btn-search',
    result: '.search-page .search-result .search-count',
  },
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
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