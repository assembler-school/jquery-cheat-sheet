$("#ex-13-jquery-list").on("click", function (ev) {
	const target = $(ev.target);
	if (target.is("li")) $("#ex-13-jquery-msg").text(`Clicked item: ${target.text()}`);
});
