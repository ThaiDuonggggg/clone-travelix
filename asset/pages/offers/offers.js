/*

    /************************

    1. handle More Options (Offers)

      *********************/
     
/*/


/*
    1. handle More Options (Offer)
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
