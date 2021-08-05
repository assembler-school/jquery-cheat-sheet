document.querySelector("#ex-14-vanilla-btn").addEventListener("click", function (ev) {
	if (document.querySelector("#ex-14-vanilla-msg")) return;

	const element = document.createElement("p");

	element.classList.add("bg-02", "text-align-center", "text-white", "p-3", "br-2", "bs-black-03");
	element.textContent = "This HTML Element has been created with Vanilla JS.";
	element.id = "ex-14-vanilla-msg";

	this.insertAdjacentElement("afterend", element);
});
