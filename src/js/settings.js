export const select = {
  containerOf: {
    nav: '.nav-links li a',
    pages: '.main-content',
    home: '.home-page',
    search: '.search-page',
    discover: '.discover-page',
  },
  all: {
    navActive: '.nav-links > li > a .active',
    pageActive: '.main-content > section > .active',
  },
  widgets: {
    home: '.home-page > .songs-wrapper',
    search: '.search-page > .songs-wrapper',
    discover: '.discover-page > .songs-wrapper',
  }
};

export const classNames = {
  nav: {
    active: 'active',
  },
  pages: {
    active: 'active',
  },
  db: {
    url: '//' + window.location.hostname + (window.location.hostname=='localhost' ? ':3131' : ''),
    products: 'products',
    orders: 'orders',
    bookings: 'bookings',
    events: 'events',
    dateStartParamKey: 'date_gte',
    dateEndParamKey: 'date_lte',
    notRepeatParam: 'repeat=false',
    repeatParam: 'repeat_ne=false',
  },
};