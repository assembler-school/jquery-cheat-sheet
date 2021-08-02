import { headerHomeTemplate, headerPageTemplate } from "../templates.js";
import { wrapper } from "../main.js";
import { insertTemplate } from "../functions.js";

function getHeader() {
	if (wrapper.innerHTML !== "") {
		//*TODO borrar eventos
	}
	wrapper.innerHTML = "";
	switch (location.hash) {
		case "":
			insertTemplate(headerHomeTemplate, "header-home-temp");
			break;
		case "#":
			insertTemplate(headerHomeTemplate, "header-home-temp");
			break;
		default:
			insertTemplate(headerPageTemplate, "header-page-temp");
			break;
	}
}

export { getHeader };
