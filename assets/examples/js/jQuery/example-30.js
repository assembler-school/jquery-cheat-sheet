$("#ex-30-jquery-btn").on("click", function (ev) {
	if ($("#ex-30-jquery-msg").length) return;

	const childrenElements = $("#ex-30-jquery-parent").children();

	childrenElements.each(function (index) {
		const duration = 1000 * (index + 1);

		$(this).fadeIn(duration);
	});
});
