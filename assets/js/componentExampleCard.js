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

export function exampleCardEventListener(exampleList) {
	document.addEventListener("click", function (ev) {
		const target = elementBubbleSearch(ev.target, (element) => element.matches("[data-action~='display-modal']"));

		if (target) {
			const id = parseInt(target.dataset.id);
			const example = exampleList.find((example) => example.id === id);
			updateModal(example);
			displayModal();
		}
	});
}

function createExampleCard(example) {
	if (example === undefined || example === null) return console.warn("Example data object is undefined or null.");

	const exampleCardFragment = createFragmentFromTemplate("#template-example-card");
	const exampleCard = exampleCardFragment.querySelector(".example-card");

	exampleCard.dataset.id = example.id;
	exampleCard.querySelector(".example-card__number").textContent = example.id.toString().padStart(2, "0");
	exampleCard.querySelector(".example-card__title").textContent = example.title;

	return exampleCardFragment;
}

function elementBubbleSearch(element, conditionCb) {
	if (!element) return null;
	if (conditionCb(element)) return element;

	return elementBubbleSearch(element.parentElement, conditionCb);
}
