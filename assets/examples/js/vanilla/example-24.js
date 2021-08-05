document.querySelector("#ex-24-vanilla-btn").addEventListener("click", function (ev) {
	const button = ev.target;
	button.disabled = true;
	button.classList.add("bg-02");

	document.querySelector("#ex-24-vanilla-msg").classList.remove("hidden");

	setTimeout(() => {
		button.disabled = false;
		button.classList.remove("bg-02");
		document.querySelector("#ex-24-vanilla-msg").classList.add("hidden");
	}, 3000);
});
