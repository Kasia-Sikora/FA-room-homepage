import {domElements} from "./domElements.js";

export const mobileMenuController = {

    addListenerOnMenuButton() {

        domElements.menu.addEventListener('click', () => {
            domElements.menu.parentElement.setAttribute('class', 'active');
            domElements.menu.parentElement.style.animation = 'fadeUp ease-in-out 0.5s';
        })
        domElements.close.addEventListener('click', () => {
            domElements.menu.parentElement.removeAttribute('class');
            domElements.menu.parentElement.style.animation = 'fadeDown ease-in-out 0.5s';
        })
    },

    init: function(){
        this.addListenerOnMenuButton();
    }
}
