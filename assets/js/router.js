import { homepageDisplay } from "./views/homepage.js";
import { pageDisplay } from "./views/page.js";
import { indexDisplay } from "./views/index.js";

function navigate() {
	if (location.hash === "" || location.hash === "#") {
		homepageDisplay();
	} else if (location.hash.includes("page")) {
		pageDisplay();
	} else if (location.hash.includes("index")) {
		indexDisplay();
	}
}

function goToHome(e) {
	e.preventDefault();
	e.stopPropagation();
	location.hash = "";
}

function goToPage() {
	e.preventDefault();
	e.stopPropagation();
	location.hash = "page";
}

function goToIndex() {
	e.preventDefault();
	e.stopPropagation();
	location.hash = "index";
}

export { navigate, goToHome, goToPage, goToIndex };
