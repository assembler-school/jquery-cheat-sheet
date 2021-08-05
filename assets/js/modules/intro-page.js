import { wrapper } from "../main.js";
import { templateIntro } from "../templates.js";
import { goToMain, goToCheatList, goToContent } from "../router.js";

function introPage() {
  //TODO Delete all the previous event listeners
  //Template injection
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", templateIntro);

  let usernameNode = document.getElementById("main-screen").content;
  let copyNode = document.importNode(usernameNode, true);

  wrapper.innerHTML = "";

  wrapper.appendChild(copyNode);

  //Event Listeners

  document.getElementById("go-home").addEventListener("click", goToMain);
  document.getElementById("go-list").addEventListener("click", goToCheatList);
  document.getElementById("start").addEventListener("click", goToCheatList);
}

export { introPage };
