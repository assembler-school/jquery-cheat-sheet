document.querySelector("#ex-16-vanilla-btn").addEventListener("click", function (ev) {
	const parentElement = document.querySelector("#ex-16-vanilla-parent");
	const childElement = document.querySelector("#ex-16-vanilla-child");

	childElement.textContent = "This HTML Element has been appended with Vanilla JS.";

	parentElement.insertAdjacentElement("beforeend", childElement);
});
