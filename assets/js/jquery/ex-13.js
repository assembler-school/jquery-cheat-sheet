$("ul > li").each((index,element) => {
  $(element).on("click", (e) => {
    $("#result").html(`You have clicked on ${$(element).text()}`);
  });
});
