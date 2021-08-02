document.querySelector("#ex-10-vanilla-select").addEventListener("change", function (ev) {
	document.querySelector("#ex-10-vanilla-msg").textContent = `Selected value: ${ev.target.value}`;
});
