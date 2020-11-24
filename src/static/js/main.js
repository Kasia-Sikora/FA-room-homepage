const tablet = window.matchMedia('((min-width: 992px');

let mainSection = document.querySelector('.main-section');

let mainArticle = document.querySelector('.main-article');

let buttons = document.getElementsByClassName('buttons')[0];

function handleTabletDevice(tablet){
    if(tablet.matches){
        mainSection.removeChild(buttons);
        mainArticle.appendChild(buttons);
    }else{
        mainSection.appendChild(buttons);
        mainArticle.removeChild(buttons);
    }
}


tablet.addEventListener('change', handleTabletDevice);


handleTabletDevice(tablet);

