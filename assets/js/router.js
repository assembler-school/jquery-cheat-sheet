//-------------------------------------------IMPORT------------------------------//

import { introPage } from "./modules/intro-page.js";
import { contentPage } from "./modules/content-page.js";
import { cheatList } from "./modules/cheat-list.js";

//!-------------------------------------------ROUTER------------------------------//

function navigate() {
  if (
    location.hash === "#main" ||
    location.hash === "" ||
    location.hash === "#"
  ) {
    introPage();
  } else if (location.hash === "#cheatList") {
    cheatList();
  } else if (location.hash === "#content") {
    contentPage();
  }
}

//?-------------------------------------------ROUTES------------------------------//

function goToMain() {
  location.hash = "";
}

function goToCheatList() {
  location.hash = "cheatList";
}

function goToContent() {
  location.hash = "content";
}

//-------------------------------------------EXPORT------------------------------//

export { navigate, goToCheatList, goToContent, goToMain };
