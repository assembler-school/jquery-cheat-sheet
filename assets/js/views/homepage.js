import { getHeader } from "./header.js";
import { wrapper } from "../main.js";
import { insertTemplate } from "../functions.js";
import { mainHomeTemplate } from "../templates.js";

function homepageDisplay() {
	getHeader();
	insertTemplate(wrapper, mainHomeTemplate, "main-home-temp");
}

export { homepageDisplay };
