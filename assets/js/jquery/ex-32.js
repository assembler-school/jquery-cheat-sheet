setTimeout(() => {
  let lis = $("ul > li");
  lis.each((index,element) => {
    $(element).css('color','red');
  });
}, 2000);
