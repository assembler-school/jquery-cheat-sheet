$("#ex-18-jquery-btn").on("click", function (ev) {
	if ($("#ex-18-jquery-msg").length) return;

	const referenceElement = $("#ex-18-jquery-parent").children().eq(1);
	const childElement = $("<p>");

	childElement.addClass("bg-02 text-align-center text-white p-3 br-2 bs-black-03");
	childElement.text("This HTML Element has been been added after 'Bar' with jQuery.");
	childElement.prop("id", "ex-18-jquery-msg");

	childElement.insertAfter(referenceElement);
});
