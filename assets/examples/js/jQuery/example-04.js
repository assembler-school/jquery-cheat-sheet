$(document).on("keydown", function (ev) {
	$("#ex-04-jquery-msg").text(`Key pressed: ${ev.key.toUpperCase()}`);
});
