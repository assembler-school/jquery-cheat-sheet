document.getElementById("beginButton").addEventListener("click", function () {
  document.getElementById("middle").style.transform = "translateX(100px)";
  document.getElementById("middle").style.opacity = 0;
  setTimeout(() => {
    document.getElementById("middle").style.display = "none";
  }, 1000);
  document.getElementById("bottom").style.display = "flex";
  setTimeout(() => {
    document.getElementById("bottom").style.transform = "translateX(0px)";
    document.getElementById("bottom").style.opacity = 1;
  }, 2000);
});
