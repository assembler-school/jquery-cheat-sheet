let lis = document.querySelectorAll("ul > li");
lis.forEach(li => {
  li.addEventListener("click", (e) => {
    document.querySelector("#result").innerHTML = `You have clicked on ${e.target.textContent}`;
  });
});