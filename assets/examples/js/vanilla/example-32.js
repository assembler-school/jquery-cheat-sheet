document.querySelector("#ex-32-vanilla-btn").addEventListener("click", function (ev) {
	document.querySelectorAll("#ex-32-vanilla-parent > *").forEach((element) => {
		element.style.setProperty("background-color", "black");
	});
});
