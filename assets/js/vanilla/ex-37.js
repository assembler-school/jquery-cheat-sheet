let fonts = document.querySelectorAll(".font");

setTimeout(() => {
  fonts.forEach((element) => {
    if (element.matches('[style="display: none;"]')) {
      element.style.display = "inline";
      element.style.color = "red";
    }
  });
}, 3000);
