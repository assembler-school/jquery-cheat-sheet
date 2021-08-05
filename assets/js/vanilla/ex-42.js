let result = document.querySelector("#result");
setTimeout(() => {
  result.animate(
    [
      {
        transform: "rotate(360deg)",
        backgroundColor: "blue",
      },
      {
        transform: "rotate(-360deg)",
        backgroundColor: "red",
      },
    ],
    { duration: 4000 }
  );
}, 2000);
