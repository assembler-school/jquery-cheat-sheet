import { data } from "./data.js";
import { exampleCardEventListener, insertExampleCards } from "./componentExampleCard.js";
import { modalEventListener } from "./componentModal.js";

document.addEventListener("DOMContentLoaded", function (ev) {
	insertExampleCards(data.examples);
	exampleCardEventListener(data.examples);
	modalEventListener();
});
