import { pageMainTemplate } from "../templates.js";
import { getFooter } from "./footer.js";
import { getHeader } from "./header.js";
import { insertTemplate } from "../functions.js";
import { wrapper } from "../main.js";

function pageDisplay() {
	getHeader();
	insertTemplate(wrapper, pageMainTemplate, "page-main-temp");
	getFooter();

	eventsGrabbing();
}

function eventsGrabbing() {
	let areDraggables = document.querySelectorAll("div[draggable=true]");
	console.log(areDraggables);

	areDraggables.forEach((element) => {
		element.addEventListener("dragstart", startDragging);
	});
}

function startDragging(array) {
	array.forEach((element) => {
		element.classList.add();
	});
}

//*TODO audio when dragged on drop on

export { pageDisplay };
