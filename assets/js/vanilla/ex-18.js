setTimeout(() => {
  let span = document.createElement("span");
  span.textContent = "After";
  document.querySelector("h4").after(span);
}, 2000);
