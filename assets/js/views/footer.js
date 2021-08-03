import { footerTemplate, navTemplate } from "../templates.js";
import { insertTemplate } from "../functions.js";
import { wrapper } from "../main.js";

function getFooter() {
	insertTemplate(wrapper, footerTemplate, "footer-temp");
	insertTemplate(document.getElementById("footer"), navTemplate, "nav-temp");
}

export { getFooter };
