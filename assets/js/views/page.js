import { pageMainTemplate } from "../templates.js";
import { getFooter } from "./footer.js";
import { getHeader } from "./header.js";
import { insertTemplate } from "../functions.js";

function pageDisplay() {
	getHeader();
	insertTemplate(pageMainTemplate, "page-main-temp");
	getFooter();
}

export { pageDisplay };
