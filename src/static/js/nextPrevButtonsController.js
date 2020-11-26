import {slideshowController} from "./slideshowController.js";
import {domElements} from "./domElements.js";

export const nextPrevButtonsController = {

    handleTabletDevice: function (tablet) {
        if (tablet.matches) {
            domElements.mainArticle.appendChild(domElements.buttons);
            if (domElements.mainSection.classList.contains('buttons')) {
                domElements.mainSection.removeChild(domElements.buttons);
            }
        } else {
            domElements.mainSection.appendChild(domElements.buttons);
            if (domElements.mainSection.classList.contains('buttons')) {
                domElements.mainArticle.removeChild(domElements.buttons);
            }
        }
    },

    addNextPrevButtonsListener: function (buttons) {
        const left = -1;
        const right = 1;
        buttons.firstElementChild.addEventListener('click', () => {
            slideshowController.moveSlides(this.getActiveSlide(), left);
        })
        buttons.lastElementChild.addEventListener('click', () => {
            slideshowController.moveSlides(this.getActiveSlide(), right);
        })
    },

    getActiveSlide: function () {
        for (let i = 0; i < domElements.slidePictures.length; i++) {
            if (domElements.slidePictures[i].style.display === 'block') {
                return i;
            }
        }
    },

    setDisplayOfSlidePictures: function (slidePictures, slideArticles) {
        for(let i = 0; i < slidePictures.length; i++){
            if(i === 0){
                slidePictures[i].style.display = 'block';
                slideArticles[i].style.display = 'block';
            }else{
                slidePictures[i].style.display = 'none';
                slideArticles[i].style.display = 'none';
            }
        }
    },


    init: function () {
        this.setDisplayOfSlidePictures(domElements.slidePictures, domElements.slideArticles);
        domElements.tablet = window.matchMedia('((min-width: 992px');
        this.handleTabletDevice(domElements.tablet);
        domElements.tablet.addEventListener('change', this.handleTabletDevice);
        this.addNextPrevButtonsListener(domElements.buttons);
    }
}
