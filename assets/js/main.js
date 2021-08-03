import { navigate } from "./router.js";

window.addEventListener("hashchange", navigate);
var wrapper = document.getElementById("app");
var view = document.getElementById("view");

navigate();

export { wrapper, view };
