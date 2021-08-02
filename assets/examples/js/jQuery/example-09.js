$("#ex-09-jquery-form").on("submit", function (ev) {
	ev.preventDefault();
	const field = $(this.something);
	$("#ex-09-jquery-msg").text(`Submitted value: ${field.val()}`);
});
