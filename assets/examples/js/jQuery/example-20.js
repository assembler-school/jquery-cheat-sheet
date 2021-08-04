$("#ex-20-jquery-btn").on("click", function (ev) {
	if ($("#ex-20-jquery-clone").length) return;

	const referenceElement = $("#ex-20-jquery-reference");
	const newElement = referenceElement.clone();

	newElement.prop("id", "ex-20-jquery-clone");
	newElement.insertAfter(referenceElement);
});
