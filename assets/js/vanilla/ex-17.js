setTimeout(() => {
  let span = document.createElement("span");
  span.textContent = "Prepend element created";
  document.querySelector("#result").prepend(span);
});
