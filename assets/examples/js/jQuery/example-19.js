$("#ex-19-jquery-btn").on("click", function (ev) {
	if ($("#ex-19-jquery-msg").length) return;

	const referenceElement = $("#ex-19-jquery-parent").children().eq(1);
	const childElement = $("<p>");

	childElement.addClass("bg-02 text-align-center text-white p-3 br-2 bs-black-03");
	childElement.text("This HTML Element has been added before 'Bar' with jQuery.");
	childElement.prop("id", "ex-19-jquery-msg");

	childElement.insertBefore(referenceElement);
});
