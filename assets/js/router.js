import { homepageDisplay } from "./views/homepage.js";
import { pageDisplay } from "./views/page.js";
import { indexDisplay } from "./views/index.js";
import { getExampleTitle } from "./functions.js";

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

function goToIndex(e) {
	e.preventDefault();
	e.stopPropagation();
	location.hash = "index";
}

function goToExample(e) {
	if (e.key != "Enter") {
		e.preventDefault();
		e.stopPropagation();
	}
	// Type - Title
	let goToString = document.getElementById("autocomplete-field").value;
	let goToArray = goToString.split("-");
	let type = goToArray[0];
	let title = goToArray[1];
	let key = type + "s";
	let example = getExampleTitle(key, title);
	location.hash = "page/" + key + "/" + example.id;
}

export { navigate, goToHome, goToIndex, goToExample };
