$("#ex-38-jquery-select").on("change", function (ev) {
	$("#ex-38-jquery-msg").text(`Selected value: ${$(this).val().join(", ")}`);
});
