import { wrapper } from "../main.js";
import { templateList } from "../templates.js";
import { goToMain, goToCheatList } from "../router.js";

function cheatList() {
  //TODO Delete all the previous event listeners

  //Template injection
  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", templateList);

  let usernameNode = document.getElementById("cheat-list").content;
  let copyNode = document.importNode(usernameNode, true);

  wrapper.innerHTML = "";

  wrapper.appendChild(copyNode);

  //Event Listeners
  document.getElementById("go-home").addEventListener("click", goToMain);
  document.getElementById("go-list").addEventListener("click", goToCheatList);
}

export { cheatList };
