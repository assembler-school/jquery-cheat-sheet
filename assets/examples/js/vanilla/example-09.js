document.querySelector("#ex-09-vanilla-form").addEventListener("submit", function (ev) {
	ev.preventDefault();
	document.querySelector("#ex-09-vanilla-msg").textContent = `Submitted value: ${this.input.value}`;
});
