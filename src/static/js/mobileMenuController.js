import {domElements} from "./domElements.js";

export const mobileMenuController = {

    addListenerOnMenuButton() {
        domElements.menu.addEventListener('click', () => {
            domElements.menu.parentElement.setAttribute('class', 'active');
        })

        domElements.close.addEventListener('click', () => {
            domElements.menu.parentElement.removeAttribute('class');
        })
    },
}
