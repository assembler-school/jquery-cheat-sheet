$("#ex-24-jquery-btn").on("click", function (ev) {
	const button = $(ev.target);

	button.prop("disabled", true).addClass("bg-02");
	$("#ex-24-jquery-msg").removeClass("hidden");

	setTimeout(() => {
		button.prop("disabled", false).removeClass("bg-02");
		$("#ex-24-jquery-msg").addClass("hidden");
	}, 3000);
});
