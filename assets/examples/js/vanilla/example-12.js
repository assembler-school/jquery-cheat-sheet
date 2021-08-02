document.querySelector("#ex-12-vanilla-chk").addEventListener("change", function (ev) {
	const msg = document.querySelector("#ex-12-vanilla-msg");
	if (ev.target.checked) {
		msg.classList.remove("no-display");
	} else {
		msg.classList.add("no-display");
	}
});
