document.querySelector("#ex-30-vanilla-btn").addEventListener("click", function (ev) {
	if ($("#ex-30-vanilla-msg").length) return;

	const childrenElements = document.querySelector("#ex-30-vanilla-parent").children;

	for (let i = 0; i < childrenElements.length; i++) {
		const duration = (i + 1) * 1000;

		fadeIn(childrenElements[i], duration);
	}
});

function fadeIn(element, duration) {
	if (getComputedStyle(element).getPropertyValue("display") !== "none") return;

	const animationStart = new Date().getTime();
	const animationEnd = animationStart + duration;

	element.style.opacity = 0;
	element.style.display = null;

	(function fade() {
		const currentTime = new Date().getTime();

		if (currentTime > animationEnd) {
			element.style.opacity = null;
		} else {
			const elapsed = (currentTime - animationStart) / duration;

			element.style.opacity = elapsed;
			requestAnimationFrame(fade);
		}
	})();
}
