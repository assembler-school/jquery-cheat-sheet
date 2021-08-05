setTimeout(() => {
  let span = document.createElement("span");
  span.textContent = "Before";
  document.querySelector("h4").before(span);
}, 2000);
