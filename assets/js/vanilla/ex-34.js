let children = document.querySelector("#parent").children;
setTimeout(() => {
  for (const child of children) {
      child.style.fontWeight = "bold";
  }
}, 2000);
