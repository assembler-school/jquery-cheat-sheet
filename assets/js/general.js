import { exercises } from "./exercises.js";

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-action='title-events']") || e.target.matches("[data-action='title-events'] *")) {
    expandCollapseFunctions("events");
  } else if (e.target.matches("[data-action='title-functions']") || e.target.matches("[data-action='title-functions'] *")) {
    expandCollapseFunctions("functions");
  }
});

function expandCollapseFunctions(name) {
  document.querySelector(`#list__${name}`).classList.toggle('display--none');
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-action='element']")) {
    showModal(e.target.dataset.ex);
  }
});

function showModal(ex) {
  document.querySelector("#modal").classList.toggle("modal--show");
  exercises.forEach((exercice) => {
    if (exercice.id == ex) {
      document.querySelector("#title__modal").innerHTML = exercice.title;
      document.querySelector("#preview").src = exercice.html;
      document.querySelector("#code__vanilla").src = exercice.vanillaCode;
      document.querySelector("#code__jquery").src = exercice.jqueryCode;
    }
  });
}

document.addEventListener("click", (e) => {
  if (e.target.matches("[data-action='close']") || e.target.matches("[data-action='title-events'] *")) {
    document.querySelector("#modal").classList.toggle("modal--show");
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    if (document.querySelector("#modal").classList.contains("modal--show")) document.querySelector("#modal").classList.toggle("modal--show");
  }
});

document.addEventListener("click", (e) => {
  if (e.target.id === "expand") displayShow();
  else if (e.target.id === "collapse") displayHidden();
});

function displayShow() {
  let nones = document.querySelectorAll(".display--none");
  nones.forEach((element) => {
    element.classList.remove("display--none");
  });
}

function displayHidden() {
  let uls = document.querySelectorAll("ul");
  uls.forEach((element) => {
    element.classList.add("display--none");
  });
}
