document.addEventListener("mousemove", function (ev) {
	document.querySelector("#ex-05-vanilla-msg").textContent = `Mouse is at position (${ev.x}, ${ev.y})`;
});
