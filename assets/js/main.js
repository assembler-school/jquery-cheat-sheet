import { navigate } from "./router.js";

let wrapper = document.getElementById("app-content");

window.addEventListener("hashchange", navigate);

navigate();

export { wrapper };
