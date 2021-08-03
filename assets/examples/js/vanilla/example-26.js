document.querySelector("#ex-26-vanilla-btn").addEventListener("click", function (ev) {
	const img = document.querySelector("#ex-26-vanilla-img");
	img.dataset.src = img.getAttribute("src");
});
