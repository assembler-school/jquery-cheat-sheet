$("#ex-31-jquery-btn").on("click", function (ev) {
	if ($("#ex-31-jquery-msg").length) return;

	const childrenElements = $("#ex-31-jquery-parent").children();

	childrenElements.each(function (index) {
		const duration = 1000 * (index + 1);

		$(this).fadeOut(duration);
	});
});
