let anchors = document.querySelectorAll("a");
setTimeout(() => {
  for (let index = 0; index < anchors.length; index++) {
    if (index === 0) {
      anchors[index].href = "www.google.com";
      document.querySelector("#result").innerHTML = "<br>The HREF of the first anchor has been changed";
    }
  }
}, 3000);
