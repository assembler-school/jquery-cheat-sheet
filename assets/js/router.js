import { homepageDisplay } from "./views/homepage.js";
import { pageDisplay } from "./views/page.js";
import { indexDisplay } from "./views/index.js";
import { getExample, getExampleTitle } from "./functions.js";

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

function goToExample() {
	// Type - Title
	let goToString = document.getElementById("autocomplete-field").value;
	let goToArray = goToString.split("-");
	let type = goToArray[0];

	let title = goToArray[1];
	let key = type + "s";

	let example = getExampleTitle(key, title);

	location.hash = "page/" + key + "/" + example.id;
}

export { navigate, goToHome, goToPage, goToIndex, goToExample };
