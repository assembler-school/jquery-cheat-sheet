import { data } from "./data.js";
import { updateModal, displayModal } from "./componentModal.js";
import createFragmentFromTemplate from "./template.js";

export function insertExampleCards(exampleList) {
	const exampleGridEvents = document.querySelector("#grid-event-examples");
	const exampleGridManipulations = document.querySelector("#grid-manipulation-examples");

	if (!exampleGridEvents || !exampleGridManipulations) return console.warn("One or more target elements does not exist.");

	exampleList.forEach((example) => {
		const target = example.type === "event" ? exampleGridEvents : example.type === "manipulation" ? exampleGridManipulations : null;
		const fragment = createExampleCard(example, target);

		target.appendChild(fragment);
	});
}

function createExampleCard(example) {
	if (example === undefined || example === null) return console.warn("Example data object is undefined or null.");

	const fragment = createFragmentFromTemplate("#template-example-card");
	const exampleCard = fragment.querySelector(".example-card");

	exampleCard.dataset.id = example.id;
	exampleCard.querySelector(".example-card__title").textContent = example.title;

	exampleCardEventListener(exampleCard);

	return fragment;
}

function exampleCardEventListener(target) {
	target.addEventListener("click", function (ev) {
		const id = parseInt(this.dataset.id);
		const example = data.examples.find((example) => example.id === id);

		updateModal(example);
		displayModal();
	});
}
