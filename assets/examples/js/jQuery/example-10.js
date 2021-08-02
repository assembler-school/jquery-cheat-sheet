$("#ex-10-jquery-select").on("change", function (ev) {
	const target = $(ev.target);
	$("#ex-10-jquery-msg").text(`Selected value: ${target.val()}`);
});
