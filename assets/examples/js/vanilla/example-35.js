document.querySelector("#ex-35-vanilla-btn").addEventListener("click", function (ev) {
	document.querySelectorAll(".ex-35-vanilla-child").forEach((element) => {
		element.style.setProperty("font-weight", "bold");
	});
});
