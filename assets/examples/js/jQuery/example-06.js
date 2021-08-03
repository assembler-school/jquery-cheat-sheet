$("#ex-06-jquery-input").on("input", function (ev) {
	$("#ex-06-jquery-msg").text($(ev.target).val());
});
