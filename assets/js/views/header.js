import { headerHomeTemplate, headerPageTemplate } from "../templates.js";
import { wrapper } from "../main.js";

function getHeader() {
	if (wrapper.innerHTML !== "") {
		//borrar eventos
	}
	wrapper.innerHTML = "";
	switch (location.hash) {
		case "":
			headerSwitch(headerHomeTemplate);
			break;
		case "#":
			headerSwitch(headerHomeTemplate);
			break;
		default:
			headerSwitch(headerPageTemplate);
			break;
	}
}

function headerSwitch(template) {
	let header = template;
	//clone template
	wrapper.insertAdjacentHTML("afterbegin", header);
	let templateNode = document.getElementById("header-home-temp").content;
	let cloneNode = document.importNode(templateNode, true);

	wrapper.lastChild.remove();
	wrapper.appendChild(cloneNode);
}

export { getHeader };
