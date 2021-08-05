setTimeout(() => {
  let lis = document.querySelectorAll("ul > li");
  lis.forEach((li) => {
    li.style.color = "red";
  });
}, 2000);
