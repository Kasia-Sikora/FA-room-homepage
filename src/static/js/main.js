import {nextPrevButtonsController} from "./nextPrevButtonsController.js";
import {mobileMenuController} from "./mobileMenuController.js";

function onLoad() {
    nextPrevButtonsController.init();
    mobileMenuController.addListenerOnMenuButton();
}

onLoad();

