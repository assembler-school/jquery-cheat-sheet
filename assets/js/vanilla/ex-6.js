document.querySelector("#name").addEventListener("input", (e) => {
  document.querySelector("#result").innerHTML = e.srcElement.value;
});
