document.querySelector("#ex-20-vanilla-btn").addEventListener("click", function (ev) {
	if (document.querySelector("#ex-20-vanilla-clone")) return;

	const referenceElement = document.querySelector("#ex-20-vanilla-reference");
	const newElement = referenceElement.cloneNode(true);

	newElement.id = "ex-20-vanilla-clone";
	referenceElement.insertAdjacentElement("afterend", newElement);
});
