document.querySelector("#ex-17-vanilla-btn").addEventListener("click", function (ev) {
	const parentElement = document.querySelector("#ex-17-vanilla-parent");
	const childElement = document.querySelector("#ex-17-vanilla-child");

	childElement.textContent = "This HTML Element has been prepended with Vanilla JS.";

	parentElement.insertAdjacentElement("afterbegin", childElement);
});
