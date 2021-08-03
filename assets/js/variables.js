/**
 * Global Variables
 */
let objectsJS = [
  {
    id: "",
    title: "",
    type: "",
    code: "",
    infoLink: "",
  },
  {
    id: "1",
    title: "Prueba 1",
    type: "events",
    code: "Esto es una prueba de la seccion JS",
    infoLink: "https://github.com/ParisArcos",
  },
  {
    id: "2",
    title: "Prueba 2",
    type: "events",
    code: "Esto es una prueba de la seccion JS",
    infoLink: "https://github.com/ParisArcos",
  },
];
localStorage.setItem("objectsJS", JSON.stringify(objectsJS));

let objectsJQ = [
  {
    id: "",
    title: "",
    type: "",
    code: "",
    infoLink: "",
  },
  {
    id: "1",
    title: "Prueba 1",
    type: "events",
    code: "Esto es una prueba de la seccion <br> JQ",
    infoLink: "https://github.com/ParisArcos",
  },
];
localStorage.setItem("objectsJQ", JSON.stringify(objectsJQ));

let examples = [
  {
    id: "1",
    code: "example prueba cosas",
    popUpText: "se ha efectuado example 1 con exito",
  },
];
localStorage.setItem("examples", JSON.stringify(examples));

let dragged;
