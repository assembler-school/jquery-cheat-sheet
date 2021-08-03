document.querySelector("#ex-34-vanilla-btn").addEventListener("click", function (ev) {
	const childElements = document.querySelector("#ex-34-vanilla-parent").children;

	for (const childElement of childElements) {
		childElement.style.setProperty("font-weight", "bold");
	}
});
