import { wrapper } from "./main.js";

function insertTemplate(div, template, id) {
	let htmlNode = template;
	let wrapper = div;
	//clone template
	wrapper.insertAdjacentHTML("beforeend", htmlNode);
	let templateNode = document.getElementById(id).content;
	let cloneNode = document.importNode(templateNode, true);

	wrapper.lastChild.remove();
	wrapper.appendChild(cloneNode);
}

export { insertTemplate };
