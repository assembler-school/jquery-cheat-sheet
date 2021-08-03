$("#ex-25-jquery-btn").on("click", function (ev) {
	const targetBtn = $("#ex-25-vanilla-btn");
	targetBtn.prop("disabled", false);
	targetBtn.removeClass("bg-02");

	$(this).prop("disabled", true);
	$(this).addClass("bg-02");
});
