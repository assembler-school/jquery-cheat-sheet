document.querySelector("#ex-31-vanilla-btn").addEventListener("click", function (ev) {
	if ($("#ex-31-vanilla-msg").length) return;

	const childrenElements = document.querySelector("#ex-31-vanilla-parent").children;

	for (let i = 0; i < childrenElements.length; i++) {
		const duration = (i + 1) * 1000;

		fadeOut(childrenElements[i], duration);
	}
});

function fadeOut(element, duration) {
	if (getComputedStyle(element).getPropertyValue("display") === "none") return;

	const animationStart = new Date().getTime();
	const animationEnd = animationStart + duration;

	element.style.opacity = 1;

	(function fade() {
		const currentTime = new Date().getTime();

		if (currentTime > animationEnd) {
			element.style.display = "none";
			element.style.opacity = null;
		} else {
			const elapsed = (currentTime - animationStart) / duration;

			element.style.opacity = 1 - elapsed;
			requestAnimationFrame(fade);
		}
	})();
}
