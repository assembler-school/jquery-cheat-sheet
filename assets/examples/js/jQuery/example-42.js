$(function (ev) {
	setTimeout(() => {
		$("#ex-42-jquery-msg").animate(
			{
				opacity: "0.5",
				height: "toggle",
				width: "toggle",
				"font-size": 0,
				"background-color": "green",
			},
			500,
			"swing",
			function () {
				$(this).hide();
			}
		);
	}, 2000);
});
