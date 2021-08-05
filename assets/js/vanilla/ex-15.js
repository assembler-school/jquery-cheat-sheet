let h4 = document.querySelector("h4");
setTimeout(() => {
  h4.remove(h4);
  document.querySelector("#result").textContent = "Item Removed";
}, 2000);
