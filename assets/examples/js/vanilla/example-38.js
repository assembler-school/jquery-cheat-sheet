document.querySelector("#ex-38-vanilla-select").addEventListener("change", function (ev) {
	const options = ev.target.selectedOptions;
	const values = [];

	for (const option of options) {
		values.push(option.value);
	}

	document.querySelector("#ex-38-vanilla-msg").textContent = `Selected value: ${values.join(", ")}`;
});
