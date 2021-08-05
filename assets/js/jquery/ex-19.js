setTimeout(() => {
  let span = $("<span>");
  span.html("Before");
  $("h4").before(span);
}, 2000);
