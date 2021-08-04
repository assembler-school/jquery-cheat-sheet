import { data } from "./data.js";
import { updateModal, displayModal } from "./componentModal.js";
import createFragmentFromTemplate from "./template.js";

export function insertExampleCards(exampleList) {
	const grids = {
		event: document.querySelector("#grid-event-examples"),
		manipulation: document.querySelector("#grid-manipulation-examples"),
		selection: document.querySelector("#grid-selection-examples"),
	};

	exampleList.forEach((example) => {
		const grid = grids[example.type];
		const exampleCardFragment = createExampleCard(example);

		grid.appendChild(exampleCardFragment);
	});
}

function createExampleCard(example) {
	if (example === undefined || example === null) return console.warn("Example data object is undefined or null.");

	const exampleCardFragment = createFragmentFromTemplate("#template-example-card");
	const exampleCard = exampleCardFragment.querySelector(".example-card");

	exampleCard.dataset.id = example.id;
	exampleCard.querySelector(".example-card__number").textContent = example.id.toString().padStart(2, "0");
	exampleCard.querySelector(".example-card__title").textContent = example.title;

	exampleCardEventListener(exampleCard);

	return exampleCardFragment;
}

function exampleCardEventListener(target) {
	target.addEventListener("click", function (ev) {
		const id = parseInt(this.dataset.id);
		const example = data.examples.find((example) => example.id === id);

		updateModal(example);
		displayModal();
	});
}
