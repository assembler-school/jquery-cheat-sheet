document.querySelector("#ex-13-vanilla-list").addEventListener("click", function (ev) {
	if (ev.target.matches("li")) document.querySelector("#ex-13-vanilla-msg").textContent = `Clicked item: ${ev.target.textContent}`;
});
