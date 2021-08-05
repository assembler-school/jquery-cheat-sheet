export function updateModal(example) {
	const modal = document.querySelector("#modal");

	const title = modal.querySelector("#example-title");
	const sandbox = modal.querySelector("#example-sandbox");
	const vanillaCodeContainer = modal.querySelector("#example-code-vanilla");
	const jQueryCodeContainer = modal.querySelector("#example-code-jquery");

	const [srcPath, vanillaJSPath, jQueryPath] = [getPathForHTMLFile(example), getPathForVanillaJSFile(example), getPathForJQueryFile(example)];

	title.textContent = example.title;
	sandbox.setAttribute("src", srcPath);
	displayCode(vanillaJSPath, vanillaCodeContainer);
	displayCode(jQueryPath, jQueryCodeContainer);
}

export function displayModal() {
	const modal = document.querySelector("#modal");

	modal.classList.remove("hidden");
}

export function closeModal() {
	const modal = document.querySelector("#modal");

	modal.classList.add("hidden");
}

export function modalEventListener() {
	const modal = document.querySelector("#modal");

	modal.addEventListener("click", function (ev) {
		if (ev.target.dataset.action === "close-modal") closeModal();
	});
}

function displayCode(path, element) {
	fetch(path)
		.then((response) => response.text())
		.then((text) => {
			element.innerHTML = text.replace(/\t/g, "&nbsp;&nbsp;");
		});
}

function getPathForHTMLFile(example) {
	const pathHTML = "./assets/examples/html";

	return `${pathHTML}/example-${example.id.toString().padStart(2, "0")}.html`;
}

function getPathForVanillaJSFile(example) {
	const pathVanillaJS = "./assets/examples/js/vanilla";

	return `${pathVanillaJS}/example-${example.id.toString().padStart(2, "0")}.js`;
}

function getPathForJQueryFile(example) {
	const pathJQuery = "./assets/examples/js/jquery";

	return `${pathJQuery}/example-${example.id.toString().padStart(2, "0")}.js`;
}
