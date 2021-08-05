document.addEventListener("keydown", (e) => {
  document.querySelector("#key").innerHTML = `You have pressed <b>${e.key.toUpperCase()}</b>`;
});
