import {slideshowController} from "./slideshowController.js";

export let buttonController = {
    tablet: {},

    mainSection: document.querySelector('.main-section'),

    mainArticle: document.querySelector('.main-article'),

    buttons: document.querySelector('.buttons'),

    slidePictures: document.querySelectorAll('.slide-pictures'),

    handleTabletDevice: function (tablet) {
        if (tablet.matches) {
            buttonController.mainArticle.appendChild(buttonController.buttons);
            if (buttonController.mainSection.classList.contains('buttons')) {
                buttonController.mainSection.removeChild(buttonController.buttons);
            }
        } else {
            buttonController.mainSection.appendChild(buttonController.buttons);
            if (buttonController.mainSection.classList.contains('buttons')) {
                buttonController.mainArticle.removeChild(buttonController.buttons);
            }
        }
    },

    addListener: function (buttons) {
        buttons.firstElementChild.addEventListener('click', () => {
            slideshowController.moveSlides(this.getActiveSlide(), -1);
        })
        buttons.lastElementChild.addEventListener('click', () => {
            slideshowController.moveSlides(this.getActiveSlide(), 1);
        })
    },

    getActiveSlide: function () {
        for (let i = 0; i < this.slidePictures.length; i++) {
            if (this.slidePictures[i].style.display === 'block') {
                return i;
            }
        }
    },

    setDisplay: function (slidePictures) {
        slidePictures[0].style.display = 'block';
        slidePictures[1].style.display = 'none';
        slidePictures[2].style.display = 'none';
    },

    init: function () {
        this.setDisplay(this.slidePictures);
        this.tablet = window.matchMedia('((min-width: 992px');
        this.handleTabletDevice(this.tablet);
        this.tablet.addEventListener('change', this.handleTabletDevice);
        this.addListener(this.buttons);
    },
}
