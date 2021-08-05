document.querySelector('input[type="submit"]').addEventListener("click", (e) => {
  let inputs = document.querySelectorAll("option");

  inputs.forEach((input) => {
    if (input.selected) document.querySelector("#result").innerHTML += `${input.value} `;
  });
});
