$("#ex-12-jquery-chk").on("change", function (ev) {
	const msg = $("#ex-12-jquery-msg");
	const target = $(ev.target);

	if (target.prop("checked")) {
		msg.removeClass("no-display");
	} else {
		msg.addClass("no-display");
	}
});
