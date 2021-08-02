import { data } from "./data.js";

export function updateModal(example) {
	const modal = document.querySelector("#modal");
	const srcPath = `${data.path}/example-${example.id.toString().padStart(2, "0")}.html`;

	modal.querySelector("#example-title").textContent = example.title;
	modal.querySelector("#example-description").textContent = example.description;
	modal.querySelector("#example-code-vanilla").innerHTML = example.vanillaCode;
	modal.querySelector("#example-code-jquery").innerHTML = example.jQueryCode;
	modal.querySelector("#example-sandbox").setAttribute("src", srcPath);
}

export function displayModal() {
	const modal = document.querySelector("#modal");

	modal.classList.remove("no-display");
}

export function closeModal() {
	const modal = document.querySelector("#modal");

	modal.classList.add("no-display");
}

export function modalEventListener() {
	const modal = document.querySelector("#modal");

	modal.addEventListener("click", function (ev) {
		if (ev.target.dataset.action === "close-modal") closeModal();
	});
}
