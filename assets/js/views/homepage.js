import { getHeader } from "./header.js";
import { wrapper } from "../main.js";
import { insertTemplate } from "../functions.js";
import { mainHomeTemplate } from "../templates.js";
import { goToExample } from "../router.js";

function homepageDisplay() {
	getHeader();
	insertTemplate(wrapper, mainHomeTemplate, "main-home-temp");
	document
		.getElementById("autocomplete-go-btn")
		.addEventListener("click", goToExample);
}

export { homepageDisplay };
