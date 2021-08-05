document.addEventListener("DOMContentLoaded", function (ev) {
	setTimeout(() => {
		const element = document.querySelector("#ex-42-vanilla-msg");

		element.addEventListener("animationend", () => {
			element.style.setProperty("display", "none");
			element.classList.remove("animation");
		});

		element.classList.add("animation");
	}, 2000);
});
