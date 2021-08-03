import { pageMainTemplate } from "../templates.js";
import { getFooter } from "./footer.js";
import { getHeader } from "./header.js";
import { insertTemplate } from "../functions.js";
import { wrapper } from "../main.js";

function pageDisplay() {
	getHeader();
	insertTemplate(wrapper, pageMainTemplate, "page-main-temp");
	getFooter();
}

//*TODO audio when dragged on drop on

export { pageDisplay };
