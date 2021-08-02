$("#ex-06-jquery-input").on("input", function (ev) {
	const target = $(this);
	$("#ex-06-jquery-msg").text(target.val());
});
