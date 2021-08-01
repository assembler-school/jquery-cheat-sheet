import { data } from "./data.js";
import { insertExampleCards } from "./componentExampleCard.js";
import { modalEventListener } from "./componentModal.js";

document.addEventListener("DOMContentLoaded", function (ev) {
	insertExampleCards(data.examples);
	modalEventListener();
});
