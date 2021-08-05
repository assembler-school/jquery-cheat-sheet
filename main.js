//* ------- OPEN MODAL FOR EVENTS -------

let events = document.getElementsByClassName("event");
let arrayOfEvents = Array.from(events);
let modal = document.getElementById("modal");

arrayOfEvents.forEach((event) => {
  event.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("--is-visible");
}

//* ------- OPEN MODAL FOR FUNCTIONS & SELECTORS ------

let functions = document.getElementsByClassName("function");

let arrayOfFunctions = Array.from(functions);

arrayOfFunctions.forEach((element) => {
  element.addEventListener("click", openModal);
});

//* ----- CLOSE MODAL -----

function closeModal() {
  modal.classList.remove("--is-visible");
}

//* --------- TO CLOSE THE MODAL WHEN CLICKING OUTSIDE --------------

window.onclick = function (event) {
  if (event.target == modal) {
    closeModal();
  }
};

//* --------- TO CLOSE THE MODAL WHEN PRESSING ESCAPE --------------

document.addEventListener("keydown", pressEscape);
function pressEscape(event) {
  if (event.key == "Escape") {
    closeModal();
  }
}
