setTimeout(() => {
  let result = $("#result");
  let new_result = result.clone();
  result.append(new_result);
}, 2000);
