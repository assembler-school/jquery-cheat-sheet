$("#ex-09-jquery-form").on("submit", function (ev) {
	ev.preventDefault();
	$("#ex-09-jquery-msg").text(`Submitted value: ${$(ev.target.input).val()}`);
});
