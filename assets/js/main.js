import { setWebSiteContent } from "./examples.js";
import { navigate } from "./router.js";

let wrapper = document.getElementById("app-content");
console.log("hola soy el wrapper", wrapper);

window.addEventListener("hashchange", navigate);

setWebSiteContent();

navigate();

export { wrapper };
