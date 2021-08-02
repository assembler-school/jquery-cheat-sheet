import { homepageDisplay } from "./views/homepage.js";
import { pageDisplay } from "./views/page.js";
import { indexDisplay } from "./views/index.js";

function navigate() {
	console.log("entre en router", location.hash);
	switch (location.hash) {
		case "":
			homepageDisplay();
			break;
		case "#":
			homepageDisplay();
			break;
		case "#page":
			pageDisplay();
			break;
		case "#index":
			indexDisplay();
			break;
		default:
			homepageDisplay();
			break;
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
