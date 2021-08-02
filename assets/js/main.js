import { navigate } from "./router.js";

let wrapper = document.getElementById("app-content");
console.log("hola soy el wrapper", wrapper);

window.addEventListener("hashchange", navigate);

navigate();

export { wrapper };
