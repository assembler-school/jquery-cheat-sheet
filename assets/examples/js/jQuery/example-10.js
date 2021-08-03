$("#ex-10-jquery-select").on("change", function (ev) {
	$("#ex-10-jquery-msg").text(`Selected value: ${$(this).val()}`);
});
