import { footerTemplate } from "../templates.js";
import { insertTemplate } from "../functions.js";

function getFooter() {
	insertTemplate(footerTemplate, "footer-temp");
}

export { getFooter };
