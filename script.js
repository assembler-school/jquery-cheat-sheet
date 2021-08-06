let targetItems = document.querySelectorAll(".ul-action--list");
let clickedItem;
let modalClose = document.querySelector(".btn-modal--close");
let modalContainer = document.querySelector("#modal-bg");
let tagBody = document.querySelector(".body")



/* FUNCTION OPEN MODAL WHEN LI IS CLICKED IDENTIFYING WHICH LI ID WAS CLICKED ALSO */

targetItems.forEach(element => {
    element.addEventListener('click', (e)=> {
        if (e.target !== e.currentTarget) {
            modalContainer.style.display = "block";
            clickedItem = e.target.id;

          } else if (e.target == e.currentTarget) {
            return null;
          }
          e.stopPropagation;
    });
});

/* FUNCTION CLOSE MODAL */

modalClose.addEventListener("click", (e) => {
  modalContainer.style.display = "none";

});
