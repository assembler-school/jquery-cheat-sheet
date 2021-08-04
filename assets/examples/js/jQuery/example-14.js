$("#ex-14-jquery-btn").on("click", function (ev) {
	if ($("#ex-14-jquery-msg").length) return;

	const element = $("<p>");

	element.addClass("bg-02 text-align-center text-white p-3 br-2 bs-black-03");
	element.text("This HTML Element has been created with jQuery.");
	element.prop("id", "ex-14-jquery-msg");

	element.insertAfter($(ev.target));
});
