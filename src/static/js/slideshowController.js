import {domElements} from "./domElements.js";

export const slideshowController = {

    moveSlides: function (numberOfSlide = 0, direction) {
        let nextSlide = numberOfSlide + direction;
        let number = this.getNumberOfSlide(nextSlide);

        for (let i = 0; i < domElements.slides.length; i++) {
            i === number ? domElements.slides[i].style.display = 'block' : domElements.slides[i].style.display = 'none'
        }
    },

    getNumberOfSlide(number){
        switch (number){
            case -1:
                return 2;
            case 3:
                return 0;
            default:
                return number;
        }
    }
}
