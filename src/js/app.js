import { select, classNames } from './settings.js';
import Home from './components/Home.js';
import Discover from './components/Discover.js';
import Search from './components/Search.js';
import utils from './utils.js';
const app = {

  initPages: function() {
    const thisApp = this;

    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    thisApp.navLinks = document.querySelectorAll(select.containerOf.nav);
    thisApp.btnSubscribe = document.querySelector(select.home.subscribeBtn);
    const idFromHash = window.location.hash.replace('#/', '');

    let pageMatchingHash = thisApp.pages[0].id;
    for (let page of thisApp.pages) {
      if (page.id == idFromHash) {
        pageMatchingHash = page.id;
        break;
      }
    }

    thisApp.activatePage(pageMatchingHash);

    function handleLinkClick(event) {
      const clickedElement = this;
      event.preventDefault();
      const id = clickedElement.getAttribute('href').replace('#', '');
      thisApp.activatePage(id);
      window.location.hash = '#/' + id;
    }

    thisApp.btnSubscribe.addEventListener('click',handleLinkClick );
        
    for (let link of thisApp.navLinks) {
      link.addEventListener('click', handleLinkClick);
    }

  },

  activatePage: function(pageId){
    const thisApp = this;

    for(let page of thisApp.pages){
      page.classList.toggle(classNames.pages.active, page.id == pageId);
    }

    for(let link of thisApp.navLinks){
      link.classList.toggle(
        classNames.nav.active, 
        link.getAttribute('href') == '#' + pageId
      );
    }

  },

  initHomePage: function() {
    new Home();
  },

  initDiscoverPage: function() {
    new Discover();
  },

  initSearchPage: function() {
    new Search();
  },

  toUppercase: function(){
    const toUpercase = classNames.toUpercase;
    const listToUpercase = classNames.listToUpercase;
    utils.oneToUpercase(toUpercase);
    utils.listToUpercase(listToUpercase);
  },

  init: function() {
    const thisApp = this;
    thisApp.toUppercase();
    thisApp.initDiscoverPage();
    thisApp.initHomePage();
    thisApp.initSearchPage();
    thisApp.initPages();
  },

};

app.init();