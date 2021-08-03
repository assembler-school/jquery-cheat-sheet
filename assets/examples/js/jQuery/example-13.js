$("#ex-13-jquery-list").on("click", function (ev) {
	if ($(this).is("li")) $("#ex-13-jquery-msg").text(`Clicked item: ${$(this).text()}`);
});
