$("#ex-24-jquery-btn").on("click", function (ev) {
	$(this).prop("disabled", true);
	$(this).addClass("bg-02");
	$("#ex-24-jquery-msg").removeClass("no-display");

	setTimeout(() => {
		$(this).prop("disabled", false);
		$(this).removeClass("bg-02");
		$("#ex-24-jquery-msg").addClass("no-display");
	}, 3000);
});
