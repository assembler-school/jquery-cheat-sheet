$("#ex-12-jquery-chk").on("change", function (ev) {
	const msg = $("#ex-12-jquery-msg");

	if ($(ev.target).prop("checked")) {
		msg.removeClass("hidden");
	} else {
		msg.addClass("hidden");
	}
});
