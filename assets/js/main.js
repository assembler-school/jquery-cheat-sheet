import { setWebSiteContent } from "./examples.js";
import { navigate } from "./router.js";
import { copyToClipboard } from "./views/sidebar.js";

let wrapper = document.getElementById("app-content");
window.addEventListener("hashchange", navigate);
document
	.getElementById("sidebar__copy-btn")
	.addEventListener("click", copyToClipboard);

setWebSiteContent();
navigate();

export { wrapper };
