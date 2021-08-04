document.addEventListener("keydown", function (ev) {
	document.querySelector("#ex-04-vanilla-msg").textContent = `Key pressed: ${ev.key.toUpperCase()}`;
});
