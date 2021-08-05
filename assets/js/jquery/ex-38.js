$('input[type="submit"]').on("click", (e) => {
  $("option:selected").each((index, element) => {
       $("#result").append(`${$(element).val()} `);
  });
});
