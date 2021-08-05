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
import { goToHome } from "../router.js";

let id;
let key;
let example;

function pageDisplay() {
	if (location.hash.includes("page")) {
		id = getExampleIdKey()[1];
		key = getExampleIdKey()[0];
		example = getExample(key, id);

		//header
		getHeader();
		document
			.getElementById("page-header-logo")
			.addEventListener("click", goToHome);

		//main
		insertTemplate(wrapper, pageMainTemplate, "page-main-temp");
		//drag only on desktop
		if (document.querySelectorAll("div[draggable=true]")) {
			eventsGrabbing();
			dropOnArea();
		}
		insertTitles();
		insertText();
		insertExamples();

		//footer
		getFooter();
	}
}

function insertTitles() {
	document.getElementById("page-main-type-title").innerHTML = example.type;
	document.getElementById("page-main-example-title").innerHTML = example.title;
}

function insertText() {
	let jsText = document.createElement("p");
	jsText.classList.add("text-content__js-text");
	jsText.textContent = example.js_text;
	document.getElementById("js-col").insertAdjacentElement("beforeend", jsText);

	let jqueryText = document.createElement("p");
	jqueryText.textContent = example.jquery_text;
	jqueryText.classList.add("text-content__jquery-text");
	document
		.getElementById("jquery-col")
		.insertAdjacentElement("beforeend", jqueryText);
}

function insertExamples() {
	document.getElementById("js-example").innerHTML = example.js_example;
	document.getElementById("jquery-example").innerHTML = example.jquery_example;
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

	if (localStorage.getItem("codeOption") === "jquery-code") {
		updateLocalStorage("code", example.jquery_code);
	} else if (localStorage.getItem("codeOption") === "js-code") {
		updateLocalStorage("code", example.js_code);
	}
}

function stopDragging(e) {
	e.target.classList.remove("is-dragging");
}

export { pageDisplay };
