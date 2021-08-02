import { wrapper } from "../main.js";
import { templateList } from "../templates.js";
import { goToMain, goToCheatList } from "../router.js";
import { cases } from "../cases.js";
import { contentPage } from "./content-page.js";

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

  //List of Cases
  //TODO arrange icons and classes to create different thematics

  let list = document.getElementById("list1");
  cases.forEach((e) => {
    let li = document.createElement("li");
    li.className = "case";
    li.id = e.dataCheat;
    li.innerHTML = e.content;
    list.appendChild(li);
  });

  //Event Listener of Cases
  //   for (let c of list.children) {
  //     c.addEventListener("click", contentPage(c.id));
  //   }
}

export { cheatList };
