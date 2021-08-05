document.querySelector("#ex-25-vanilla-btn").addEventListener("click", function (ev) {
	const buttonVanilla = ev.target;
	buttonVanilla.disabled = true;
	buttonVanilla.classList.add("bg-02");

	const buttonJQuery = document.querySelector("#ex-25-jquery-btn");
	buttonJQuery.disabled = false;
	buttonJQuery.classList.remove("bg-02");
});
