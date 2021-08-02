import { wrapper } from "./main.js";

function insertTemplate(template, id) {
	let htmlNode = template;
	//clone template
	wrapper.insertAdjacentHTML("beforeend", htmlNode);
	let templateNode = document.getElementById(id).content;
	let cloneNode = document.importNode(templateNode, true);

	wrapper.lastChild.remove();
	wrapper.appendChild(cloneNode);
}

export { insertTemplate };
