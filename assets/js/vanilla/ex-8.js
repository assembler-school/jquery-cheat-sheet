document.querySelector("img").addEventListener("error", (e) => {
  document.querySelector("#result").innerHTML = `Failed image! ${e.type}`;
});
