import {domElements} from "./domElements.js";

export const slideshowController = {

    moveSlides: function (numberOfSlide = 0, direction) {
        let nextSlide = numberOfSlide + direction;
        let number = this.getNumberOfSlide(nextSlide);
        console.log('direction ' + direction);

        if(direction === -1){
            domElements.slidePictures.forEach(x => x.style.animation = 'fadeIn ease-in-out .5s');
        }else{
            domElements.slidePictures.forEach(x => x.style.animation = 'fadeOut ease-in-out .5s');
        }

        for (let i = 0; i < domElements.slidePictures.length; i++) {
            i === number ? domElements.slidePictures[i].style.display = 'block' : domElements.slidePictures[i].style.display = 'none';
            i === number ? domElements.slideArticles[i].style.display = 'block' : domElements.slideArticles[i].style.display = 'none';
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
