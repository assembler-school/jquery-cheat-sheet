$("#ex-17-jquery-btn").on("click", function (ev) {
	const parentElement = $("#ex-17-jquery-parent");
	const childElement = $("#ex-17-jquery-child");

	childElement.text("This HTML Element has been prepended with jQuery JS.");
<<<<<<< HEAD
	childElement.prependTo(parentElement);
	//parentElement.prepend(childElement);
=======

	parentElement.prepend(childElement);
>>>>>>> 2733413fd9d90c1bb4645b84e8d49396ca555b8d
});
