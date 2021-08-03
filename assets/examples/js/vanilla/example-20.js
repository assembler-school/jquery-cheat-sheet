document.querySelector("#ex-20-vanilla-btn").addEventListener("click", function (ev) {
	if (document.querySelector("#ex-20-vanilla-clone")) return;

	const referenceElement = document.querySelector("#ex-20-vanilla-original");
	const newElement = referenceElement.cloneNode(true);

	newElement.id = "ex-20-vanilla-clone";
	newElement.textContent = "Hey! I'm the clone :D";
	referenceElement.insertAdjacentElement("afterend", newElement);
});
