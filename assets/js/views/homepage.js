import { getHeader } from "./header.js";
import { insertTemplate } from "../functions.js";
import { mainHomeTemplate } from "../templates.js";
import { getFooter } from "./footer.js";

function homepageDisplay() {
	getHeader();
	insertTemplate(mainHomeTemplate, "main-home-temp");
	getFooter();
}

export { homepageDisplay };
