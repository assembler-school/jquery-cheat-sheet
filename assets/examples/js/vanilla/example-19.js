document.querySelector("#ex-19-vanilla-btn").addEventListener("click", function (ev) {
	if (document.querySelector("#ex-19-vanilla-msg")) return;

	const referenceElement = document.querySelector("#ex-19-vanilla-parent").children[1];
	const newElement = document.createElement("p");

	newElement.classList.add("bg-02", "text-align-center", "text-white", "p-3", "br-2", "bs-black-03");
	newElement.textContent = "This HTML Element has been added before 'Bar' with Vanilla JS.";
	newElement.id = "ex-19-vanilla-msg";

	referenceElement.insertAdjacentElement("beforebegin", newElement);
});
