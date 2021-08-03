import { pageIndexTemplate } from "../templates.js";
import { getHeader } from "./header.js";
import { wrapper } from "../main.js";
import { insertTemplate } from "../functions.js";
import { getFooter } from "./footer.js";

function indexDisplay() {
	getHeader();
	insertTemplate(wrapper, pageIndexTemplate, "page-index-temp");
	getFooter();
}

export { indexDisplay };
