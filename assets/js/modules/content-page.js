import { wrapper } from "../main.js";
import { templateContent } from "../templates.js";
import { goToMain, goToCheatList, goToContent } from "../router.js";

function contentPage() {
  //TODO Delete all the previous event listeners
  document.getElementById("go-home").removeEventListener("click", goToMain);
  document
    .getElementById("go-list")
    .removeEventListener("click", goToCheatList);
  document.getElementById("start").removeEventListener("click", goToContent);
  //Template injection

  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", templateContent);

  let usernameNode = document.getElementById("content").content;
  let copyNode = document.importNode(usernameNode, true);

  wrapper.innerHTML = "";

  wrapper.appendChild(copyNode);

  //Event Listeners
  document.getElementById("go-home").addEventListener("click", goToMain);
  document.getElementById("go-list").addEventListener("click", goToCheatList);
  document.getElementById("change-code").addEventListener("click", changeCode);
}

function changeCode() {
  //TODO Mark the div from which you are using the code
  //TODO Toggle the button content (JQ/JS)
}

export { contentPage };
