import { initialSetLocalStorage, createExample } from "./functions.js";

function setWebSiteContent() {
	let events = [];
	initialSetLocalStorage("events", events);

	let functions = [];
	initialSetLocalStorage("functions", functions);

	let selectors = [];
	initialSetLocalStorage("selectors", selectors);

	let codeToCopy = "";
	initialSetLocalStorage("code", codeToCopy);

	let draggableOption = "";
	initialSetLocalStorage("codeOption", draggableOption);

	createExample(
		"HTML document loaded",
		"events",
		`document.addEventListener("DOMContentLoaded", function(){})`,
		`$(document).ready(function() {/*same as: $(function() { alert("hi 1");*/});`,
		"The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading. The original target for this event is the Document that has loaded. You can listen for this event on the Window interface to handle it in the capture or bubbling phases",
		"The .ready() method offers a way to run JavaScript code as soon as the page's Document Object Model (DOM) becomes safe to manipulate. This will often be a good time to perform tasks that are needed before the user views or interacts with the page, for example to add event handlers and initialize plugins. When multiple functions are added via successive calls to this method, they run when the DOM is ready in the order in which they are added. As of jQuery 3.0, jQuery ensures that an exception occuring in one handler does not prevent subsequently added handlers from executing",
		`<code>
			window.addEventListener('DOMContentLoaded', (event) =&gt;{" "}
			{console.log("DOM fully loaded and parsed")})
		</code>`,
		`<code>
			function() {$("p").text("The DOM is now loaded and can be manipulated.")}
		</code>`
	);
}

export { setWebSiteContent };
