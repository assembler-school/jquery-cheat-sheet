// copy to clipboard

function copyToClipboard(event) {
	let copyTextarea = document.getElementById("drop-on-section");
	copyTextarea.focus();
	copyTextarea.select();

	try {
		let successful = document.execCommand("copy");
		let msg = successful ? "Success!" : "Error";
		console.log("Copying your code: " + msg);
	} catch (err) {
		console.log("Oops, unable to copy");
	}
}

export { copyToClipboard };
