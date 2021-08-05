document.querySelector("#ex-37-vanilla-btn").addEventListener("click", function (ev) {
	document.querySelectorAll(".ex-37-vanilla-child").forEach((element) => {
		if (getComputedStyle(element).getPropertyValue("display") === "none") {
			element.style.setProperty("color", "blue");
			element.style.setProperty("display", null);
		}
	});
});
