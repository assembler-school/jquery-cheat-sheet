import { headerHomeTemplate, headerPageTemplate } from "../templates.js";
import { wrapper } from "../main.js";
import { insertTemplate, enterGoTo } from "../functions.js";
import { goToExample, goToHome } from "../router.js";
import { startDragging, stopDragging } from "./page.js";

function getHeader() {
	if (wrapper.innerHTML !== "") {
		if (document.getElementById("page-main")) {
			document
				.getElementById("page-header-logo")
				.removeEventListener("click", goToHome);
			document
				.getElementById("autocomplete-go-btn")
				.removeEventListener("click", goToExample);
			window.addEventListener("keydown", enterGoTo);
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
			window.removeEventListener("keydown", enterGoTo);
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
			document
				.getElementById("autocomplete-go-btn")
				.addEventListener("click", goToExample);
			window.addEventListener("keydown", enterGoTo);
			break;
	}
}

export { getHeader };
