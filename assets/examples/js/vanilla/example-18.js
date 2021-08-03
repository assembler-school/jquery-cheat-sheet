document.querySelector("#ex-18-vanilla-btn").addEventListener("click", function (ev) {
	if (document.querySelector("#ex-18-vanilla-msg")) return;

	const referenceElement = document.querySelector("#ex-18-vanilla-parent").children[1];
	const newElement = document.createElement("p");

	newElement.classList.add("bg-02", "text-align-center", "text-white", "p-3", "br-2", "bs-black-03");
	newElement.textContent = "This HTML Element has been been added after 'Bar' with Vanilla JS.";
	newElement.id = "ex-18-vanilla-msg";

	referenceElement.insertAdjacentElement("afterend", newElement);
});
