setTimeout(() => {
  $("#result").animate(
    {
      transform: "rotate(360deg)",
    },
    {
      duration: 4000,
      step: function (now,fx) {
        console.log(now,fx)
      },
    }
  );
}, 2000);
