import { headerHomeTemplate, headerPageTemplate } from "../templates.js";
import { wrapper } from "../main.js";
import { insertTemplate } from "../functions.js";
import { goToExample, goToHome } from "../router.js";
import { startDragging, stopDragging } from "./page.js";

function getHeader() {
	if (wrapper.innerHTML !== "") {
		if (document.getElementById("page-main")) {
			document
				.getElementById("page-header-logo")
				.removeEventListener("click", goToHome);
			if (document.querySelectorAll("div[draggable=true]")) {
				let areDraggables = document.querySelectorAll("div[draggable=true]");
				areDraggables.forEach((element) => {
					element.addEventListener("dragstart", startDragging);
					element.addEventListener("dragend", stopDragging);
				});
			}
		}
		if (document.getElementById("home-main")) {
			document
				.getElementById("autocomplete-go-btn")
				.removeEventListener("click", goToExample);
		}
	}
	wrapper.innerHTML = "";
	switch (location.hash) {
		case "":
			insertTemplate(wrapper, headerHomeTemplate, "header-home-temp");
			break;
		case "#":
			insertTemplate(wrapper, headerHomeTemplate, "header-home-temp");
			break;
		default:
			insertTemplate(wrapper, headerPageTemplate, "header-page-temp");
			break;
	}
}

export { getHeader };
