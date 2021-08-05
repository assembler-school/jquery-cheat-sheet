setTimeout(() => {
  let result = document.querySelector("#result");
  let new_result = result.cloneNode(true);
  result.append(new_result);
}, 2000);
