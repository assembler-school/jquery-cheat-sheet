import { goToExample } from "./router.js";

function insertTemplate(div, template, id) {
	let htmlNode = template;
	let wrapper = div;

	wrapper.insertAdjacentHTML("beforeend", htmlNode);
	let templateNode = document.getElementById(id).content;
	let cloneNode = document.importNode(templateNode, true);

	wrapper.lastChild.remove();
	wrapper.appendChild(cloneNode);
}

function initialSetLocalStorage(key, arrayObject) {
	if (!localStorage.getItem(key)) {
		localStorage.setItem(key, JSON.stringify(arrayObject));
	}
}

function updateLocalStorage(key, object) {
	if (key === "code") {
		if (localStorage.getItem(key) == "") {
			localStorage.setItem(key, JSON.stringify(object));
		} else {
			let string = localStorage.getItem(key);
			string += " " + object;
			localStorage.setItem(key, string);
		}
	} else if (key === "codeOption") {
		localStorage.setItem(key, object);
	} else {
		let array = JSON.parse(localStorage.getItem(key));
		for (const element of array) {
			if (element.title === object.title) {
				return;
			}
		}
		array.push(object);
		localStorage.setItem(key, JSON.stringify(array));
	}
}

let id = 0;
function createExample(
	title,
	type,
	jsCode,
	jqueryCode,
	jsText,
	jqueryText,
	jsExample,
	jqueryExample
) {
	let example = {
		id: id,
		title: title,
		type: type,
		js_code: jsCode,
		jquery_code: jqueryCode,
		js_text: jsText,
		jquery_text: jqueryText,
		js_example: jsExample,
		jquery_example: jqueryExample,
	};
	id++;

	if (type === "events") {
		updateLocalStorage("events", example);
	} else if (type === "functions") {
		updateLocalStorage("functions", example);
	} else if (type === "selectors") {
		updateLocalStorage("selectors", example);
	}
}

// location.hash=#page/(example.type)/(example.id)
function getExampleIdKey() {
	let arrayUrl = location.hash.split("/");

	let key = arrayUrl[1];
	let id = parseInt(arrayUrl[2]);

	return [key, id];
}

function getExample(key, id) {
	let examples = localStorage.getItem(key);
	let examplesObjects = JSON.parse(examples);

	for (const iterator of examplesObjects) {
		if (iterator.id === id) {
			return iterator;
		}
	}
}

function getExampleTitle(key, title) {
	let examples = localStorage.getItem(key);
	let examplesObjects = JSON.parse(examples);

	for (const iterator of examplesObjects) {
		if (iterator.title == title) {
			return iterator;
		}
	}
}

function stopDragg() {
	let wid = window.innerWidth;
	if (wid < 768) {
		let areDraggables = document.querySelectorAll("div[draggable=true]");
		areDraggables.forEach((element) => {
			element.setAttribute("draggable", false);
		});
	}
}

function enterGoTo(e) {
	if (e.key === "Enter") {
		e.preventDefault();
		e.stopPropagation();
		goToExample(e);
	}
}

export {
	insertTemplate,
	initialSetLocalStorage,
	updateLocalStorage,
	createExample,
	getExampleIdKey,
	getExample,
	stopDragg,
	getExampleTitle,
	enterGoTo,
};
