document.querySelector("#ex-23-vanilla-btn").addEventListener("click", function (ev) {
	const element = document.querySelector("#ex-23-vanilla-msg");

	element.classList.toggle("bg-green");
	element.textContent = element.classList.contains("bg-green") ? "I don't want to be green." : "I want to be green.";
});
