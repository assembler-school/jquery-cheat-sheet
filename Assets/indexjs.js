/*Global Variables*/
let openModal = document.querySelectorAll("allContentTitles");
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("closeModal")[0];
let inner = document.getElementById("inner");
let outer = document.getElementById("outer");
/*Modal (open & close)*/
// When the user clicks the button, open the modal
$(".allContentTitles").click(function () {
  $("#myModal").css("display", "grid");
});
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
/* Modal Funionality */
