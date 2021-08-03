document.querySelector("#ex-24-vanilla-btn").addEventListener("click", function (ev) {
	this.disabled = true;
	this.classList.add("bg-02");

	document.querySelector("#ex-24-vanilla-msg").classList.remove("no-display");

	setTimeout(() => {
		this.disabled = false;
		this.classList.remove("bg-02");
		document.querySelector("#ex-24-vanilla-msg").classList.add("no-display");
	}, 3000);
});
