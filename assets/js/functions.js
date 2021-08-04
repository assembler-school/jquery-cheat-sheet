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
	let array = JSON.parse(localStorage.getItem(key));
	for (const element of array) {
		if (element.title === object.title) {
			return;
		}
	}
	array.push(object);
	localStorage.setItem(key, JSON.stringify(array));
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

	if (type === "event") {
		updateLocalStorage("events", example);
	} else if (type === "function") {
		updateLocalStorage("functions", example);
	} else if (type === "selector") {
		updateLocalStorage("selectors", example);
	}
}

export {
	insertTemplate,
	initialSetLocalStorage,
	updateLocalStorage,
	createExample,
};
