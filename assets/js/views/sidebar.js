import { updateLocalStorage } from "../functions.js";

// copy to clipboard
let copyTextarea = document.getElementById("drop-on-section");

function copyToClipboard(event) {
	copyTextarea.focus();
	copyTextarea.select();

	try {
		let successful = document.execCommand("copy");
		let msg = successful ? "Success!" : "Error";
		console.log("Copying your code: " + msg);
		document.getElementById("copy-audio").play();
	} catch (err) {
		console.log("Oops, unable to copy");
	}
}

function dropOnArea() {
	copyTextarea.addEventListener("dragenter", backgrndChange);
	copyTextarea.addEventListener("dragover", prevStop);
	copyTextarea.addEventListener("drop", insertCode);
	copyTextarea.addEventListener("dragleave", backToOriginal);
	copyTextarea.addEventListener("input", insertIntoLocal);
}

function backgrndChange(e) {
	//
	copyTextarea.value = "";
	e.preventDefault();
	e.stopPropagation();
	copyTextarea.classList.add("about-to-drop");
}

function prevStop(e) {
	e.preventDefault();
	e.stopPropagation();
}

function backToOriginal(e) {
	e.preventDefault();
	e.stopPropagation();
	let textos = JSON.parse(localStorage.getItem("code"));
	copyTextarea.classList.remove("about-to-drop");

	for (const iterator of textos) {
		copyTextarea.value += iterator;
	}
}

//buscar el codigo en la lista de ejemplos ...
//mirar en que pagina estoy y luego ir a la lista de la pagina

function insertCode(e) {
	e.preventDefault();
	e.stopPropagation();

	//imprimir todo el contenido en la barra
	document.getElementById("drop-audio").play();
	copyTextarea.classList.remove("about-to-drop");
	let texto = localStorage.getItem("code");
	let actualTextArea = document.getElementById("drop-on-section").value;

	document.getElementById("drop-on-section").value = actualTextArea + texto;
	//play audio

	//append al ultimo nodo
	//la box tiene el id del objeto a pegar
	//obejto.jquery_code
}

function insertIntoLocal() {
	localStorage.setItem(
		"code",
		document.getElementById("drop-on-section").value
	);
}

export { copyToClipboard, dropOnArea };
