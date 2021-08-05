document.querySelector("#check").addEventListener("change", () => {
  if (document.querySelector("#check").checked) document.querySelector("#result").innerHTML = 'Checked';
  else document.querySelector("#result").innerHTML = "No Checked";
});
