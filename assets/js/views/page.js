import { pageMainTemplate } from "../templates.js";
import { getFooter } from "./footer.js";
import { getHeader } from "./header.js";
import {
	insertTemplate,
	updateLocalStorage,
	getExampleIdKey,
	getExample,
} from "../functions.js";
import { wrapper } from "../main.js";
import { dropOnArea } from "./sidebar.js";

function pageDisplay() {
	getHeader();
	insertTemplate(wrapper, pageMainTemplate, "page-main-temp");
	getFooter();

	eventsGrabbing();
	dropOnArea();
}

function eventsGrabbing() {
	let areDraggables = document.querySelectorAll("div[draggable=true]");
	areDraggables.forEach((element) => {
		element.addEventListener("dragstart", startDragging);
		element.addEventListener("dragend", stopDragging);
	});
}

function startDragging(e) {
	e.dataTransfer.setData("text", e.currentTarget.id);
	updateLocalStorage("codeOption", e.target.id);
	e.target.classList.add("is-dragging");

	//Actualizar con el texto que trae el objeto con el id de la card
	let id = getExampleIdKey()[1];
	console.log(id);
	let key = getExampleIdKey()[0];
	console.log(key);
	console.log(getExample());
	if (localStorage.getItem("codeOption") === "jquery-code") {
		updateLocalStorage("code", getExample().jquery_code);
	} else if (localStorage.getItem("codeOption") === "js-code") {
		updateLocalStorage("code", getExample().js_code);
	}
}

function stopDragging(e) {
	e.target.classList.remove("is-dragging");
}

//*TODO audio when dragged on drop on

export { pageDisplay };
