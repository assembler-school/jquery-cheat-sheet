document.querySelector("#ex-06-vanilla-input").addEventListener("input", function (ev) {
	document.querySelector("#ex-06-vanilla-msg").textContent = ev.target.value;
});
