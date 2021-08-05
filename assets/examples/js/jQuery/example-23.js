$("#ex-23-jquery-btn").on("click", function (ev) {
	const element = $("#ex-23-jquery-msg");

	element.toggleClass("bg-green");
	element.hasClass("bg-green") ? element.text("I don't want to be green.") : element.text("I want to be green.");
});
