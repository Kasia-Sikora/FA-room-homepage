import {nextPrevButtonsController} from "./nextPrevButtonsController.js";
import {mobileMenuController} from "./mobileMenuController.js";

function onLoad() {
    nextPrevButtonsController.init();
    mobileMenuController.init();
}

onLoad();

