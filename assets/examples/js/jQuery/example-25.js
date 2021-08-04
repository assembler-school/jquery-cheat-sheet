$("#ex-25-jquery-btn").on("click", function (ev) {
	$("#ex-25-vanilla-btn").prop("disabled", false).removeClass("bg-02");
	$(ev.target).prop("disabled", true).addClass("bg-02");
});
