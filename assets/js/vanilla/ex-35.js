let fonts = document.querySelectorAll(".font");

setTimeout(() => {
  fonts.forEach((font) => {
    if (font.classList.contains("font")) font.style.fontWeight = "bold";
  });
}, 2000);
