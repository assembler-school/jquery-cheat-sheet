import { pageIndexTemplate } from "../templates.js";
import { getHeader } from "./header.js";
import { insertTemplate } from "../functions.js";
import { getFooter } from "./footer.js";

function indexDisplay() {
	getHeader();
	insertTemplate(pageIndexTemplate, "page-index-temp");
	getFooter();
}

export { indexDisplay };
