import { setWebSiteContent } from "./examples.js";
import { stopDragg } from "./functions.js";
import { navigate } from "./router.js";
import { copyToClipboard } from "./views/sidebar.js";

let wrapper = document.getElementById("app-content");
window.addEventListener("hashchange", navigate);
window.addEventListener("resize", stopDragg);
document
	.getElementById("sidebar__copy-btn")
	.addEventListener("click", copyToClipboard);

setWebSiteContent();
navigate();

export { wrapper };
