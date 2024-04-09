const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);


/*

    /************************

    1. scroll header
    2. handle search input header
    3. handle search tabs active
    4. Handle Go Top
    5. handle header Menu tablet & mobile
    6. handle More Options (Offer)

      *********************/
     
/*/



/* 
    1. scroll header
*/ 
const headerTopNav = $('.header_top_nav');
const headerMainNav = $('.header_nav_main');

function scrollElement() {
    if (scrollY > 42) {
        headerTopNav.style.display = 'none'
        headerMainNav.classList.add('scroll')
    } else {
        headerTopNav.style.display = 'block'
        headerMainNav.classList.remove('scroll')
    }
}

window.addEventListener('scroll', scrollElement)

/*
    2. handle search input header
*/

const searchInput = $('.input_search_header')
const headerNavSearch = $('.header_navbar-search')
const mainApp = $('#main')
const inputSearch = $('.input_search_header')

function handleSearch() {
    searchInput .classList.toggle('active')
}

function handleClickOut() {
    searchInput.classList.remove('active')
}

headerNavSearch.addEventListener('click', handleSearch)
mainApp.addEventListener('click', handleClickOut)
headerNavSearch.addEventListener('click', e => {
    e.stopPropagation();
})
inputSearch.addEventListener('click', e => {
    e.stopPropagation();
})


/* 
    3. handle search tabs active
*/ 

const searchTabs =$$('.search_tab_container');

const tabsActive = $('.search_tab_container.active')
searchTabs.forEach((tab, index) => {
    tab.onclick = function() {
        $('.search_tab_container.active').classList.remove('active');
        
       this.classList.add('active')
    }
})


/*
    4. Handle Go Top
*/

const scrollTop = $('.scroll-top');

function handleGoTop() {
    const header = $('.header');
    header.scrollIntoView({ behavior: 'smooth', block: 'start'})
    console.log(header.scrollIntoView({ behavior: 'smooth', block: 'start'}));
}

scrollTop.addEventListener('click', handleGoTop)

window.addEventListener('scroll', () => {
    if (scrollY > 280) {
        scrollTop.style.display = 'flex'
    } else {
        scrollTop.style.display = 'none'

    }
})


/*
    5. handle header Menu tablet & mobile
*/

const menuBars = $('.header_navbar_bars-mobile')
const menuOverlay = $('.header_menu_overlay');
const menuContent = $('.header__menu__body--content');
const closeMenu = $('.header__menu__body-close-icon');

menuOverlay.style.display = 'none';

function handleMenuBar() {
    menuOverlay.style.display = 'block';
    menuContent.classList.add('open');
}

function handleCloseMenu() {
    menuContent.classList.remove('open');
    menuOverlay.style.display = 'none';
}

menuBars.addEventListener('click', handleMenuBar);
closeMenu.addEventListener('click', handleCloseMenu);

menuOverlay.addEventListener('click', () => {
    menuContent.classList.remove('open');
    menuOverlay.style.display = 'none';
})

/*
    6. handle More Options (Offer)
*/ 

const moreOptions =$('.more_options_trigger');
const moreOptionsList =$('.more_options_list');
const ListHeight = moreOptionsList.clientHeight;

moreOptions.onclick = function (e) {
    e.preventDefault();
    moreOptions.classList.toggle('active');

    var isClosed = moreOptionsList.clientHeight === ListHeight;
    if (isClosed) {
        moreOptionsList.style.maxHeight = '65px'
    } else {
        moreOptionsList.style.maxHeight = null;
    }
}
