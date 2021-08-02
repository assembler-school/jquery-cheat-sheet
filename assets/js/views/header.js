import { headerHomeTemplate, headerPageTemplate } from "../templates.js";
import { wrapper } from "../main.js";

function getHeader() {
	if (location.hash === "" || location.hash === "#") {
		headerHome();
	} else {
		headerPage();
	}
}

function headerHome() {
	if (wrapper.innerHTML !== "") {
		//borrar eventos
	}

	//clone template
	wrapper.insertAdjacentElement("afterbegin", headerHomeTemplate);
	let template = document.getElementById("home-header");

	let clone = template.cloneNode(true);

	wrapper.innerHTML = "";
	wrapper.append(clone);
}

function headerPage() {
	if (wrapper.innerHTML !== "") {
		//borrar eventos
	}

	//clone template
	wrapper.insertAdjacentElement("afterbegin", headerPageTemplate);
}

export { getHeader };
