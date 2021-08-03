document.querySelector("#ex-25-vanilla-btn").addEventListener("click", function (ev) {
	const targetBtn = document.querySelector("#ex-25-jquery-btn");
	targetBtn.disabled = false;
	targetBtn.classList.remove("bg-02");

	this.disabled = true;
	this.classList.add("bg-02");
});
