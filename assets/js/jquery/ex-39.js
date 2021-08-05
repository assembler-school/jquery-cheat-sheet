let anchors = $("a");
setTimeout(() => {
  $("a").each((index, element) => {
    if (index === 0) {
      $(element).attr("href","www.google.com");
      $("#result").html("<br>The HREF of the first anchor has been changed");
    }
  });
}, 3000);
