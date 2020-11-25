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
        buttons.firstElementChild.addEventListener('click', () => {
            slideshowController.moveSlides(this.getActiveSlide(), -1);
        })
        buttons.lastElementChild.addEventListener('click', () => {
            slideshowController.moveSlides(this.getActiveSlide(), 1);
        })
    },

    getActiveSlide: function () {
        for (let i = 0; i < domElements.slidePictures.length; i++) {
            if (domElements.slidePictures[i].style.display === 'block') {
                return i;
            }
        }
    },

    setDisplayOfSlidePictures: function (slidePictures) {
        slidePictures[0].style.display = 'block';
        slidePictures[1].style.display = 'none';
        slidePictures[2].style.display = 'none';
    },



    init: function () {

        this.setDisplayOfSlidePictures(domElements.slidePictures);
        domElements.tablet = window.matchMedia('((min-width: 992px');
        this.handleTabletDevice(domElements.tablet);
        domElements.tablet.addEventListener('change', this.handleTabletDevice);
        this.addNextPrevButtonsListener(domElements.buttons);
    }
}
