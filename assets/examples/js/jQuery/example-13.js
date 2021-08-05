$("#ex-13-jquery-list").on("click", function (ev) {
	if ($(ev.target).is("li")) $("#ex-13-jquery-msg").text(`Clicked item: ${$(ev.target).text()}`);
});
